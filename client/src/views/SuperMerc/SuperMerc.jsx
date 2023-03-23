import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/NavBar";
import Footer from "../footer/Footer";
import CardJ from "../../components/Card/CardJ";
import axios from "../../redux/axios.js";
import "./superMerc.css";
import Loader from "../../components/Loader/loader";

const SuperMerc = () => {
  const [markets, setMarkets] = useState(null);
  useEffect(() => {
    axios
      .get(`/market/`)
      .then((e) => setMarkets(e.data))
      .catch((err) => {
        return err;
      });
  }, []);

  return (
    <>
      <div className="patexto-sup">
        {" "}
        <h1>SuperMercados</h1>
        {markets ? (
          <div className="cont-as-di-fle">
            <div className="cont-sup-lis-a">
              {markets?.map((e) => (
                <CardJ props={e} />
              ))}
            </div>
          </div>
        ) : (
          <div className="cont-as-di-fle">
            {" "}
            <Loader />{" "}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SuperMerc;
