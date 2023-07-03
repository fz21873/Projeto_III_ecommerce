import { Request, Response } from "express";
import { TicketsPrismaDatabase } from "../../data/tickets/TicketsPrismaDatabase";

export const getAllTickets = async (
   req: Request,
   res: Response
) => {
 
   try {
     
     const tickets = await new TicketsPrismaDatabase().getAllPrismaTickets()
     res.send(tickets)

   } catch (error:any) {
     
      if(error instanceof Error){
         res.send(error.message).status(400).end()
      }else{
         console.log(error.sqlMessage || error.message);
         res.send('Ocorreu um error inesperado').status(500).end()
      }
   
   }
}