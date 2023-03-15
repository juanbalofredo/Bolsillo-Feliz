import "./form.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postProduct } from "../../redux/apiPetitions/productsPetitions";

export const Form2 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.bolsilloFeliz);
  //console.log(state.products)
  const allCategories = [
    ...new Set(state.productsBackup.map((a) => a.category)),
  ].sort();

  const allProducts = [
    ...new Set(state.products.map((a) => a.name)),
  ].sort();
  
  const [input, setInput] = useState({
    price: "",
    category: "",
    products: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.price >= 1 && input.price <= 1000000) {
      dispatch(postProduct(input));
      alert("Producto agregado exitosamente");

      setInput({
        price: "",
        products: "",
        category: "",
      });
    } else {
      alert("Complete correctamente el formulario antes de enviarlo");
    }
  };

  return (
    <div>
      <div className="contGral">
        <div className="">
          <div className="contTitle">
            <div className="text">
              <h2>Añade un producto de un mercado</h2>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form">
              <div className="izq">
                <div>
                  <div>Precio:</div>
                  <input
                    type="number"
                    value={input.price}
                    name="price"
                    onChange={handleChange}
                    placeholder="Precio"
                    className="inputs"
                  />
                  {(input.price > 100000 || input.price < 1) && (
                    <div className="error">
                      El precio no puede ser mayor a un millon o menor a 1
                    </div>
                  )}
                </div>

                <div>
                  <div>Producto:</div>
                  <select
                    type="text"
                    value={input.products}
                    name="category"
                    onChange={handleChange}
                    placeholder="Categoria"
                    className="inputs"
                  >
                    <option value="empty">...</option>
                    {allProducts.map((e) => (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <div>Categoria:</div>
                  <select
                    type="text"
                    value={input.category}
                    name="category"
                    onChange={handleChange}
                    placeholder="Categoria"
                    className="inputs"
                  >
                    <option value="empty">...</option>
                    {allCategories.map((e) => (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                </div>
                <button id="bt" className="button" onClick={handleSubmit}>
                  Añadir
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
};
