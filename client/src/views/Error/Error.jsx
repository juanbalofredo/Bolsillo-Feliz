import "./Error.css"
import logo from "../../assets/logo.jpg"
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <>
    <div className="error-container">
        <div className="img-error">
        <img src={logo} alt="" />
        </div>
        <div className="text-error">
            <p>Ups</p>
            <Link to="/home">
            <button className="detail-back">Volver</button>
          </Link>
        </div>
    </div>
    </>
  );
};

export default Home;