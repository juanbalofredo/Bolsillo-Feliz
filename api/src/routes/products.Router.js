import { Router } from "express";
// //importar los controller
// console.log("s")
import allProducts from "../controllers/allProducts.js"



const app = Router();

app.get("/", allProducts)

// products.get("/id/:id", /*aqui va el controller */)
// products.get("/name?", /*aqui va el controller */)
// products.get("/category", /*aqui va el controller */)

export default app;