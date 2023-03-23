import {
  getProductByName,
  getProductsByCategory,
  getProductsById,
  getProductsByBrand,
  getAllProducts,
  createProducts,
  getMarketProducts,
} from "../helpers/products.helper.js";
import { createSmarket } from "../helpers/market.helper.js";
import { createPrices } from "../helpers/helpers.price.js";
import { precios } from "../prueba(4).js";
import createUser from "../helpers/createUser.helper.js";
import Membership from "../models/membership.js";
// import Prueba3 from "../prueba(3).js";

export async function getProducts(req, res) {
  try {
    let allProducts = await getAllProducts();

    // esto es para seguir creando la misma base de datos
    if (allProducts.length == 0) {
      let createMembershipPrice = await Membership.create({ price: 2350 });

      await createUser();

      await createSmarket();

      await createProducts();
      await createPrices(precios);
      let allProducts = await getAllProducts();

      res.status(200).json(allProducts);
    } else return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
}

export async function getProductId(req, res) {
  const { id } = req.params;
  try {
    const response = await getProductsById(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ err: error.message });
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
}

export async function getByCategory(req, res) {
  const filterCategory = req.params;
  // console.log(category, order)
  try {
    const response = await getProductsByCategory(filterCategory);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

export async function getByBrand(req, res) {
  const { brand, order } = req.params;
  try {
    const response = await getProductsByBrand(brand, order);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
}

export async function postProduct(req, res) {
  const infoBody = req.body;
  try {
    let createProductsHere = await createProducts(infoBody);
    res.status(200).json(createProductsHere);
  } catch (error) {
    res.status(400).send({ err: error.message });
  }
}

export async function getProductsMarket(req, res) {
  const market = req.params;
  try {
    let marketProducts = await getMarketProducts(market);
    res.status(200).json(marketProducts);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}
