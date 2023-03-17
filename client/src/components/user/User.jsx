import { useSelector } from "react-redux";
import invitado from "../../assets/invitado.png";
import { Link } from "react-router-dom";
import "./user.css";

export const User = () => {
  const state = useSelector((state) => state.bolsilloPersist);
  const user = state.user;
  const image = user ? state.avatar : null;
  const rol = user ? state.type_account : null;
  const name = user ? state.name : null;
  return (
    <div className="user-container">
      <Link to="/perfil">
      <div>
        {user ? (
          <img
            className="profileImg"
            src={image}
            alt=""
            height="40px"
            width="40px"
          />
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
      </Link>
      <div className="name-container">
        {user ? <h4 className="name">{name}</h4> : <h4 className="name"></h4>}
      </div>
      {rol === "2" ? (
        <div className="merc-container">
          <p className="name">
            <Link to="/form">Mi mercado</Link>{" "}
          </p>
        </div>
      ) : null}

      {rol === "3" ? (
        <div className="dash-container">
          <p className="name">
            <Link to="/dashuser">Lista de usuarios</Link>{" "}
          </p>{" "}
        </div>
      ) : null}
    </div>
  );
};
export default User;
