import Products from "../models/products.js";
//products es el json de todos los productos
import products from "../prueba (1).js";

const apiInfo = async () => {
  const resultados = [];
  products.map((p) => {
    Products.create({
      name: p.name,
      brand: p.brand,
      price: p.price,
      unit: p.unity,
      category: p.category,
      description: p.description,
      supermarket: p.supermarket,
      image: p.image,
    });
    resultados.push({
      name: p.name,
      brand: p.brand,
      price: p.price,
      unit: p.unity,
      category: p.category,
      description: p.description,
      supermarket: p.supermarket,
      image: p.image,
    });
  });


  return resultados;
};
export default apiInfo;
