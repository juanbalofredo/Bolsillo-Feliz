import { useDispatch, useSelector } from "react-redux";
import "./dashUsers.css";
import Navbar from "../Navbar/NavBar";
import Footer from "../../views/footer/Footer";
import axios from "../../redux/axios.js";
import { useEffect, useState } from "react";
import {
  getUsers,
  updateUser,
  updateUserActivity,
} from "../../redux/apiPetitions/userPetitions";
import MyChart from "../Graphics/graphicsLine.jsx";
import DonutChart from "../Graphics/graphicsDonut.jsx";
import { updatePrecioMp } from "../../redux/apiPetitions/productsPetitions";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const DashUsers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);
  const [mp, setMp] = useState("");
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`/market/paymentprice`)
      .then((e) => setMp(e.data))
      .catch((err) => {
        return err;
      });
  }, []);
  useEffect(() => {
    axios
      .get(`/user/`)
      .then((e) => setUser(e.data))
      .catch((err) => {
        return err;
      });
  }, []);
  const [out, setOut] = useState(0);
  console.log(out);
  function setear(e) {
    const { value } = e.target;
    setOut(value);
  }

  function onckil() {
    updatePrecioMp(out);
    swal({
      title: "Precio cambiado",
      text: "Cambiaste el precio",
      icon: "success",
      button: "Continuar",
    }).then((e) => window.location.href = "/dashuser");
  }

  const [Edit, setEdit] = useState(false);
  const [input, setInput] = useState("");
  const usuarios2 = users?.filter((a) => a.type_account === "2");

  const state = useSelector((state) => state.bolsilloFeliz);
  const estate = useSelector((state) => state.bolsilloPersist);
  const allUsers = state.allUsers;
  const filtrus = allUsers.filter((a) => a.email.includes(input));

  async function cambiarTipo(id, type_account) {
    const usuario = filtrus.filter((e) => e.id == id);
    updateUser(estate.type_account, id, type_account, usuario);
  }

  async function kambiar(id, e) {
    updateUserActivity(estate.type_account, id, e);
  }

  if (mp) {
    return (
      <>
   
        <div className="container-Perfiluser">
          <div className="optionsUser">
            <div className="useroptionclick">
              <button onClick={(e) => setEdit(true)}>Usuarios</button>
              <button onClick={(e) => setEdit(false)}>Estadisticas</button>
            </div>
          </div>
          {Edit === true ? (
            <div className="cont-de-cont">
              <input
                className="tras"
                type="text"
                placeholder="Buscar por mail"
                name="bsuqeuda"
                onChange={(e) => setInput(e.target.value)}
              />
              <div className="container-ed-users">
                {allUsers.length ? (
                  filtrus.map((element) => {
                    if (element.email !== "admin@gmail.com") {
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
                            onChange={(e) =>
                              cambiarTipo(element.id, e.target.value)
                            }
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
                    }
                  })
                ) : (
                  <div className="container_vacio_2"></div>
                )}
              </div>
            </div>
          ) : (
            <>
              <div className="container_datos">
                <div className="div-cont-graf">
                  <h2>Usuarios total: {users.length}</h2>
                  <div className="div-docnt-cont-g">
                    <div>
                      <MyChart />
                    </div>
                    <div>
                      <DonutChart />{" "}
                    </div>
                  </div>
                  <div className="dis-div-pre-mp">
                    <div className="verdes-assasdd-">
                      <h3>
                        Tu ingreso este mes fue de:{" "}
                        <h3 className="verde-asc-sad">
                          ${usuarios2.length * mp[0].price}
                        </h3>
                      </h3>
                    </div>
                    <div className="div-as-ss-ee-as-">
                      <h3>El precio actual anual es de: ${mp[0].price}</h3>
                      <div>
                        <input
                          onChange={setear}
                          name="presio"
                          value={out}
                          type="number"
                          placeholder="Cambiar precio"
                        />
                        <button onClick={onckil}>Aceptar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <Footer />
      </>
    );
  }
};

export default DashUsers;
