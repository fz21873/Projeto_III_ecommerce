import { PrismaClient } from "@prisma/client";
import { User } from "../../entities/User";


export class UserPrismaDataBase extends PrismaClient{

  getAllPrismaUsers = async () =>{
    
    const result = await this.labecommer_users.findMany()
    return result
  }

  getUserPrismaByEmail = async (email:string) =>{
    const result = await this.labecommer_users.findFirst({where:{email:email}})
    return result
  }

  createPrismaUsers = async (user: User)  =>{
   
     await this.labecommer_users.create({ data : user})
  }

  updatePrismaUsers = async (id: string , data: Partial<User>)  =>{
    
    await this.labecommer_users.update({ 
      where:{ id },
      data
    })
 }

  deletePrismaUsers = async (id: any )  =>{
   
  await this.labecommer_users.delete({ where: { id } })
}
}