import "./detalleProd.css"
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar"
import axios from "axios";
import Footer from "../footer/Footer";
import DetailLoading from "../../components/loadings/DetailLoading";
import ComparadorDetail from "../../components/detalleComaprar/ComparadorDetail";
import { getProductsAll } from "../../redux/apiPetitions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const DetalleProd = () => {

  const state = useSelector((state) => state.bolsillo);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  let didInit = false;
  useEffect(() => {
    if (!didInit && product === null) {
      didInit = true;
      axios
        .get(`http://localhost:3001/products/id/${id}`)
        .then((e) => setProduct(e.data))
        .catch((err) => {

          return err;
        });
    }
  }, [id, navigate, product]);


  // const comparadores = state.marketsProducts.map(a=>a.name === product.name)


  if (!product) {
    return <DetailLoading />;

  } else {
    return (
      <>
        <NavBar />
        <div className="Detail-container">
          <Link to="/home">
            <button className="">Volver</button>
          </Link>
          <div className="det-prod">
            <div className="imageContainer">
              <img src={product.image} alt="product" className="" />
            </div>
            <div className="textContainer">
              <h2 className="texts">{product.name}</h2>
              <div>
                <h3 className="texts">
                  {" "}
                  Marca: <br /> {product.brand}
                </h3>
                <h3 className="texts">
                  {" "}
                  Cantidad: <br /> {product.unit}
                </h3>
              </div>
              <h3 className="texts">
                Descripcion: <br /> {product.description}
              </h3>
            </div></div>
            {/* <div>{
              comparadores.map(a=> <ComparadorDetail img={a.image} name={a.name}  />)
              }</div> */}
        </div>
        <Footer />
      </>
    );
  }

};



export default DetalleProd