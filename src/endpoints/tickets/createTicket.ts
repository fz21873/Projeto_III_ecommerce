import { Request, Response } from "express";
import { TicketsPrismaDatabase } from "../../data/tickets/TicketsPrismaDatabase";
import { Ticket } from "../../entities/Ticket";
import { GenerateId } from "../../service/GenerateId";

export const createTicket = async (
   req: Request,
   res: Response
) => {
   try {
     const ticketsDB = new TicketsPrismaDatabase
     const { name, description ,price ,origin,destination,product_id} = req.body


    
     const id = new GenerateId().idGnerate()

     const newTickets = new Ticket(id, name, description ,price ,origin,destination,product_id)
     const checkProduct = await ticketsDB.getProductPrismaById(newTickets)
     if(!checkProduct) throw new Error(`The product must be registered: ${name} to continue `)
     await ticketsDB.createPrismaTicket(newTickets)

     res.status(200).send({newTickets})


   } catch (error:any) {
     
      if(error instanceof Error){
         res.send(error.message).status(400).end()
      }else{
         console.log(error.sqlMessage || error.message);
         res.send('Ocorreu um error inesperado').status(500).end()
      }


   }
}