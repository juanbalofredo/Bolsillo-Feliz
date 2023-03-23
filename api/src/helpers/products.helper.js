import Products from "../models/products.js";
import { Op } from "sequelize";
import Prices from "../models/price.js";
import SuperM from "../models/superM.js";
import { productos } from "../prueba(4).js";
import { createPrices } from "./helpers.price.js";

export async function getAllProducts() {
    const allProducts = await Products.findAll(
        {
            attributes: ['name', "image", 'brand', "id", "category","fullName","unit"],
            include: [
                {
                    model: Prices,
                    attributes: ['price'],
                    where: { price: {[Op.ne]: null} },
                    include: [
                        {
                            model: SuperM,
                            attributes: ['name', "image", "id"]
                        }
                    ]
                }
            ],
            order: [["name", "ASC"]]
        }
    )
    return allProducts;
}



export function getProductsById(id) {
    const productsById = Products.findOne({
        where: { id },
        include: [
            {
                model: Prices,
                attributes: ['price'],
                include: [
                    {
                        model: SuperM,
                        attributes: ['name', "image", "id"]
                    }
                ]
            }
        ],
    });
    return productsById;
}

export async function getProductByName({ name, order }) {
    const productsByName = await Products.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            },
        },
        order: [["name", order]]
    });

    const productsByNameParser = productsByName?.map(e => {
        let parsePrice = JSON.parse(e.price);
        e.price = parsePrice;
        return e;
    })
    return productsByNameParser;
};

export async function getProductsByCategory({ category, order, brand, name }) {
    if (category === "all" && brand == "all" && name === "all") {
        let productByCategory = await Products.findAll({
            include: [
                {
                    model: Prices,
                    attributes: ['price'],
                    where: { price: {[Op.ne]: null} },
                    include: [
                        {
                            model: SuperM,
                            attributes: ['name', "image", "id"]
                        }
                    ]
                }
            ],
            order: [["name", order]]
        })
        if (productByCategory.length != 0) return productByCategory
        throw Error("Category not found");
    }
    if (category === "all" && brand === "all" && name !== "all") {
        let productByCategory = await Products.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
                // supermarket: "General"
            },
            include: [
                {
                    model: Prices,
                    attributes: ['price'],
                    where: { price: {[Op.ne]: null} },
                    include: [
                        {
                            model: SuperM,
                            attributes: ['name', "image", "id"]
                        }
                    ]
                }
            ],
            order: [["name", order]]
        })
        if (productByCategory.length != 0) return productByCategory
        throw Error("Category not found");
    }
    if (category === "all" && brand !== "all" && name !== "all") {
        let productByCategory = await Products.findAll({
            where: {
                brand: {
                    [Op.iLike]: `%${brand}%`
                },
                name: {
                    [Op.iLike]: `%${name}%`
                }
                // supermarket: "General"
            },
            include: [
                {
                    model: Prices,
                    attributes: ['price'],
                    where: { price: {[Op.ne]: null} },
                    include: [
                        {
                            model: SuperM,
                            attributes: ['name', "image", "id"]
                        }
                    ]
                }
            ],
            order: [["name", order]]
        })
        if (productByCategory.length != 0) return productByCategory
        throw Error("Category not found");
    }
    if (category !== "all" && brand !== "all" && name !== "all") {
        let productByCategory = await Products.findAll({
            where: {
                category: {
                    [Op.iLike]: `%${category}%`
                },
                brand: {
                    [Op.iLike]: `%${brand}%`
                },
                name: {
                    [Op.iLike]: `%${name}%`
                }
            },
            include: [
                {
                    model: Prices,
                    attributes: ['price'],
                    where: { price: {[Op.ne]: null} },
                    include: [
                        {
                            model: SuperM,
                            attributes: ['name', "image", "id"]
                        }
                    ]
                }
            ],
            order: [["name", order]]
        })


        if (productByCategory.length != 0) return productByCategory
        throw Error("Category not found");
    }
    if (category !== "all" && brand === "all" && name === "all") {
        let productByCategory = await Products.findAll({
            where: {
                category: {
                    [Op.iLike]: `%${category}%`
                }
            },
            include: [
                {
                    model: Prices,
                    attributes: ['price'],
                    where: { price: {[Op.ne]: null} },
                    include: [
                        {
                            model: SuperM,
                            attributes: ['name', "image", "id"]
                        }
                    ]
                }
            ],
            order: [["name", order]]
        })
        if (productByCategory.length != 0) return productByCategory
        throw Error("Category not found");
    }
    if (category !== "all" && brand === "all" && name !== "all") {
        let productByCategory = await Products.findAll({
            where: {
                category: {
                    [Op.iLike]: `%${category}%`
                }
            },
            include: [
                {
                    model: Prices,
                    attributes: ['price'],
                    where: { price: {[Op.ne]: null} },
                    include: [
                        {
                            model: SuperM,
                            attributes: ['name', "image", "id"]
                        }
                    ]
                }
            ],
            order: [["name", order]]
        })
        if (productByCategory.length != 0) return productByCategory
        throw Error("Category not found");
    } else {
        let productByCategory = await Products.findAll({
            where: {
                // category: {
                //     [Op.iLike]: `%${category}%`
                // },
                brand: {
                    [Op.iLike]: `%${brand}%`
                }
            },
            include: [
                {
                    model: Prices,
                    attributes: ['price'],
                    where: { price: {[Op.ne]: null} },
                    include: [
                        {
                            model: SuperM,
                            attributes: ['name', "image", "id"]
                        }
                    ]
                }
            ],
            order: [["name", order]]
        })
        if (productByCategory.length != 0) return productByCategory
        throw Error("Category not found");
    }

}

export function getProductsByBrand(brand, order) {
    const productByBrand = Products.findAll({
        where: { brand },
        order: [["brand", order]]
    })
    return productByBrand;
};

export async function createProducts(productsFromBody) {
    let verifyProducts = await Products.findAll()
    if (verifyProducts.length === 0) {
        let createProducts = await Products.bulkCreate(productos)
        return createProducts;
    }
    let { name, brand, image, category, superMId, price, unit } = productsFromBody;

    // verifico si superMId existe de no existir tira error
    let verifySupermId = await SuperM.findOne({
        where: { id: superMId }
    })
    if (verifySupermId) {

        //comprobado la existencia creo el producto
        let createProduct = await Products.create({ name, brand, image, category, unit })


        // ahora creo la relacion producto precio con la propiedad id del producto y el superMId
        await createPrices({ price, superMId, productId: createProduct.id })

        //una vez añadido el producto buscamos el producto con el id del producto y tmb incluimos el precio
        let productAndPrice = await Products.findOne({
            where: { id: createProduct.id },
            include: [
                {
                    model: Prices,
                    attributes: ['price'],
                    include: [
                        {
                            model: SuperM,
                            attributes: ['name', "image", "id"]
                        }
                    ]
                }
            ],
        })
        return productAndPrice;
    }
    throw Error(`Error: market ${superMId} does not exist`)
}

export async function getMarketProducts(dataParams){
    const { market } = dataParams;
    const productsOfMarket = await Prices.findAll({
        where: {superMId: market},
        include: { model: Products, attributes: ["name","unit", "brand","image"]}
    })
    return productsOfMarket;
}