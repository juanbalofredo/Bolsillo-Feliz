import { useState } from "react";
import "./Perfil.css";
import { useSelector } from "react-redux";
import NavBar from "../Navbar/NavBar";
import Footer from "../../views/footer/Footer";

export default function Perfil() {
  const { name, avatar, email, last_name, type_account, id } = useSelector(
    (state) => state.bolsilloPersist
  );
  var tipodecuenta = type_account;
  if (type_account === "1") {
    tipodecuenta = "Usuario";
  } else if (type_account === "2") {
    tipodecuenta = "Marcader";
  } else if (type_account === "3") {
    tipodecuenta = "Admin";
  }
  const [Edit, SetEdit] = useState("datos");
  const [Datos, SetDatos] = useState({
    password: "**********",
  });
  async function handleData(e) {
    SetEdit(e.target.value);
  }
  if (Edit === "datos") {
    return (
      <>
        <NavBar />
        <div className="container-Perfiluser">
          <div className="optionsUser">
            <div className="commentsUser">
              <label onClick={(e) => handleData(e)} value="datos" >
                Mis Datos
              </label>
              <label onClick={(e) => handleData(e)} value="comentarios" >
                Mis Comentarios
              </label>
            </div>
          </div>
          <div className="container_datos">
            <img src={avatar} alt={name} />
            <div className="renderUser">
                <label>Nombre</label>
                <input
                  type="text"
                  name="inputname"
                  value={name}
                  disabled
                ></input>
                <label>Apellido</label>
                <input
                  type="text"
                  name="inputname"
                  value={last_name}
                  disabled
                ></input>
                <label>Email</label>
                <input
                  type="text"
                  name="inputname"
                  value={email}
                  disabled
                ></input>
                <label>Tipo De Cuenta</label>
                <input
                  type="text"
                  name="inputname"
                  value={tipodecuenta}
                  disabled
                  ></input>
                <label>Contraseña</label>
                <input
                  type="password"
                  name="inputname"
                  value={Datos.password}
                  disabled
                  ></input>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
    <NavBar />
    <div className="container-Perfiluser">
      <div className="optionsUser">
        <div className="commentsUser">
          <label onClick={(e) => handleData(e)} value="datos">
            Mis Datos
          </label>
          <label onClick={(e) => handleData(e)} value="comentarios">
            Mis Comentarios
          </label>
        </div>
      </div>
      <div className="container_datos">
        Hola
      </div>
    </div>
    <Footer/>
    </>
  );
}
