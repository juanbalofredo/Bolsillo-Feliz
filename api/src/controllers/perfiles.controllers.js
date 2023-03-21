// import Products from "../models/products.js";
import nuestrosPerfiles from "../perfiles.js";
// agregando comentario 3
export async function getPerfiles (req,res){
try {
   
    res.status(200).json(nuestrosPerfiles)
} catch (error) {
    throw Error(error)
}
}