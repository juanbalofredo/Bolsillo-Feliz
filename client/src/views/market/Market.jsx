import React, { useEffect, useState } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import axios from "../../redux/axios.js";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./market.css";
import Footer from "../footer/Footer";
import Navbar from "../../components/Navbar/NavBar";
import "leaflet/dist/leaflet.css";
import {
  postComments,
  getComments,
  deleteComment
} from "../../redux/apiPetitions/userPetitions";
import swal from "sweetalert";
import Loader from "../../components/Loader/loader.jsx";

const Market = () => {
  const dispatch = useDispatch();
  const estate = useSelector((state) => state.bolsilloPersist);
  const state = useSelector((state) => state.bolsilloFeliz);
  const { id } = useParams();
  const [market, setMarket] = useState(null);

  useEffect(() => {
    axios
      .get(`/market/id/${id}`)
      .then((e) => setMarket(e.data))
      .catch((err) => {
        return err;
      });
  }, []);

  useEffect(() => {
    getComments(dispatch);
  }, [dispatch]);

  const [comentario, setComentario] = useState({
    message: "",
    score: 0,
  });

  function setear(e) {
    const { name, value } = e.target;
    setComentario({
      ...comentario,
      [name]: value,
    });
  }
  async function eli(id) {
    swal({
      title: "Seguro!?",
      text: "Desea eliminar comentario?",
      icon: "warning",
      button: "eliminar",
    }).then((result) => {
      if (result === true) {
        deleteComment(dispatch,{id:id})
      }
    });


    
  }

  async function comentar(e) {
    e.preventDefault();
    if (comentario.score !== 0) {
      if (comentario.message.length > 10 && comentario.message.length < 200) {
        postComments(dispatch, {
          message: comentario.message,
          userId: estate.id,
          superMId: market.id,
          score: comentario.score,
        });
        setComentario({
          message: "",
          score: 0,
        });
        swal({
          title: "Comentario agregado",
          text: "Tu comentario se agrego correctamente",
          icon: "success",
          button: "ok",
        });
      } else {
        swal({
          title: "Comentario",
          text: "El comentario deberia tener entre 10 y 200 caracteres",
          icon: "error",
          button: "Reintentar",
        });
      }
    } else {
      swal({
        title: "Estrellas",
        text: "El puntaje de estrellas deberia ser entre 1 - 5",
        icon: "error",
        button: "Reintentar",
      });
    }
  }
  if (market) {
    const commentar = state.comentaries?.filter(
      (a) => a?.superM?.id === market.id
    );
    console.log(market)

    return (
      <>
        <div className="container-market-c">
          <div className="banner-sup">
            <h1>{market.name}</h1>
            <img src={market.image} alt="" className="img-market-f" />
          </div>
          <MapContainer
            center={estate.location}
            zoom={13}
            scrollWheelZoom={true}
          >
            <Marker
              position={estate.location}
              icon={L.icon({
                iconUrl:
                  "https://res.cloudinary.com/dzuasgy3l/image/upload/c_scale,w_30/v1679552688/f3zk9cowsi3mfdivsewn.png",
              })}
            >
              <Popup>Vos</Popup>
            </Marker>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {market?.ubications.map((a) => (
              <Marker
                position={a}
                icon={L.icon({
                  iconUrl:
                    "https://res.cloudinary.com/dzuasgy3l/image/upload/v1679009741/yajixzbn1c7n5ssgkqcm.png",
                })}
              >
                {" "}
                <Popup>{market.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
          <div className="txt-sup-of">
            <h3>Visitar pagina oficial {<a  rel="noreferrer" target="_blank" href={market.link}>click aqui</a>}</h3>
          </div>
          <div className="cont-coment-super">
            {estate.user ? (
              <div className="input-com-su">
                <form className="input-com-su">
                  <div className="foto-av-txc-s">
                    <img src={estate.avatar} alt="" />
                    <input
                      placeholder={`Añade tu comentario sobre  ${market.name}...`}
                      onChange={setear}
                      value={comentario.message}
                      name="message"
                    />{" "}
                    <div className="plla">
                      <input
                        id="radio1"
                        type="radio"
                        name="score"
                        value="5"
                        onChange={setear}
                      />
                      <label for="radio1">★</label>
                      <input
                        id="radio2"
                        type="radio"
                        name="score"
                        value="4"
                        onChange={setear}
                      />
                      <label for="radio2">★</label>
                      <input
                        id="radio3"
                        type="radio"
                        name="score"
                        value="3"
                        onChange={setear}
                      />
                      <label for="radio3">★</label>
                      <input
                        id="radio4"
                        type="radio"
                        name="score"
                        value="2"
                        onChange={setear}
                      />
                      <label for="radio4">★</label>
                      <input
                        id="radio5"
                        type="radio"
                        name="score"
                        value="1"
                        onChange={setear}
                      />
                      <label for="radio5">★</label>
                      {comentario.message.length > 0 ? (
                        <button onClick={comentar}>Comentar</button>
                      ) : null}
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              <div>Cree o ingrese a su cuenta para comentar</div>
            )}
            <div className="cont-com-sup-a">
              {commentar ? (
                commentar.map((a) => (
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
                    </div>{ estate.type_account === "3" ?
                    <button className="delete-comment-su" onClick={e=>eli(a.id)}>Eliminar comentario</button>:null}
                  </div>
                ))
              ) : (
                <p>No hay comentarios todavia</p>
              )}
            </div>
          </div>
        </div> 
        <Footer />
      </>
    );
  }else{
    return( <Loader />)
   
  }
};

export default Market;
