import "./home.css";
import NavBar from "../../components/Navbar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import Footer from "../footer/Footer";
import { useEffect } from "react";
import { getProductos } from "../../redux/apiPetitions/productsPetitions";
import { sigPage, antPage } from "../../redux/slice/globalSlice";
import Filtro from "../../components/filtro/Filtro";
import Orden from "../../components/order/Orden";
import { loggedOut, obtenerLocation } from "../../redux/slice/persistSlice";
import Loader from "../../components/Loader/loader.jsx" 
import swal from "sweetalert";


const Home = () => {
  const state = useSelector((state) => state.bolsilloFeliz);
  const estate = useSelector((state) => state.bolsilloPersist);
  const page = state.page;
  const myProduct = state.productsBackup;
  const startIndex = page === 1 ? 0 : page * 10 - 10;
  const endIndex = page === 1 ? 10 : startIndex + 10;
  const aver = myProduct.slice(startIndex, endIndex);
  const dispatch = useDispatch();

  let didInit = false;
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      getProductos(dispatch);
    }
  }, [dispatch]);

  let didInit1 = false;
  useEffect(() => {
    if (!didInit1) {
     if (estate.activity === false) {
      swal({
        title: "Cuenta baneada",
        text: "Tu cuenta a sido desactivada",
        icon: "error",
        button: "Reintentar",
      });
      dispatch(loggedOut());
     }
    }
  }, []);


  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      dispatch(obtenerLocation([position.coords.latitude,position.coords.longitude]))
    });
  });

  return (
    <>
    
      <div className="img-home-cart">
        <div className="slider-home"></div>
      </div>
      {myProduct ? (
      <div className="container-de-cintainer">
        <Filtro />
        <div className="Home-container">
          <Orden />
          <div className="paginated-fasle">
            <div className="Home-container-products">
              {aver.map((p) => (
                <Card key={p.id} product={p} />
              ))}
            </div>
          </div>{" "}
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
            {page === Math.ceil(myProduct.length / 10) ? (
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
      </div> ): <Loader />}
      <Footer />
    </>
  );
};

export default Home;
