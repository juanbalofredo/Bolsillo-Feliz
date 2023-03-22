import { Router } from "express";
import { getAllMarket, getById, deleteMarket, postMarket } from "../controllers/market.controller.js"
import { payment, updatePaymentPrice, getPaymentPrice } from "../controllers/mercPago.controller.js";
const market = Router();

market.get("/", getAllMarket);
market.get("/id/:id", getById);
market.post("/create", postMarket);
market.put("/putmarket/:id", )


market.delete("/deletemarket/:id", deleteMarket );

//MERCADO PAGO
market.post("/payment", payment);
market.put("/paymentprice", updatePaymentPrice);
market.get("/paymentprice", getPaymentPrice)
// market.get("/feedback", feedback);

export default market;