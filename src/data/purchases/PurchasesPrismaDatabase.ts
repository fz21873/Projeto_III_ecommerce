import { PrismaClient } from '@prisma/client';
import { Purchase } from '../../entities/Purchase';


export class PurchasesPrismaDatabase extends PrismaClient{
  

  getAllPrismaPurchases = async () =>{
    const result = await this.labecommerce_purchases.findMany()
    return result
  }

  getPurchasePrismaByIdUser = async (user_id:string) =>{
    const result = await this.labecommerce_purchases.findMany({
      where: { user_id }
    })
    return result
  }

  createPrismaPurchases = async (purchase: Purchase)  =>{
   
     await this.labecommerce_purchases.createMany({ data : purchase})
  }

  updatePrismaPurchases = async (id: number , data: Partial<Purchase>)  =>{
   
    await this.labecommerce_purchases.update({ 
      where:{ id },
      data
    })
 }

  deletePrismaPurchases = async (id: number )  =>{
   
  await this.labecommerce_purchases.delete({ where: { id } })
}
}