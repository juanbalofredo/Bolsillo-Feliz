import { Router } from "express";
import { postEspecialPrice, postNonEspecialtPrice, putPrice } from "../controllers/controller.price.js";

const price = Router();

price.post("/nonespecial", postNonEspecialtPrice)
price.put("/", putPrice)
// price.post("/especial", postEspecialPrice)


export default price;