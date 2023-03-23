import { useState, useEffect } from "react";
import "./Perfil.css";
import NavBar from "../Navbar/NavBar";
import Footer from "../../views/footer/Footer";
import Datos from "./Datos";
import Comentarios from "./Comentarios";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../redux/axios";
import { oneUsers } from "../../redux/slice/persistSlice";
// import { oneUsers } from "../../redux/slice/persistSlice";

export default function Perfil() {
  const dispatch = useDispatch();
  const [Edit, SetEdit] = useState(true);
  const statepersist = useSelector((state) => state.bolsilloPersist);


  useEffect(() => {
    axios.get(
      `/user/id/${statepersist.id}`
    ).then(r=> dispatch(oneUsers(r.data)))
    
   

    //  dispatch(oneUsers({...statepersist,[type_acount]:"2"}))
  }, []);

  return (
    <>
      
      <div className="container-Perfiluser">
        <div className="useroptionclick">
          <button onClick={(e) => SetEdit(true)}>Mis Datos</button>
          <button onClick={(e) => SetEdit(false)}>Mis Comentarios</button>
        </div>
        {Edit === true ? <Datos /> : <Comentarios />}
      </div>
      <Footer />
    </>
  );
}
