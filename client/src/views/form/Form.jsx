import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getBrandId,
  postProduct,
} from "../../redux/apiPetitions/productsPetitions";
import "./form.css";
import axios from "axios";
import Navbar from "../../components/Navbar/NavBar";
import Footer from "../footer/Footer";
import { Form2 } from "./Form2";
import { Form3 } from "./Form3";
import swal from "sweetalert";

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
    unit: "",
    price: 1,
    category: "",
    image: "",
    superMId: statePersist.superMId,
    brand: statePersist.user,
  });

  useEffect(() => {
    getBrandId(statePersist.superMId).then((info) =>
      setInput({ ...input, brand: info?.data?.name })
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.name.length >= 1 && input.price >= 1 && input.price <= 1000000) {
      dispatch(postProduct(input));

      swal({
        title: "Agregado",
        text: "Producto agregado correctamente",
        icon: "success",
        button: "ok",
      });

      setInput({
        name: "",
        unit: "",
        price: "",
        image: "",
        category: "",
        superMId: statePersist.superMId,
        brand: statePersist.user,
      });
    } else {
      swal({
        title: "Incompleto",
        text: "Complete el formulario",
        icon: "error",
        button: "Reintentar",
      });
    }
  };
  const [papel, setPapel] = useState(1);

  return (
    <>
      <div className="container-form-gr">
        <div className="arriba-form">
          <button onClick={(e) => setPapel(3)}>Mis productos</button>
          <button onClick={(e) => setPapel(2)}>
            Añade un producto exclusivo
          </button>
          <button onClick={(e) => setPapel(1)}>
            Agregar precio a productos existentes
          </button>
        </div>
        <Link to="/home">
          <button className="volver-form">Volver</button>
        </Link>
        {papel === 1 ? (
          <Form2 />
        ) : papel === 2 ? (
          <div className="contGral">
            <div className="flex-asd-f">
              <form onSubmit={handleSubmit}>
                <div className="x23-a">
                  <div className="reg-image-formz">
                    <label htmlFor="img" className="mer-prod-mi-la-img">
                      Selecciona una imagen de tu producto<p>
                        1000px1000px fondo blanco</p>
                      
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
                  <div>
                    Nombre:
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
                    Unidades:
                    <input
                      type="text"
                      value={input.unit}
                      name="unit"
                      onChange={handleChange}
                      placeholder="Ej: 200 gr"
                      className="inputs"
                    />
                  </div>

                  <div>
                    Precio:
                    <input
                      type="number"
                      value={input.price}
                      name="price"
                      onChange={handleChange}
                      placeholder="Precio"
                      className="inputs"
                    />
                    <br />
                    {input.price > 100000 || input.price < 1 ? (
                      <label className="error">
                        El precio no puede ser mayor a un millon o menor a 1
                      </label>
                    ) : null}
                  </div>

                  <div>
                    Categoria:
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

                  {/* <div>
                       <img src={input.image} alt="" width={"100px"} />
                       Preview
                     </div> */}
                </div>
                <button id="bt" className="button" onClick={handleSubmit}>
                  Añadir
                </button>
              </form>
              <p>
                En esta sección podés agregar algún producto que no exista en al
                Aplicación, pero que vos quieras vender(la marca del producto va
                a ser automáticamente el nombre de tu mercado)
              </p>
            </div>
          </div>
        ) : (
          <Form3 />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Form;
