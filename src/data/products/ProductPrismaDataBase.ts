import { PrismaClient } from '@prisma/client';
import { Product } from '../../entities/Product';


export class ProductPrismaDataBase extends PrismaClient{
  

  getAllPrismaProducts = async () =>{
    
    const result = await this.labecommerce_products.findMany()
    return result
  }

  getProductPrismaByName = async (data:Product) =>{
    const result = await this.labecommerce_products.findFirst({where:{name:data.name}
    })
    return result
  }

  createPrismaProducts = async (product: Product)  =>{
   
     await this.labecommerce_products.create({ data : product})
  }

  updatePrismaProducts = async (id: any , data: Partial<Product>)  =>{
   
    await this.labecommerce_products.update({ 
      where:{ id },
      data
    })
 }

  deletePrismaProducts = async (id: string )  =>{
   
  await this.labecommerce_products.delete({ where: { id } })
}
}