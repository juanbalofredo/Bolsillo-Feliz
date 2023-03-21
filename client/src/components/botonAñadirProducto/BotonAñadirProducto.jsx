import React from "react";
import { useSelector } from "react-redux"
import "./botonAñadirProducto.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export const BotonAñadirProducto = () => {

  const logged = useSelector((state)=> state.bolsilloPersist.type_account)
  const navigate = useNavigate();

  if (logged === 2){
    return (
      <div className="button-container">
        <Link to="form">
          <button className="addButton">Añadir un nuevo producto</button> 
        </Link>
      </div>
    );
  }else{
    return (
      <div className="button-container">
          <h3>Ingresa a la cuenta de tu mercado para añadir un producto</h3>
      </div>
    );
  }
  
  
};

export default BotonAñadirProducto;