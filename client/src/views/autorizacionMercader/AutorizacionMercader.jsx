import Footer from "../../views/footer/Footer";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "../../redux/axios.js";
import swal from "sweetalert";
import "./autorizacionMercader.css";
import emailjs from "@emailjs/browser";
import Loader from "../../components/Loader/loader";

const AutorizacionMercader = () => {
  const state = useSelector((state) => state.bolsilloPersist);

  const [input, setInput] = useState({
    id: state.id,
    name: "",
    link: "",
    address: "",
    image: "",
  });

  const [error, setError] = useState({
    id: state.id,
    name: "",
    link: "",
    address: "",
    image: "",
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
      input.image.length >= 3 &&
      input.address.length >= 2
    ) {
      emailjs.send(
        "service_cfwpdj7",
        "template_smc5b1i",
        {
          user_email: state.email,
          address: input.address,
          link: input.link,
          mercader: state.name,
          mercado: input.name,
        },
        "bfkCyEaZzPcQ0u1_N",
        {
          from_name: "Bolsillo Feliz",
        }
      );
      const petition = axios.post("/market/create", input);
      swal({
        title: "Datos enviados exitosamente",
        text: "Espere la confirmacion via mail",
        icon: "success",
        button: "OK",
      });
      setInput({
        name: "",
        link: "",
        address: "",
        image: "",
      });
    } else {
      swal({
        title: "Datos incorrectos",
        text: "Ingrese bien los datos",
        icon: "error",
        button: "Reintentar",
      });
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
      {input ? (
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
                    Ingresa la imagen de tu tienda png:
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
                    accept=".png"
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
                    name="address"
                    type="text"
                    maxLength="100"
                    value={input.address}
                    onChange={handleChange}
                    placeholder="Ej calle, numero, ciudad y pais"
                  />
                  {error.address.length ? (
                    <span id="error_name">{error.address}</span>
                  ) : null}
                </div>
                <button>Solicitar por mail</button>
              </div>
            </form>
          </div>
        </div>
      </div> ) : <Loader /> }
      <Footer />
    </>
  );
};
export default AutorizacionMercader;
