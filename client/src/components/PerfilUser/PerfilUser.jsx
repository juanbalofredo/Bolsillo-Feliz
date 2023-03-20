import { useState } from "react";
import "./Perfil.css";
import NavBar from "../Navbar/NavBar";
import Footer from "../../views/footer/Footer";
import Datos from "./Datos";
import Comentarios from "./Comentarios";

export default function Perfil() {

  const [Edit, SetEdit] = useState(true);

  return (
    <>
      <NavBar />
      <div className="container-Perfiluser">
        <div className="optionsUser">
          <div className="commentsUser">
            <label onClick={(e) => SetEdit(true)}>Mis Datos</label>
            <label onClick={(e) => SetEdit(false)}>Mis Comentarios</label>
          </div>
        </div>
        {Edit === true ? (
          <Datos/>
        ) : (
          <Comentarios/>
        )}
      </div>
      <Footer />
    </>
  );
}

