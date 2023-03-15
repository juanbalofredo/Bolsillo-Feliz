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
  return (
    <>
    <NavBar/>
          <div className="detail-back">
            <NavLink to="/home"> Volver </NavLink>
          </div>
      <div className="container-Detail">
        <div className="Detail-container">
          {product ? (
            <div className="details">
              <div className="columns_info">
                <h2 className="name_details">{product.name}</h2>
                <img src={product.image} alt={product.name} />
                <p className="info_details">{product?.price}</p>
                <p className="info_details">{product?.brand}</p>
                <p className="info_details">{product?.category}</p>
                <p className="info_details">{product?.unity}</p>
              </div>
            </div>
          ) : (
            <DetailLoading />
          )}
        </div>
        <div className="comparador-container">
          Otros Supermercados :
          {product?.prices.map((e, k) => {
            return (
              <div className="comparador-card" key={k}>
                <p className="text">{e.superM.name}</p>
                <p className="text">{e.price}</p>
                <img src={e.superM.image} alt={e.image} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DetalleProd;
