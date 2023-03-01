import apiInfo from "../helpers/apiInfo.js"
import Products from "../models/products.js";
// asdasd

export default async function getProducts(req, res) {
    const response2 = await Products.findAll()
    try {
        if (response2.length == 0) {
            apiInfo().then(r => res.status(200).json(r));
        }
        else return res.status(200).json(response2);


    } catch (error) {
        return res.status(400).json({ err: error.message });

    }
};