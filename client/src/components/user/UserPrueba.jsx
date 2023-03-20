import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { loggedOut } from "../../redux/slice/persistSlice";
import "./user.css";

export const UserP = () => {
  const state = useSelector((state) => state.bolsilloPersist);
  const user = state.user;
  const image = user ? state.avatar : null;
  const rol = user ? state.type_account : null;
  const name = user ? state.name : null;
  const dispatch = useDispatch();
  const logOuter = async (e) => {
    swal({
      title: "Seguro!",
      text: "Desea cerrar sesion?",
      icon: "warning",
      button: "Cerrar sesion",
    }).then((result) => {
      if (result === true) {
        dispatch(loggedOut());
        window.location.href = "/home";
      }
    });
  };
  return (
    <>
      <div className="user-container">
        <ul className="nav">
          <li>
            {user ? (
              <div className="user">
                <div className="imagen">
                  <img
                    className="profileImg"
                    src={image}
                    alt=""
                    height="40px"
                    width="40px"
                  />
                </div>
                <div className="name-container">
                  {user ? <h4 className="name">{name}</h4> : <div></div>}
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <ul className="nav">
              <li>
                <a href="/perfil">
                  {rol === "1" ? (
                    <div className="dash-container">
                      <p className="name">
                        <Link to="/perfil">Mi Perfil</Link>{" "}
                      </p>{" "}
                    </div>
                  ) : null}
                </a>
                <ul>
                  <li>
                    <a href="/form">
                      {rol === "2" ? (
                        <div className="merc-container">
                          <p className="name">Mi mercado</p>
                        </div>
                      ) : null}
                    </a>
                  </li>
                </ul>
              </li>
              <ul>
                <li>
                  <a href="/dashuser">
                    {rol === "3" ? (
                      <div className="dash-container">
                        <p className="name">
                          <Link to="/dashuser">Lista de usuarios</Link>{" "}
                        </p>{" "}
                      </div>
                    ) : null}
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/dashuser">
                    {user ? (
                      <div className="dash-container">
                        <p >
                        <label onClick={logOuter}>Cerra sesion</label>
                        </p>{" "}
                      </div>
                    ) : null}
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/dashuser">
                    {rol === "3" ? (
                      <div className="dash-container">
                        <p className="name">
                          <Link to="/dashuser">Lista de usuarios</Link>{" "}
                        </p>{" "}
                      </div>
                    ) : null}
                  </a>
                </li>
              </ul>
            </ul>
          </li>
          {!user ? (
            <>
              <li>
                <a href="/register">Registrarse</a>
              </li>
              <li>
                <a href="/login">Iniciar Sesion</a>
              </li>
            </>
          ) : (
            <>
              <div></div>
            </>
          )}
        </ul>
      </div>
    </>
  );
};
export default UserP;
