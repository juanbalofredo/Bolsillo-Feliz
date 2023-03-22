import React from "react";
import "./Orden.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryParams } from "../../redux/apiPetitions/productsPetitions";
import { resPage } from "../../redux/slice/globalSlice";

const Orden = () => {
  const dispatch = useDispatch();
  const { brand, category, pname } = useSelector(
    (state) => state.bolsilloFeliz
  );

  async function changeOrder(e) {
    dispatch(resPage());
    getCategoryParams(dispatch, category, brand, e.target.value, pname);
  }

  return (
    <>
      <div className="orde-pag">
        <div className="ord-txt-a">
        <label value="">Ordenar Por</label>
        <select
          onChange={changeOrder}
          name="ordenPrecio"
          id="ordenPrecio"
          key={category}
        >
          <option value="ASC">A-Z</option>
          <option value="DESC">Z-A</option>
        </select></div>
        <div className="orden-tecto-1">
          <h3>{category === "all" ? "Todos los productos" : category}</h3>
        </div>
      </div>
    </>
  );
};

export default Orden;
