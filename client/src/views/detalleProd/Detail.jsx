import "./detalleProd.css";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";
import axios from "axios";
import Footer from "../footer/Footer";
import DetailLoading from "../../components/loadings/DetailLoading";
// import ComparadorDetail from "../../components/detalleComaprar/ComparadorDetail";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

const DetalleProd = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/products/id/${id}`)
      .then((e) => setProduct(e.data))
      .catch((err) => {
        return err;
      });
  }, [id]);

  if (product) {
    
  
  return (
    <>
      <NavBar />
      <div className="Detail-container">
        <Link to="/home">
          <button className="detail-back">Volver</button>
        </Link>
        <div className="det-prod">
          <div className="imageContainer">
            <img src={product.image} alt="product" className="" />
          </div>
          <div className="textContainer">
            <h2 className="texts">{product.name}</h2>
              <h3 className="texts">
                Marca:  {product.brand}
              </h3>
          </div>
        </div>
        <div className="contenedor-detail">
          {" "}
          {product?.prices.map((e, k) => {
            return (
              // <div className="comparador-card" key={k}>
              //   <p className="text">{e.superM.name}</p>
              //   <p className="text">{e.price}</p>
              //   <img src={e.superM.image} alt={e.image} />
              // </div>
              <div className="detail-compara-cont" key={k}>
                <div className="detail-precio-s">
                  <img src={e.superM.image} alt={e.image} />
                </div>
                <h3 className="super-det-pre">${e.price}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  )};
};

export default DetalleProd;
