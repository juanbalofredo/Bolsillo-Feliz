import { Router } from 'express';
import { getPrice, putPrice } from "../controllers/controller.price.js";

const routerPrice = Router();



// routerPrice.get("/", getPrices);
// routerPrice.post("/", postPrice);
routerPrice.get("/", getPrice);
routerPrice.put("/", putPrice);

export default routerPrice;