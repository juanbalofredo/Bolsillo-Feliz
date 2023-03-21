import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { bolsilloPersist } from "../../redux/slice/persistSlice";
import "./Perfil.css";


export default function Comentarios() {
  const [Comentarios, setComentarios] = useState("");
  const {id} = useSelector((state)=> state.bolsilloPersist);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/reviews/id/${id}`)
      .then((e) => setComentarios(e.data))
      .catch((err) => {
        return err;
      });
  }, [id]);
  return (
    <>
    <div className="container_comentarios">
      {Comentarios ?( 
        <div className="c">
          Aca van los comentarios
        </div>
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
