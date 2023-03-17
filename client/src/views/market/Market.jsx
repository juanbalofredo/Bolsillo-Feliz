import React, { useEffect, useState } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import axios from "axios";
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
} from "../../redux/apiPetitions/userPetitions";
import swal from "sweetalert";

const Market = () => {
  const dispatch = useDispatch();
  const estate = useSelector((state) => state.bolsilloPersist);
  const state = useSelector((state) => state.bolsilloFeliz);
  const { id } = useParams();
  const [market, setMarket] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/market/id/${id}`)
      .then((e) => setMarket(e.data))
      .catch((err) => {
        return err;
      });
  }, [id]);

  useEffect(() => {
    getComments(dispatch);
  }, [dispatch]);

  const [comentario, setComentario] = useState({
    message: "",
    score: 1,
  });

  function setear(e) {
    const { name, value } = e.target;
    setComentario({
      ...comentario,
      [name]: value,
    });
    console.log(value);
  }

  async function comentar(e) {
    e.preventDefault();
    if (comentario.message.length > 10 && comentario.message.length < 200) {
      postComments(dispatch, {
        message: comentario.message,
        userId: estate.id,
        superMId: market.id,
        score: comentario.score,
        userName: estate.name + " " + estate.last_name,
      });
      setComentario({
        message: "",
        score: 1,
      });
      swal({
        title: "Comentario agregado",
        text: "Tu comentario se agrego correctamente",
        icon: "success",
        button: "ok",
      });
    } else {
      swal({
        title: "COmentario",
        text: "El comentario deberia tener entre 10 y 200 caracteres",
        icon: "error",
        button: "Reintentar",
      });
    }
  }
  if (market) {
    const commentar = state.comentaries?.filter(
      (a) => a.superM.id === market.id
    );

    return (
      <>
        <Navbar />
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
                  "https://res.cloudinary.com/dzuasgy3l/image/upload/v1679010160/kkina6b7i6ifj2u8ofwz.png",
              })}
            >
              <Popup>Vos</Popup>
            </Marker>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {market.ubications.map((a) => (
              <Marker
                position={a}
                icon={L.icon({
                  iconUrl:
                    "https://res.cloudinary.com/dzuasgy3l/image/upload/v1679009741/yajixzbn1c7n5ssgkqcm.png",
                })}
              >             <Popup>{market.name}</Popup></Marker>
            ))}
          </MapContainer>
          <div className="txt-sup-of">
            <h3>Visitar pagina oficial click aqui</h3>
          </div>
          <div className="cont-coment-super">
            <div className="cont-com-sup-a">
              {commentar ? (
                commentar.map((a) => (
                  <div className="comentario-superm">
                    <h4>{a.userName}</h4>
                    <div>
                      <label className="label-2-su">
                        {"★".repeat(a.score)}
                      </label>
                      <label className="label-1-su">{a.message}</label>
                    </div>
                  </div>
                ))
              ) : (
                <p>No hay comentarios todavia</p>
              )}
            </div>
            {estate.user ? (
              <div className="input-com-su">
                <form className="input-com-su">
                  <label>Agregar tu comentario sobre {market.name}:</label>
                  <textarea
                    onChange={setear}
                    value={comentario.message}
                    name="message"
                  />
                  <label htmlFor="">Estrellas(1-5):</label>
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
                  </div>
                  <button onClick={comentar}>Comentar</button>
                </form>
              </div>
            ) : (
              <div>Cree o ingrese a su cuenta para comentar</div>
            )}
          </div>
        </div>
        {/* <Footer /> */}
      </>
    );
  }
};

export default Market;
