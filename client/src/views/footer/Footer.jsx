import React from "react";
import "./footer.css";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Footer = () => {
  const state = useSelector((state) => state.bolsilloPersist);
  const logeado = state.user;

  return (
    <footer className="footer">
      <div className="site_footer">
        <div className="right-footer">
          <a href="/about">
            <p>Sobre nosotros</p>
          </a>
          <div className="redes_sociales">
            <a
              className="a_git"
              href="https://www.linkedin.com/in/bolsillo-feliz-10107b269/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
            <a
              className="git"
              href="https://twitter.com/bolsillo_feliz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="github" />
            </a>
            <a
              className="web_side"
              href="https://www.instagram.com/bolsillofeliz123/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="portafolio" />
            </a>
          </div>
        </div>
        {logeado ? (
  <div className="footer-tenes-c">
    <h3>¿ Te gustaria agregar los productos de tu comercio ?</h3>

      <Link to="/autorizacion">
      <p>Hace click aca</p>
      </Link>

  </div>
) : null}
        <div className="copyright">
          <div className="copy">
            <p>@{new Date().getFullYear()} BolsilloFeliz. All right reserved</p>
           
          <a href="mailto:bolsillofelizapp@gmail.com">Contactar con soporte</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// <div className="footer">
// <div className="sb__footersection__padding">
//   <div className="sb__footer-links"></div>
//   <div className="sb__footer-links-div">
//     <a href="/about">
//       <p>Sobre nosotros</p>
//     </a>

//     <p>Nuestras redes</p>
//   </div>
//   <div className="sb__footer-Links_div">
//     <div className="socialmedia">
//       {/* <a href=""></a><p><img src={fb} alt="" /></p> */}
//       <a href="https://twitter.com/bolsillo_feliz">
//         <p>
//           <img src={twitter} alt="" />
//         </p>
//       </a>
//       <a href="https://www.linkedin.com/in/bolsillo-feliz-10107b269/">
//         <p>
//           <img src={linkedin} alt="" />
//         </p>
//       </a>
//       <a href="https://www.instagram.com/bolsillofeliz123/">
//         <p>
//           <img src={instagram} alt="" />
//         </p>
//       </a>
//     </div>
//   </div>

//   <div>
//     <p>bolsillofieliz123@gmail.com</p>
//   </div>
// </div>

// {logeado ? (
//   <div className="footer-tenes-c">
//     <h3>¿ Te gustaria agregar los productos de tu comercio ?</h3>
//     <a>
//       {" "}
//       <Link to="/autorizacion">
//       <p>Hace click aca</p>
//       </Link>
//     </a>
//   </div>
// ) : null}

// <div className="rightContainer">
//   <div>
//     <p>@{new Date().getFullYear()} CodeInn. All right reserved</p>
//   </div>
//   <div>
//     <div>
//       <p>terms & conditions</p>
//     </div>

//     <div>
//       <p>Privacy</p>
//     </div>

//     <div>
//       <p>Security</p>
//     </div>

//     <div>
//       <p>Cookie Declaration</p>
//     </div>
//   </div>
// </div>
// </div>
