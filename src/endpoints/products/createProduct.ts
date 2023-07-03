import { Request, Response } from "express";
import { ProductPrismaDataBase } from "../../data/products/ProductPrismaDataBase";
import { Product } from "../../entities/Product";
import { GenerateId } from "../../service/GenerateId";

export const createProduct = async (
   req: Request,
   res: Response
) => {
   try {
     const productDB = new ProductPrismaDataBase
     const {name, description, price} = req.body
     const checkName = await productDB.getProductPrismaByName(name)
     
     if(checkName?.name === name) throw new Error(`Product ${name} already exists`)

     const id = new GenerateId().idGnerate()

     const newProduct = new Product(id, name, description, price)

     await productDB.createPrismaProducts(newProduct)

     res.status(200).send({newProduct})


   } catch (error:any) {
     
      if(error instanceof Error){
         res.send(error.message).status(400).end()
      }else{
         console.log(error.sqlMessage || error.message);
         res.send('Ocorreu um error inesperado').status(500).end()
      }


   }
}