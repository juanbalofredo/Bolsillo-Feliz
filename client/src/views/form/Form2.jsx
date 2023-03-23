import "./form.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postProductNoSpecials } from "../../redux/apiPetitions/productsPetitions";
import { getProductos } from "../../redux/apiPetitions/productsPetitions";
import swal from "sweetalert";

export const Form2 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.bolsilloFeliz);
  const statePersist = useSelector((state) => state.bolsilloPersist);


  const allProducts = [
    ...new Set(
      state.products.map((a) => {
        const filteredPrices = a.prices.filter(
          (p) => p.superM != null && p.superM.id === statePersist.superMId
        );
        if (filteredPrices.length > 0) {
          return null;
        } else {
          let arrayProduct = [a.name, a.id];
          return arrayProduct;
        }
      })
    ),
  ]
    .filter((p) => p !== null)
    .sort();
  


  const [input, setInput] = useState({
    price: 1,
    productId: "",
    superMId: statePersist.superMId,
  });

  const priceChange = (e) => {
    const value = e.target.value;
    setInput({
      ...input,
      price: value,
    });
  };
  const idPRoductChange = (e) => {
    let id = e.target.options[e.target.selectedIndex].id;
    setInput({
      ...input,
      productId: id,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.price >= 1 && input.price <= 1000000) {
      dispatch(postProductNoSpecials(input));
      alert("Producto agregado exitosamente");

      setInput({
        price: 1,
        category: "",
        superMId: statePersist.superMId,
      });

      window.location.reload(true);
    } else {
      alert("Complete correctamente el formulario antes de enviarlo");
    }
  };

  return (
    <div className="cont-form-2">
      <h2>Añade el precio de los productos en tu mercado</h2>
      <div className="txt-form-ayu">
        <form onSubmit={handleSubmit}>
          <div>
            Producto:
            <select
              type="text"
              value={input.products}
              name="productId"
              onChange={idPRoductChange}
              placeholder="Categoria"
              className="inputs"
            >
              <option value="empty">...</option>
              {allProducts.map((e) => (
                <option key={e[0]} value={e[0]} id={e[1]}>
                  {e[0]}
                </option>
              ))}
            </select>
          </div>
          <div>
            Precio:
            <input
              type="number"
              value={input.price}
              name="price"
              onChange={priceChange}
              placeholder="Precio"
              className="inputs"
            />
            {(input.price > 100000 || input.price < 1) && (
              <div className="error">
                El precio no puede ser mayor a un millon o menor a 1
              </div>
            )}
          </div>

          <button id="bt" className="button" onClick={handleSubmit}>
            Añadir
          </button>
        </form>
        <div className="text-info-form">
          <p>
            Para formar parte de los mercados de nuestra aplicación web, deberás
            primero rellenar cierta información, como a que precio vende tú
            mercado los productos ya establecidos en la aplicación
          </p>
        </div>
      </div>
    </div>
  );
};
