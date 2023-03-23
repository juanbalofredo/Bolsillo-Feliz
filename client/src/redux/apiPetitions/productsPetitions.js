import axios from "../axios.js";
import {
  allProducts,
  getName,
  filterCategory,
  resetFilter,
  Category,
  oneComment,
  Brand,
  filterPName,
  Pname,
} from "../slice/globalSlice";

export async function getProductos(dispatch) {
  try {
    const peticion = await axios.get("/products");
    dispatch(allProducts(peticion?.data));
  } catch (error) {
    return error.response;
  }
}

export async function getProductId(dispatch, id) {
  try {
    let json = await axios.get(`/products/id/${id}`, dispatch);
    dispatch(oneComment(json?.data));
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function getBrandId(id) {
  try {
    let json = await axios.get(`/market/id/${id}`);

    return json;
  } catch (error) {
    console.log(error);
  }
}

export const getNameQuery = async (dispatch, name, order) => {
  try {
    const petition = await axios.get(
      `/products/name?name=${name}&order=${order}`
    );
    dispatch(getName(petition?.data));
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
      `/products/category/${category}/${brand}/${order}/${pname}`
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
    const petition = await axios.get("/products");
    dispatch(resetFilter(petition?.data));
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
      const response = await axios.post("/products", payload);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
};

export const postProductNoSpecials = (payload) => {
  return async () => {
    try {
      const response = await axios.post("/price/nonespecial", payload);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
};

export async function updatePrecioMp(presio) {
  console.log(presio);
  try {
    const user = await axios({
      method: "put",
      url: "/market/paymentprice",
      data: {
        newPrice: presio,
      },
    });
    return user;
  } catch (error) {
    return error.message;
  }
}

export async function updatePrecioProdM(presio, pid, mid) {
  console.log(presio, pid, mid);
  try {
    const user = await axios({
      method: "put",
      url: "/price",
      data: {
        price: presio,
        productId: pid,
        superMId: mid,
      },
    });
    return user;
  } catch (error) {
    return error.message;
  }
}

export async function deleteProdPr(id) {
  console.log(id)
  try {
    const user = await axios({
      method: "delete",
      url: "price/delete",
      data: { id: id },
    });
    return user;
  } catch (error) {
    return error.message;
  }
}
