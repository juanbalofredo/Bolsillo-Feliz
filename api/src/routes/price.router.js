import { Router } from "express";
import { postEspecialPrice, postNonEspecialtPrice, putPrice, deletePrice } from "../controllers/controller.price.js";

const price = Router();

price.post("/nonespecial", postNonEspecialtPrice)
price.put("/", putPrice)
// price.post("/especial", postEspecialPrice)
price.delete("/delete", deletePrice)


export default price;