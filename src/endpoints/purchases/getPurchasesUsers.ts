import { Request, Response } from "express";
import { PurchasesPrismaDatabase } from "../../data/purchases/PurchasesPrismaDatabase";

export const getPurchasesUsers = async (
   req: Request,
   res: Response
) => {
   try {
      const {id} = req.params
      const purchaseUser = await new PurchasesPrismaDatabase().getPurchasePrismaByIdUser(id)
      
      res.send(purchaseUser)

   } catch (error:any) {
     
      if(error instanceof Error){
         res.send(error.message).status(400).end()
      }else{
         console.log(error.sqlMessage || error.message);
         res.send('Ocorreu um error inesperado').status(500).end()
      }
   
   }
}