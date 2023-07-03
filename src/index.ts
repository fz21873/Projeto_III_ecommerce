import { app } from "./app";
import { createProduct } from "./endpoints/products/createProduct";
import { getAllProducts } from "./endpoints/products/getAllProducts";
import { createPurchase } from "./endpoints/purchases/createPurchase";
import { getAllPurchases } from "./endpoints/purchases/getAllPurchases";
import { getPurchasesUsers } from "./endpoints/purchases/getPurchasesUsers";
import { createTicket } from "./endpoints/tickets/createTicket";
import { getAllTickets } from "./endpoints/tickets/getAllTickets";
import { createUser } from "./endpoints/users/createUser";
import { getAllUsers } from "./endpoints/users/getAllUsers";


app.get("/users", getAllUsers)
app.post("/users", createUser)


app.get("/products", getAllProducts)
app.post("/products", createProduct)


app.get("/purchases", getAllPurchases)
app.post("/purchases", createPurchase)
app.get("/purchasesuser/:id", getPurchasesUsers)


app.get("/trips", getAllTickets)
app.post("/trip", createTicket)
