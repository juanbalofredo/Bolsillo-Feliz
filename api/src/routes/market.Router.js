import { Router } from "express";
import { getAllMarket, getById, deleteMarket, postMarket} from "../controllers/market.controller.js"
import payment from "../controllers/mercPago.controller.js";
const market = Router();

market.get("/", getAllMarket);
market.get("/id/:id", getById);
market.post("/create", postMarket)
market.put("/putmarket/:id", )

market.delete("/deletemarket/:id", deleteMarket );

//MERCADO PAGO
market.post("/payment", payment);
// market.get("/feedback", feedback);

export default market;