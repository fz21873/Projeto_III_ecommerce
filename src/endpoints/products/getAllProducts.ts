import { Request, Response } from "express";
import { ProductPrismaDataBase } from "../../data/products/ProductPrismaDataBase";

export const getAllProducts = async (
   req: Request,
   res: Response
) => {
   try {

      const products = await new ProductPrismaDataBase().getAllPrismaProducts()

      res.send(products)

   } catch (error:any) {
     
      if(error instanceof Error){
         res.send(error.message).status(400).end()
      }else{
         console.log(error.sqlMessage || error.message);
         res.send('Ocorreu um error inesperado').status(500).end()
      }

   }
}