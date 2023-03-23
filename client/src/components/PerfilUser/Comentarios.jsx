import axios from "../../redux/axios.js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./Perfil.css";


export default function Comentarios() {

  const [Comentarios, setComentarios] = useState("");
  const {id} = useSelector((state)=> state.bolsilloPersist);
  useEffect(() => {
    axios
      .get(`/reviews/id/${id}`)
      .then((e) => setComentarios(e.data))
      .catch((err) => {
        return err;
      });
  }, []);
  return (
    <>
    <div className="container_comentarios">
      {Comentarios.length > 1 ?( 
        Comentarios.map((a) => (
          <div className="comentario-superm">
          <img src={a.user.avatar} alt="img" />
          <div className="esestetx">
            <div className="txtaaassa">
              <h4>
                {a.user.name} {a.user.last_name}
              </h4>
              <div className="label-2-su">
                <p>{"★".repeat(a.score)}</p>{"★".repeat(5-a.score)}
              </div>
            </div>
            <div>
              <label className="label-1-su">{a.message}</label>
            </div>
          </div>
        </div>
        ))
     ):
      (
        <div>
        Sin comentarios por el momento
      </div>
      )}
    </div>
    </>
  );
}
