import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/NavBar";
import Footer from "../footer/Footer";
import CardJ from "../../components/Card/CardJ"
import axios from "axios";
import "./superMerc.css"

const SuperMerc = ()=>{

    const [markets, setMarkets] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/market/`)
      .then((e) => setMarkets(e.data))
      .catch((err) => {
        return err;
      });
  }, []);
  console.log(markets)

const state = useSelector((state) => state.bolsilloFeliz);
if (markets) {
return(
    <>
    <Navbar/>  
    <div className="patexto-sup">    <h1>SuperMercados</h1>
    <div className="cont-sup-lis-a">

    {markets?.map((e) => (
              <CardJ props={e} />
            ))}</div></div>  
       <Footer/>
    </>
)}

}

export default SuperMerc;