import { Request, Response } from "express";

import { User } from "../../entities/User";
import { UserPrismaDataBase } from "../../data/users/UserPrismaDataBase";



export const updateUser = async (
   req: Request,
   res: Response
) => {
   try {
     const userDB = new UserPrismaDataBase
     const {name,email,age} = req.body
     const id = req.params.id
     console.log("udate")
    
     const editUser = new User(id, name ,email,age)

     await userDB.updatePrismaUsers(id,editUser)

     res.status(200).send({editUser})
      

   } catch (error:any) {
     
      if(error instanceof Error){
         res.send(error.message).status(400).end()
      }else{
         console.log(error.sqlMessage || error.message);
         res.send('Ocorreu um error inesperado').status(500).end()
      }
     
   }
}