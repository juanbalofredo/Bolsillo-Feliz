import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "../../views/cart/Cart";
import "./navBar.css";
import User from "../user/User";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loggedOut, changeTheme } from "../../redux/slice/persistSlice";
import swal from "sweetalert";

const Navbar = () => {
  const state = useSelector((state) => state.bolsilloPersist);
  const user = state.user;
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  useEffect(
    function () {
      if (state.darkMode === true) {
        document.querySelector("body").setAttribute("class", "bodyDark");
        document.querySelector("body").setAttribute("theme", "dark");
        document
          .getElementById("button-light")
          .setAttribute("class", "button-dark");

        // document.querySelector(".button-light").setAttribute("class", "button-dark");
      } else {
        document.querySelector("body").setAttribute("class", "");
        document.querySelector("body").setAttribute("theme", "light");
        document
          .getElementById("button-light")
          .setAttribute("class", "button-light");
        // document.querySelector(".button-dark").setAttribute("class", "button-light");
      }
    },
    [state.darkMode]
  );

  // const changeThemes = () => {
  //   if (document.querySelector("body").getAttribute("theme") === "light") {
  //     document.querySelector("body").setAttribute("class", "bodyDark");
  //     document.querySelector("body").setAttribute("theme", "dark");
  //     document.querySelector(".button-light").setAttribute("class", "button-dark");
  //   } else {
  //     document.querySelector("body").setAttribute("class", "");
  //     document.querySelector("body").setAttribute("theme", "light");
  //     document.querySelector(".button-dark").setAttribute("class", "button-light");
  //   }
  // };

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
    <section className="" id="navbar1">
      <div className="logo-Container">
        <Link to="/home">
          <img
            src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677807225/de0ieqim2kymph6cldvl.webp"
            alt="logo"
          />
        </Link>
      </div>
      <div className="searchbar-container"></div>

      <div className="login-Container">
        <div onClick={() => setActive(!active)}></div>
        <User />
        <div
          className={`container-cart-products ${active ? "" : "hidden-cart"}`}
        >
          <Cart />
        </div>
        <div>
          {!user ? (
            <div className="nav-kis">
              <Link to="/register">
                <button className="navButton">Registrarse</button>
              </Link>
              <Link to="/login">
                <button className="navButton">Iniciar sesion</button>
              </Link>
            </div>
          ) : (
            <> 
              {
              //hacer con un short circuit que si el usuario logeado es vendedor aparezca el boton linkeado
              // user.rol === "vendedor" && <El boton/>
            }
              <Link to="/form">
                <button className="navButton">Agregar producto</button>
              </Link>
              <button className="navButton" onClick={logOuter}>
                Cerrar sesion
              </button>
            </>
          )}
        </div>

        <div>
          <button
            onClick={async () => dispatch(changeTheme())}
            className="navButton button-light"
            id="button-light"
          ></button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
