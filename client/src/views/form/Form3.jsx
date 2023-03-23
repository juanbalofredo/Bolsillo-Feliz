import "./form.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardO from "../../components/Card/CardO";
import axios from "../../redux/axios";

export const Form3 = () => {
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

  if (market) {
    return (
      <div className="cont-form-3">
        <h2>Tus productos</h2>
        <div className="cont-mi-por-a-se">
          {market?.map((p) => (
            <CardO key={p.id} product={p} />
          ))}
        </div>
      </div>
    );
  }else{
    return (
      <div className="cont-form-3">

      </div>)
  }
};
