import "./register.css";
import { useState , useRef } from "react";
import NavBar from "../Navbar/NavBar";
import axios from "axios";
import {
  crearUser,
  logearse,
  getUserByEmail,
} from "../../redux/apiPetitions/userPetitions";
import Footer from "../../views/footer/Footer";
import GoogleSign from "../../views/Firebase/GoogleSign";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import emailjs from "@emailjs/browser";

const Register = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9kns3ne",
        "template_nhht7db",
        form.current,
        "te3Yvey_o03JLT1zu",{
          to_name:input.user_name
        }
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const dispatch = useDispatch();

  var uploadedImage = "";
  const navigate = useNavigate();

  const uploadImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "proyectof");
    axios
      .post("https://api.cloudinary.com/v1_1/dzuasgy3l/image/upload", formData)
      .then((response) => {
        uploadedImage = response.data.secure_url;
        setInput({
          ...input,
          avatar: uploadedImage,
        });
      });
  };
  const [input, setInput] = useState({
    user_name: "",
    avatar: "",
    last_name: "",
    user_email: "",
    password: "",
    password2: "",
  });

  const [error, setError] = useState({
    user_name: "",
    last_name: "",
    user_email: "",
    password: "",
    password2: "",
  });

  const register = async (e) => {
    e.preventDefault();
    const pasa = await handleClickError();
    if (pasa) {
      crearUser(dispatch,input);
      sendEmail(e)
      swal({
        title: "Usuario creado",
        text: "Usuario creado",
        icon: "success",
        button: "A comparar!",
      })
        .then(logearse(input, dispatch))
        .then((e) => navigate("/home"));
    }
  };

  async function handleClickError() {
    const imail = await getUserByEmail(input.email);
    let valid = 0;
    let validado = true;
    if (imail !== "Request failed with status code 400") {
      validado = false;
      setError({
        ...error,
        email: "Esta direccion email ya se encuentra en uso",
      });
      return valid;
    }
    if (input.user_email.length <= 6) {
      setError({ ...error, email: "Ingrese un email valido" });
    } else {
      valid++;
    }
    if (input.password.length < 8) {
      setError({
        ...error,
        password: "La contraseña deberia tener al menos 8 caracteres",
      });
    } else {
      valid++;
    }
    if (input.password2 !== input.password) {
      setError({ ...error, password2: "Las contraseñas deberias ser iguales" });
    } else {
      valid++;
    }
    if (input.user_name.length <= 2) {
      setError({ ...error, name: "Ingrese un nombre valido" });
    } else {
      valid++;
    }
    if (input.last_name.length <= 2) {
      setError({ ...error, last_name: "Ingrese un apellido valido" });
    } else {
      valid++;
    }
    if (valid === 5) {
      return true;
    }
    return false;
  }

  function setear(e) {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  }

  return (
    <>
      {" "}
      <div className="reg-todo">
        <NavBar />
        <div className="register-container">
          <div className="register-logo">
            <img
              src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677807225/de0ieqim2kymph6cldvl.webp"
              alt="logo"
            />
          </div>
          <div className="register-form">
            <form ref={form} autoComplete="off">
              <h1>Registrarse</h1>
              <div className="register-text">
                <label htmlFor="img">Seleccionar Imagen</label>
                <div className="reg-avata">
                  {input.avatar.length < 3 ? (
                    <img
                      src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677853169/hhxaujrmszfjbzul3zvr.png"
                      alt="logo"
                    />
                  ) : (
                    <img src={input.avatar} alt="logo" />
                  )}
                  <input
                    type="file"
                    name="avatar"
                    id="my_file"
                    placeholder="Imagen"
                    autoComplete="off"
                    value={uploadedImage}
                    onChange={(e) => uploadImage(e)}
                  />
                </div>
                <div className="register-name">
                  <div className="name-error-reg">
                    <input
                      autoComplete="off"
                      placeholder="Nombre"
                      name="user_name"
                      type="text"
                      maxLength="15"
                      value={input.name}
                      onChange={setear}
                    />
                    {error.user_name.length ? (
                      <span id="error_name">{error.name}</span>
                    ) : null}
                  </div>
                  <div className="apell-error-reg">
                    <input
                      autoComplete="off"
                      placeholder="Apellido"
                      name="last_name"
                      type="text"
                      maxLength="20"
                      value={input.last_name}
                      onChange={setear}
                    />
                    {error.last_name.length ? (
                      <span id="error_name">{error.last_name}</span>
                    ) : null}
                  </div>
                </div>
                <div className="register-correo">
                  <input
                    autoComplete="off"
                    name="user_email"
                    type="email"
                    maxLength="30"
                    value={input.email}
                    onChange={setear}
                    placeholder="emailexample@gmail.com"
                  />
                  {error.user_email.length ? (
                    <span id="error_name">{error.email}</span>
                  ) : null}
                </div>
                <div className="rgister-contra">
                  <input
                    autoComplete="off"
                    name="password"
                    type="password"
                    maxLength="30"
                    value={input.password}
                    onChange={setear}
                    placeholder="Contraseña"
                  />
                  {error.password.length ? (
                    <span id="error_name">{error.password}</span>
                  ) : null}
                </div>
                <div className="register-contra2">
                  <input
                    autoComplete="off"
                    name="password2"
                    type="password"
                    maxLength="30"
                    value={input.password2}
                    onChange={setear}
                    placeholder="Repetir contraseña"
                  />
                  {error.password2.length ? (
                    <span id="error_name">{error.password2}</span>
                  ) : null}
                </div>
                <button onClick={register}>Registrarse</button>
              </div>
            </form>
            <div className="reg-google-fac">
              <GoogleSign />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Register;
