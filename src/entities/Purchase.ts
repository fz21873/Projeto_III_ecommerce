import { Product } from "./Product";
import { User } from "./User";


export class Purchase {
  constructor(
    readonly id:number,
    readonly user_id: string,
    readonly product_id: string,
    readonly quantity: number,
    readonly  total_amount: number,
    readonly user?:User | any,
    readonly product?:Product | any,
  ) {
     
  }
}