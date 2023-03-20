import { getProductByName, getProductsByCategory, getProductsById, getProductsByBrand, getAllProducts, createProducts } from "../helpers/products.helper.js";
import { createSmarket } from "../helpers/market.helper.js";
import { createPrices } from "../helpers/helpers.price.js";
import { precios } from "../prueba(4).js"
import createUser from "../helpers/createUser.helper.js";
// import Prueba3 from "../prueba(3).js";

export async function getProducts(req, res) {
    try {
        let allProducts = await getAllProducts();
        console.log("entro a getProducts")

        // esto es para seguir creando la misma base de datos
        if (allProducts.length == 0) {
            await createUser()
            console.log("entro a Linea 14")
            await createSmarket()
            console.log("entro a la condicion if")
            await createProducts()
            await createPrices(precios)
            let allProducts = await getAllProducts();
            console.log("salio del if")
            res.status(200).json(allProducts);
        }
        else return res.status(200).json(allProducts);
    } catch (error) {
        return res.status(400).json({ err: error.message });
    }
};

export async function getProductId(req, res) {
    const { id } = req.params;
    try {
        const response = await getProductsById(id)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json({ err: error.message })
    }

}

export async function getByName(req, res) {
    const nameOrder = req.query;
    try {
        const response = await getProductByName(nameOrder);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ err: error.message });
    }
};

export async function getByCategory(req, res) {
    const filterCategory = req.params;
    // console.log(category, order)
    try {
        const response = await getProductsByCategory(filterCategory)
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

export async function getByBrand(req, res) {
    const { brand, order } = req.params;
    try {
        const response = await getProductsByBrand(brand, order)
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ err: error.message });
    }
};

export async function postProduct(req, res) {
    const infoBody = req.body
    try {
        let createProductsHere = await createProducts(infoBody);
        res.status(200).json(createProductsHere);
    } catch (error) {
        res.status(400).send({ err: error.message })
    }
};