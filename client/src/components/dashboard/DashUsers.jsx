import { useDispatch, useSelector } from "react-redux";
import "./dashUsers.css";
import Navbar from "../Navbar/NavBar";
import Footer from "../../views/footer/Footer";
import { useEffect, useState } from "react";
import {
  getUsers,
  updateUser,
  updateUserActivity,
} from "../../redux/apiPetitions/userPetitions";
import { sigPage, antPage } from "../../redux/slice/globalSlice";
import MyChart from "../Graphics/graphicsLine.js";
//import DonutChart from "../Graphics/graphicsDonut.js";

const DashUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const [Edit, setEdit] = useState("datos")
  const [input,setInput] = useState("");

  const state = useSelector((state) => state.bolsilloFeliz);
  const estate = useSelector((state) => state.bolsilloPersist);
  const allUsers = state.allUsers;
  const filtrus = allUsers.filter((a) => a.email.includes(input));

  const page = state.page;
  const startIndex = page === 1 ? 0 : page * 10 - 10;
  const endIndex = page === 1 ? 10 : startIndex + 10;
  const aver = allUsers.slice(startIndex, endIndex);


  async function cambiarTipo(id, type_account) {
    updateUser(estate.type_account, id, type_account);
  }

  async function kambiar(id, e) {
    updateUserActivity(estate.type_account, id, e);
    getUsers(dispatch);
  }


  async function handleData(e) {
    setEdit(e.target.value);
  }
    if(Edit === "datos"){

      return (
        <>
          <Navbar />
          <div className="container-Perfiluser">
            <div className="optionsUser">
              <div className="commentsUser">
                <label onClick={(e) => handleData(e)} value="datos" >
                  Usuarios
                </label>
                <label onClick={(e) => handleData(e)} value="comentarios" >
                  Estadisticas
                </label>
              </div>
            </div>
            <div className="cont-de-cont">
        <input className="tras" type="text" placeholder="Buscar por mail" name="bsuqeuda" onChange={e=>setInput(e.target.value)}  />
        <div className="container-ed-users">
          {allUsers.length ? (
            filtrus.map((element) => {
              return (
                <table key={element.id}>
                  <td className="ed-img">
                    {" "}
                    <img
                      className="ed-img-av"
                      src={element.avatar}
                      alt="img"
                    />{" "}
                  </td>
                  <td className="ed-name">{element.name}</td>
                  <td className="ed-last-name">{element.last_name}</td>
                  <td className="ed-email">{element.email}</td>

                  <td
                    onChange={(e) => cambiarTipo(element.id, e.target.value)}
                    className="ed-tipo"
                  >
                    <select name="" id="select-ed-us">
                      <option value="">
                        {element.type_account === "1"
                          ? "Usuario"
                          : element.type_account === "2"
                          ? "Mercader"
                          : element.type_account === "3"
                          ? "Admin"
                          : "Merc.Premium"}
                      </option>
                      {element.type_account === "1" ? (
                        ""
                      ) : (
                        <option value="1">Usuario</option>
                      )}
                      {element.type_account === "2" ? (
                        ""
                      ) : (
                        <option value="2">Mercader</option>
                      )}
                      {element.type_account === "3" ? (
                        ""
                      ) : (
                        <option value="3">Admin</option>
                      )}
                      {element.type_account === "4" ? (
                        ""
                      ) : (
                        <option value="4">Merc.Premium</option>
                      )}
                    </select>
                  </td>

                  <td className="ag-but">
                    <label className="switchBtn">
                      {element.activity ? (
                        <input
                          onChange={(e) =>
                            kambiar(element.id, !element.activity)
                          }
                          type="checkbox"
                        />
                      ) : (
                        <input
                          onChange={(e) =>
                            kambiar(element.id, !element.activity)
                          }
                          checked
                          type="checkbox"
                        />
                      )}
                      <div className="slide round"></div>
                    </label>
                  </td>
                </table>
              );
            })
            
          ) : (
            <div className="container_vacio_2"></div>
          )}
        </div>
        <div className="pag-but-que">
            {page === 1 ? (
              <button className="but-pag-a" disabled>
                Anterior
              </button>
            ) : (
              <button
                className="but-pag-a"
                onClick={(e) => dispatch(antPage())}
              >
                Anterior
              </button>
            )}
            {page === Math.ceil(allUsers.length / 10) ? (
              <button className="but-pag-s" disabled>
                Siguiente
              </button>
            ) : (
              <button
                className="but-pag-s"
                onClick={(e) => dispatch(sigPage())}
              >
                Siguiente
              </button>
            )}
          </div>
      </div>
          </div>
        </>
      );
    }
    return (
      <>
      <Navbar />
      <div className="container-Perfiluser">
        <div className="optionsUser">
          <div className="commentsUser">
            <label onClick={(e) => handleData(e)} value="datos">
              Usuarios
            </label>
            <label onClick={(e) => handleData(e)} value="comentarios">
              Estadisticas
            </label>
          </div>
        </div>
        <div className="container_datos">
        <div>
          <h2>Usuarios</h2>
          <MyChart />
        </div>
        {/* <div>
          <DonutChart />
        </div> */}

        </div>
      </div>
      <Footer/>
      </>
    );
  }

export default DashUsers;