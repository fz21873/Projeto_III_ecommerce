import { Request, Response } from "express";
import { PurchasesPrismaDatabase } from "../../data/purchases/PurchasesPrismaDatabase";

export const getAllPurchases = async (
   req: Request,
   res: Response
) => {
   try {
    
      const purchase = await new PurchasesPrismaDatabase().getAllPrismaPurchases()
      
      res.send(purchase)

   } catch (error:any) {
     
      if(error instanceof Error){
         res.send(error.message).status(400).end()
      }else{
         console.log(error.sqlMessage || error.message);
         res.send('Ocorreu um error inesperado').status(500).end()
      }
   
   }
}