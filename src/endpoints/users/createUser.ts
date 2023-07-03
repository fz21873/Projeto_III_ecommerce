import { Request, Response } from "express";

import { User } from "../../entities/User";
import { UserPrismaDataBase } from "../../data/users/UserPrismaDataBase";
import { GenerateId } from "../../service/GenerateId";


export const createUser = async (
   req: Request,
   res: Response
) => {
   try {
     const userDB = new UserPrismaDataBase
     const {name,email,age} = req.body
     const checkEmail = await userDB.getUserPrismaByEmail(email)

     if(checkEmail) throw new Error(`The email ${email} already in use`)
     
     const id =new  GenerateId().idGnerate()

     const newUser = new User(id,name,email,age)

     await userDB.createPrismaUsers(newUser)

     res.status(200).send({newUser})
      

   } catch (error:any) {
     
      if(error instanceof Error){
         res.send(error.message).status(400).end()
      }else{
         console.log(error.sqlMessage || error.message);
         res.send('Ocorreu um error inesperado').status(500).end()
      }
     
   }
}