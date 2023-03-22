import "./login.css";
import { useState } from "react";
import NavBar from "../Navbar/NavBar";
import Footer from "../../views/footer/Footer";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import axios from "../../redux/axios.js";
const Contraseña= () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
   password: "",
    password1: "",
  });
  function setear(e) {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  }
  const cambiar = async (e) => {
    if (input.password === input.password1) {
        axios({
            method: "put",
            url: "/user/update",
            data: {password : input.password}
          })
      .then((e) => swal("Contraseña actualizada con exito!", "OK", "success")).then((e)=>navigate("/login"))
      .catch((e)=>swal("Algo salio mal", "Intnetar de nuevo", "error"))
  }else{
    swal("Las contraseñas no coinciden", "Intentar de nuevo", "error")
  }
}
  return (
    <>
      <div className="reg-todo">
   
        <div className="login-container">
          <div className="register-logo">
            <img
              src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677807225/de0ieqim2kymph6cldvl.webp"
              alt="logo"
            />
          </div>
          <div className="register-form">
            <form>
              <h1>Cambiar Contraseña</h1>
              <div className="register-text">
                <div className="register-correo">
                <label>Nueva contraseña</label>    
                  <input
                    name="email"
                    type="email"
                    maxLength="30"
                    value={input.password}
                    onChange={setear}
                    placeholder="**********"
                  />
                </div>
                <div className="rgister-contra">
                <label>Repite la contraseña</label>    
                  <input
                    required
                    name="password"
                    type="password"
                    maxLength="30"
                    onChange={setear}
                    value={input.password1}
                    placeholder="**********"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contraseña;