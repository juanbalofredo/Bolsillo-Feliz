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
    about: "",
    ubicacion: "",
    comoNosConocio: "",
  });

  const [error, setError] = useState({
    name: "",
    especialidad: "",
    about: "",
    ubicacion: "",
    comoNosConocio: "",
  });

 

  function handleSubmit(e) {
    e.preventDefault();
    if (
      input.name.length >= 2 &&
      input.especialidad.length >= 2 &&
      input.about.length >= 10 &&
      input.ubicacion.length >= 2
    ) {
      emailjs.send("service_hah0x8k","template_buti7zt",{user_email:"alexaniasco@outlook.com", to_name: input.name, user_name:state.name , mercado: input.name},"te3Yvey_o03JLT1zu",{
        from_name: "Bolsillo Feliz",
       
       
        user_email:"alexaniasco@outlook.com",
      
        });
      alert("Success");
      setInput({
        name: "",
        especialidad: "",
        about: "",
        ubicacion: "",
        comoNosConocio: "",
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
                    placeholder="Tu especialidad"
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
                    name="about"
                    type="text"
                    maxLength="100"
                    value={input.about}
                    onChange={handleChange}
                    placeholder="Cuentanos algo de tu Mercado"
                  />
                  {error.about.length ? (
                    <span id="error_name">{error.about}</span>
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
                <div className="register-contra2">
                  <input
                    autoComplete="off"
                    name="comoNosConocio"
                    type="text"
                    maxLength="50"
                    value={input.comoNosConocio}
                    onChange={handleChange}
                    placeholder="Contanos como supiste de la página"
                  />
                  {error.comoNosConocio.length ? (
                    <span id="error_name">{error.comoNosConocio}</span>
                  ) : null}
                </div>
                <a className="boton-form-mer"
                  href={`https://wa.me/541132695097?text=Hola quiero ser mercader en tu pagina de Bolsillo Feliz, 
            email: ${state.email}  
            nombre mercado: ${input.name},
            especialidad:${input.especialidad},
            ubicacion:${input.ubicacion},
            como supo:${input.comoNosConocio}`}
                  target="_blank"
                  rel="noreferrer"
                >Solicitar por WhatsApp
                </a>
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
