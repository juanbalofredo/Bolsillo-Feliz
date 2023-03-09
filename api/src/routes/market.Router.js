import { Router } from "express";
import { getAllMarket, getById, deleteMarket} from "../controllers/market.controller.js"
import { subscriptionLink } from "../controllers/mercPago.controller.js";

const market = Router();

market.get("/", getAllMarket);
market.get("/id/:id", getById);

market.put("/putmarket/:id", )

market.delete("/deletemarket/:id", deleteMarket );

//MERCADO PAGO

market.post("/paymentSubscription", subscriptionLink)

export default market;