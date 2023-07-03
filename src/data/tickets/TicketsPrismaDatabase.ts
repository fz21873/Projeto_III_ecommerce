import { PrismaClient } from '@prisma/client';
import { Ticket } from '../../entities/Ticket';


export class TicketsPrismaDatabase extends PrismaClient{
  

  getAllPrismaTickets = async () =>{
      const result = await this.labecommerce_tickes.findMany({
  
    })
    return result
  }

  getProductPrismaById = async (ticket: Ticket) =>{
    const result = await this.labecommerce_products.findUnique({where:{id:ticket.product_id}
    })
    return result
  }

  createPrismaTicket = async (ticket: Ticket)  =>{
   
     await this.labecommerce_tickes.create({data:
       ticket
  })

  }

  updatePrismaPurchases = async (id: string , data: Partial<Ticket>)  =>{
   
    await this.labecommerce_tickes.update({ 
      where:{ id },
      data
    })
 }

  deletePrismaPurchases = async (id: string )  =>{
   
  await this.labecommerce_tickes.delete({ where: { id } })
}
 

}