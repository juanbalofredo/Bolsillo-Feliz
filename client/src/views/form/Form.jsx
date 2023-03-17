import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { postProduct } from "../../redux/apiPetitions/productsPetitions";
import "./form.css";
import axios from "axios";
import Navbar from "../../components/Navbar/NavBar";
import Footer from "../footer/Footer";
import { Form2 } from "./Form2";

const Form = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.bolsilloFeliz);
  const statePersist = useSelector((state) => state.bolsilloPersist);
  const allCategories = [
    ...new Set(state.productsBackup.map((a) => a.category)),
  ].sort();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

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

  const [input, setInput] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    superMId: statePersist.superMId,
    brand: statePersist.user
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.name.length >= 1 && input.price >= 1 && input.price <= 1000000) {
      dispatch(postProduct(input));
      alert("Producto agregado exitosamente");

      setInput({
        name: "",
        price: "",
        image: "",
        category: "",
        superMId: statePersist.superMId,
        brand: statePersist.user
      });
    } else {
      alert("Complete correctamente el formulario antes de enviarlo");
    }
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Link to="/home">
          <button>Return to home</button>
        </Link>
      </div>

      <div className="contGral">
        <Form2 />
        <div>
          <div className="contTitle">
            <div className="text">
              <h3>Añade un producto exclusivo</h3>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form">
              <div className="izq">
                <div>
                  <div>Nombre:</div>
                  <input
                    type="text"
                    value={input.name}
                    name="name"
                    onChange={handleChange}
                    placeholder="Nombre"
                    className="inputs"
                  />
                </div>

                <div>
                  <div>Precio:</div>
                  <input
                    type="number"
                    value={input.price}
                    name="price"
                    onChange={handleChange}
                    placeholder="Precio"
                    className="inputs"
                  />
                  {(input.price > 100000 || input.price < 1) && (
                    <div className="error">
                      El precio no puede ser mayor a un millon o menor a 1
                    </div>
                  )}
                </div>

                <div>
                  <div>Categoria:</div>
                  <select
                    type="text"
                    value={input.category}
                    name="category"
                    onChange={handleChange}
                    placeholder="Categoria"
                    className="inputs"
                  >
                    <option value="empty">...</option>
                    {allCategories.map((e) => (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                </div>

                <label htmlFor="img">
                  Selecciona una imagen de tu producto:
                </label>
                <div className="reg-image">
                  {input.image.length < 3 ? (
                    <img
                      src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677853169/hhxaujrmszfjbzul3zvr.png"
                      alt="logo"
                    />
                  ) : (
                    <img src={input.image} alt="logo" />
                  )}
                </div>

                <input type="file" name="image" onChange={uploadImage} />
                {/* <div>
                  <img src={input.image} alt="" width={"100px"} />
                  Preview
                </div> */}
                <button id="bt" className="button" onClick={handleSubmit}>
                  Añadir
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Form;
