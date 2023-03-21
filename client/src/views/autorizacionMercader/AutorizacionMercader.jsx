import Footer from "../../views/footer/Footer";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { allProducts } from "../../redux/slice/globalSlice";
import { postProduct } from "../../redux/apiPetitions/productsPetitions";
import "./autorizacionMercader.css";
import axios from "axios";
import Navbar from "../../components/Navbar/NavBar";
import emailjs from "@emailjs/browser";


const AutorizacionMercader = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.bolsilloPersist);
  const email = state.email
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    especialidad: "",
    ubicacion: ""
  });

  const [error, setError] = useState({
    name: "",
    especialidad: "",
    ubicacion: ""

  });

 

  function handleSubmit(e) {
    e.preventDefault();
    if (
      input.name.length >= 2 &&
      input.especialidad.length >= 2 &&
      input.ubicacion.length >= 2
    ) {
      emailjs.send("service_hah0x8k","template_buti7zt",{user_email:state.email, to_name: input.name, user_name:state.name , mercado: input.name},"te3Yvey_o03JLT1zu",{
        from_name: "Bolsillo Feliz",
       
      
        });
        emailjs.send("service_cfwpdj7","template_smc5b1i",{mercado:input.name,mercader:state.name ,email:state.email},"bfkCyEaZzPcQ0u1_N",{
          from_name: "Bolsillo Feliz",
   
          });
      alert("Success");
      setInput({
        name: "",
        especialidad: "",
        ubicacion: "",
      });
    } else {
      alert("Complete correctamente el formulario antes de enviarlo");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  }

  return (
    <>
      {" "}
      <div className="todo">
        <Navbar />
        <div className="autorizar-container">
          <div className="register-logo">
            <img
              src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677807225/de0ieqim2kymph6cldvl.webp"
              alt="logo"
            />
          </div>
          <div className="autorizar-form">
            <form onSubmit={handleSubmit} autoComplete="off">
              <h1>Solicitanos tu mercado</h1>
              <div className="autorizar-text">
                <div className="name-error-form">
                  <input
                    autoComplete="off"
                    placeholder="Nombre de tu mercado"
                    name="name"
                    type="text"
                    maxLength="15"
                    value={input.name}
                    onChange={handleChange}
                  />
                  {error.name.length ? (
                    <span id="error_name">{error.name}</span>
                  ) : null}
                </div>
                <div className="register-contra2">
                  <input
                    autoComplete="off"
                    placeholder="Link de tu pagina"
                    name="especialidad"
                    type="text"
                    maxLength="20"
                    value={input.especialidad}
                    onChange={handleChange}
                  />
                  {error.especialidad.length ? (
                    <span id="error_name">{error.especialidad}</span>
                  ) : null}
                </div>
                <div className="register-contra2">
                  <input
                    autoComplete="off"
                    name="ubicacion"
                    type="text"
                    maxLength="30"
                    value={input.ubicacion}
                    onChange={handleChange}
                    placeholder="Ubicacion de tu negocio"
                  />
                  {error.ubicacion.length ? (
                    <span id="error_name">{error.ubicacion}</span>
                  ) : null}
                </div>
                <button>Solicitar por mail</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AutorizacionMercader;
