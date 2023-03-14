import Products from "../models/products.js";
import { Op } from "sequelize";
import Prices from "../models/price.js";
import SuperM from "../models/superM.js";
import { productos } from "../prueba(4).js";

export async function getAllProducts() {
    const allProducts = await Products.findAll(
        {
            attributes: ['name', "image", 'brand', "id", "category"],
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
    console.log("esto es Name y Order ==>", name, order)
    const productsByName = await Products.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            },
        },
        order: [["name", order]]
    });

    console.log("esto es ProducByName ==>", productsByName)
    const productsByNameParser = productsByName?.map(e => {
        let parsePrice = JSON.parse(e.price);
        e.price = parsePrice;
        return e;
    })
    return productsByNameParser;
};

export async function getProductsByCategory({ category, order, brand, name }) {
    if (category === "all" && brand == "all" && name === "all") {
        console.log("entro ambos en ALL")
        let productByCategory = await Products.findAll({
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
            order: [["name", order]]
        })
        if (productByCategory.length != 0) return productByCategory
        throw Error("Category not found");
    }
    if (category === "all" && brand === "all" && name !== "all") {
        console.log('"entro a "category === "all" && brand === "all" && name')
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
        console.log('"entro a "category === "all" && brand === "all" && name')
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
        console.log('entro en  brand === "all"')
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
        console.log('esto es productByCategory', productByCategory)
        if (productByCategory.length != 0) return productByCategory
        throw Error("Category not found");
    }
    if (category !== "all" && brand === "all" && name === "all") {
        console.log('entro en  brand === "all"')
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
        console.log('esto es productByCategory', productByCategory)
        if (productByCategory.length != 0) return productByCategory
        throw Error("Category not found");
    }
    if (category !== "all" && brand === "all" && name !== "all") {
        console.log('entro en  brand === "all"')
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
        console.log('esto es productByCategory', productByCategory)
        if (productByCategory.length != 0) return productByCategory
        throw Error("Category not found");
    } else {
        console.log('entro en  ELSE')
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
        console.log(productByCategory)
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
    let { name, brand, image, category } = productsFromBody
    let createProduct = await Products.create({ name, brand, image, category })
    return createProduct;
}