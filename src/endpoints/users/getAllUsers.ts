import { Request, Response } from "express";

import { UserPrismaDataBase } from "../../data/users/UserPrismaDataBase";

export const getAllUsers = async (
   req: Request,
   res: Response
) => {
   try {
    
      const users = await new UserPrismaDataBase().getAllPrismaUsers()
      
      
      res.send(users)

   } catch (error:any) {
     
      if(error instanceof Error){
         res.send(error.message).status(400).end()
      }else{
         console.log(error.sqlMessage || error.message);
         res.send('Ocorreu um error inesperado').status(500).end()
      }
   
   }
}