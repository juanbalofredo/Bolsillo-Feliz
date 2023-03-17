import { useState } from "react";
import "./Perfil.css";
import { useSelector } from "react-redux";
import NavBar from "../Navbar/NavBar";

export default function Perfil() {
 const { name, avatar, email, last_name, type_account, id } = useSelector(
    (state) => state.bolsilloPersist);
  var tipodecuenta = type_account;
  if (type_account === "1") {
     tipodecuenta = "Usuario";
  }
  else if(type_account === "2") {
     tipodecuenta = "Marcader";
  }else if(type_account === "3") {
     tipodecuenta = "Admin"
  }
  const [Edit, SetEdit] = useState("comentarios");
  const [Datos, SetDatos] = useState({
    password:""
  });
  console.log(Edit);
  async function handleData(e) {
    console.log(e);
    SetEdit(e)
  }
  if (Edit === "datos") {
    return (
      <>
      <NavBar/>
        <div className="container-Perfiluser">
          <div className="optionsUser">
            <div className="commentsUser">
              <form onClick={handleData}></form>
              <button value="datos">Mis Datos</button>
              <button value="comentarios">Mis Comentarios</button>
            </div>
          </div>
          <div className="container_datos">
            <img src={avatar} alt={name} />
            <div className="renderUser">
              <form action="">
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
                <label>Tipo De Cuenta</label>
                <input
                  type="password"
                  name="inputname"
                  value={Datos.password}
                  disabled
                ></input>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="container-Perfiluser">
      <div className="optionsUser">
        <div className="commentsUser">
          <button>Mis Datos</button>
          <button>Mis Comentarios</button>
        </div>
      </div>
      <div className="container-commentarios">NO TIENES COMENTARIOS AUN ;/</div>
    </div>
  );
}
