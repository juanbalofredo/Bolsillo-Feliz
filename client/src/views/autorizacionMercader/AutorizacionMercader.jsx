import Footer from "../../views/footer/Footer";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import "./autorizacionMercader.css";

import Navbar from "../../components/Navbar/NavBar";
import emailjs from "@emailjs/browser";

const AutorizacionMercader = () => {
  const state = useSelector((state) => state.bolsilloPersist);

  const [input, setInput] = useState({
    id: state.id,
    name: "",
    link: "",
    ubicacion: "",
    image: ""
  });
  console.log(state)

  const [error, setError] = useState({
    id: state.id,
    name: "",
    link: "",
    ubicacion: "",
    image: ""
  });

  const uploadImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "proyectof");
    axios
      .post("https://api.cloudinary.com/v1_1/dzuasgy3l/image/upload", formData)
      .then((response) => {
        const uploadedImage = response.data.secure_url;
        setInput({
          ...input,
          image: uploadedImage,
        });
      });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (
      input.name.length >= 2 &&
      input.link.length >= 2 &&
      input.ubicacion.length >= 2
    ) {
      emailjs.send(
        "service_hah0x8k",
        "template_buti7zt",
        {
          user_email: state.email,
          to_name: input.name,
          user_name: state.name,
          mercado: input.name,
        },
        "te3Yvey_o03JLT1zu",
        {
          from_name: "Bolsillo Feliz",
        }
      );
      const petition = axios.post("http://pf-grupo2-production.up.railway.app/market/create", input)
      alert("Tienda creada con exito, a la espera de autorización");
      setInput({
        name: "",
        link: "",
        ubicacion: "",
        image: ""
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
              <div className="reg-image-formz">
                    <label htmlFor="img">
                      Selecciona una imagen de tu producto:
                    </label>
                    {input.image.length < 3 ? (
                      <img
                        src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1679087243/uyrsuh0ojvnzedaxuvlj.webp"
                        alt="logo"
                      />
                    ) : (
                      <img src={input.image} alt="logo" />
                    )}
                    <input
                      type="file"
                      name="image"
                      onChange={uploadImage}
                      className="input-img-tas"
                    />{" "}
                  </div>
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
                    name="link"
                    type="text"
                    maxLength="20"
                    value={input.link}
                    onChange={handleChange}
                  />
                  {error.link.length ? (
                    <span id="error_name">{error.link}</span>
                  ) : null}
                </div>
                <div className="register-contra2">
                  <input
                    autoComplete="off"
                    name="ubicacion"
                    type="text"
                    maxLength="100"
                    value={input.ubicacion}
                    onChange={handleChange}
                    placeholder="Ej calle, numero, ciudad y pais"
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
