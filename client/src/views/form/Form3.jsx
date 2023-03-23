import "./form.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postProductNoSpecials } from "../../redux/apiPetitions/productsPetitions";
import { getProductos } from "../../redux/apiPetitions/productsPetitions";
import CardO from "../../components/Card/CardO";
import axios from "../../redux/axios"

export const Form3 = () => {

  const dispatch = useDispatch();
  const state = useSelector((state) => state.bolsilloFeliz);
  const statePersist = useSelector((state) => state.bolsilloPersist);
  const [market, setMarket] = useState(null);

  useEffect(() => {
    axios
      .get(`products/productsbyid/${statePersist.superMId}`)
      .then((e) => setMarket(e.data))
      .catch((err) => {
        return err;
      });
  }, []);

  const [input, setInput] = useState('');

  const priceChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };
 console.log(market)

if(market){
  return (
    <div className="cont-form-3">
      <h2>Tus productos</h2>
      <div className="cont-mi-por-a-se">
      {market.map((p) => (
                <CardO key={p.id} product={p} />
              ))}
      </div>
    </div>
  );}
};
