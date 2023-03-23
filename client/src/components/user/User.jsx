import { useSelector } from "react-redux";
import invitado from "../../assets/invitado.png";
import { Link, useNavigate } from "react-router-dom";
import "./user.css";
import { loggedOut } from "../../redux/slice/persistSlice";
import { useDispatch } from "react-redux";
import swal from "sweetalert";

export const User = () => {
  const state = useSelector((state) => state.bolsilloPersist);
  const user = state.user;
  const image = user ? state.avatar : null;
  const rol = user ? state.type_account : null;
  const name = user ? state.name : null;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function myFunction() {
    //Añade una clase al elemento que tenga el id myDropdown
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function (event) {
    if (!event.target.matches(".name-nav0us")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        //Busca dentro de drop-content los elementos con la clase show
        if (openDropdown.classList.contains("show")) {
          //elimina la clase show de los elementos dentro de drop-content
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  const logOuter = async (e) => {
    swal({
      title: "Seguro!",
      text: "Desea cerrar sesion?",
      icon: "warning",
      button: "Cerrar sesion",
    }).then((result) => {
      if (result === true) {
        dispatch(loggedOut());
        navigate("/home");
      }
    });
  };

  return (
    <div className="user-container">
      <div>
        {user ? (
          <>
            <img
              className="profileImg"
              src={image}
              alt=""
              height="40px"
              width="40px"
            />
          </>
        ) : (
          <img
            className="profileImg"
            src={invitado}
            alt=""
            height="40px"
            width="40px"
          />
        )}
      </div>
      <div className="name-container">
        {user ? (
          <>
            <div className="name-cont0e0d0">
              <h4 className="name-nav0us" onClick={(e) => myFunction()}>
                {name}
              </h4>
            </div>
            <div id="myDropdown" className="dropdown-content">
              <Link to="/perfil">Perfil</Link>
              <p className="Buttondi" onClick={logOuter}>
                Cerrar sesion 
              </p>
              {rol === "2" ? <Link to="/form">Mi mercado</Link> : null}
              {rol === "3" ? (
                <Link to="/dashuser">Lista de usuarios</Link>
              ) : null}
            </div>
          </>
        ) : (
          null
        )}
      </div>
    </div>
  );
};
export default User;
