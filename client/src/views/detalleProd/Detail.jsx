import "./detalleProd.css";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";
import axios from "axios";
import Footer from "../footer/Footer";
import CardM from "../../components/Card/CardM";
// import ComparadorDetail from "../../components/detalleComaprar/ComparadorDetail";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

const DetalleProd = () => {
  const navigate = useNavigate();
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
    const emilia = product.prices.sort((a, b) => a.price - b.price);
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
              <h3 className="texts">Marca: {product.brand}</h3>
            </div>
          </div>
          <div className="contenedor-detail">
            {emilia?.map((e) => (
              <CardM props={e} />
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default DetalleProd;
