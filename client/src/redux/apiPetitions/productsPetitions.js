import axios from "axios";
import {
  allProducts,
  getName,
  filterCategory,
  resetFilter,
  Category,
  oneComment,
  Brand,
  filterPName,
  Pname

} from "../slice/globalSlice";

export async function getProductos(dispatch) {
  try {
    const peticion = await axios.get("http://localhost:3001/products");
    dispatch(allProducts(peticion?.data));
  } catch (error) {
    return error.response;
  }
}

export async function getProductId(dispatch, id) {
  try {
    let json = await axios.get(
      `http://localhost:3001/products/id/${id}`,
      dispatch
    );
    dispatch(oneComment(json?.data));
    return json;
  } catch (error) {
    console.log(error);
  }
}

export const getNameQuery = async (dispatch, name, order) => {
  try {
    const petition = await axios.get(
      `http://localhost:3001/products/name?name=${name}&order=${order}`
    );
    dispatch(
      getName(petition?.data)
    );
  } catch (error) {
    return error.response;
  }
};

export const getCategoryParams = async (
  dispatch,
  category,
  brand,
  order,
  pname
) => {
  try {
    const petition = await axios.get(
      `http://localhost:3001/products/category/${category}/${brand}/${order}/${pname}`
    );
    if (category !== "all") {
      dispatch(Category(category));
      dispatch(filterCategory(petition?.data));
    }
    if (brand !== "all") {
      dispatch(Brand(brand));
      dispatch(filterCategory(petition?.data));
    }
    if (pname !== "all") {
      dispatch(Pname(pname));
      dispatch(filterPName(petition?.data));
    } else {
      dispatch(filterCategory(petition?.data));
    }
  } catch (error) {
    return error.response;
  }
};

export const rsetFilters = async (dispatch) => {
  try {
    const petition = await axios.get("http://localhost:3001/products");
    dispatch(
      resetFilter(petition?.data))
    dispatch(Brand("all"));
    dispatch(Category("all"));
    dispatch(Pname("all"));
  } catch (error) {
    return error.response;
  }
};

export const postProduct = (payload) => {
  return async () => {
    try {
      const petition = await axios.post(
        "http://localhost:3001/products/",
        payload
      );
      return petition;
    } catch (error) {
      console.log(error);
    }
  };
};
