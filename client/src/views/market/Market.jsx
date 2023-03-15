import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Card3 from "../../components/Card/Card3";
import { getProductos } from "../../redux/apiPetitions/productsPetitions";
import "./market.css";
import Footer from "../footer/Footer";
import Navbar from "../../components/Navbar/NavBar";

const Market = () => {
  const dispatch = useDispatch();

  let didInit = false;
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      getProductos(dispatch);
    }
  }, [dispatch]);

  const state = useSelector((state) => state.bolsilloFeliz);
  const { id } = useParams();
  const [market, setMarket] = useState(null);
  const myProduct = state.productsBackup;
  const [page, setPage] = useState(1);
  const startIndex = page === 1 ? 0 : page * 10 - 10;
  const endIndex = page === 1 ? 10 : startIndex + 10;

 



  useEffect(() => {
    axios
      .get(`http://localhost:3001/market/id/${id}`)
      .then((e) => setMarket(e.data))
      .catch((err) => {
        return err;
      });
  }, [id]);

  if (market && myProduct) {


     const aver = myProduct.slice(startIndex, endIndex);

    return (
      <>
      <Navbar/>
        <div className="container-market-c">
          <h1>{market.name}</h1>
          <h2></h2>
          <img src={market.image} alt="" className="img-market-f" />
          <div className="container-prod-market">
            {aver.map((p) => (
              <Card3 key={p.id} product={p} market={market.name} />
            ))}
                     
          </div>
          <div className="pag-but-que">
            {page === 1 ? (
              <button className="but-pag-a" disabled>
                Anterior
              </button>
            ) : (
              <button
                className="but-pag-a"
                onClick={(e) => setPage(page -1 )}
              >
                Anterior
              </button>
            )}
            {page === Math.ceil(myProduct.length / 10) ? (
              <button className="but-pag-s" disabled>
                Siguiente
              </button>
            ) : (
              <button
                className="but-pag-s"
                onClick={(e) =>  setPage(page +1 )}
              >
                Siguiente
              </button>
            )}
          </div>
        </div>
        <Footer/>
      </>
    );
  }
};

export default Market;
