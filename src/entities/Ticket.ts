import { Product } from "./Product";


export class Ticket extends Product {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly description: string,
    readonly price: number,
    readonly origin:string,
    readonly destination:string,
    readonly product_id:string
   
    
  ) {
    super(id, name, description, price)
  }
}