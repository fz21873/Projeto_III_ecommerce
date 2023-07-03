import { Request, Response } from "express";
import { PurchasesPrismaDatabase } from "../../data/purchases/PurchasesPrismaDatabase";
import { Purchase } from "../../entities/Purchase";

export const createPurchase = async (
   req: Request,
   res: Response
) => {
   try {
     const purchasesDB = new PurchasesPrismaDatabase
     const {id, user_id, product_id, quantity, total_amount} = req.body
     const newPurchases = new Purchase(id,user_id, product_id, quantity, total_amount)

     await purchasesDB.createPrismaPurchases(newPurchases)

     res.status(200).send({newPurchases})


   } catch (error:any) {
     
      if(error instanceof Error){
         res.send(error.message).status(400).end()
      }else{
         console.log(error.sqlMessage || error.message);
         res.send('Ocorreu um error inesperado').status(500).end()
      }


   }
}