import { Router } from "express";
import { numberPage } from "../controllers/page.controller.js";
// //importar los controller
import { getByName, getProductId, getProducts, getByCategory, getByBrand, postProduct, getProductsMarket } from "../controllers/product.controller.js";


const products = Router();

products.post("/", postProduct)
products.get("/page/:number", numberPage)
products.get("/", getProducts);
// products.get("/all", getProductsAll);
products.get("/id/:id", getProductId);
products.get("/name", getByName);
products.get("/category/:category/:brand/:order/:name", getByCategory);
products.get("/brand/:brand/:order", getByBrand);
products.get("/productsbyid/:market", getProductsMarket);


export default products;

