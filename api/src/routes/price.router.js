import { Router } from "express";
import { postEspecialPrice, postNonEspecialtPrice } from "../controllers/controller.price.js";

const price = Router();

price.post("/nonespecial", postNonEspecialtPrice)
// price.post("/especial", postEspecialPrice)


export default price;