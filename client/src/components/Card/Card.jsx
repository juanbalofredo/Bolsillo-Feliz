import { useNavigate } from "react-router-dom";
import "./card.css";

export default function Card({ product }) {
  const { fullName, name, brand, image } = product;

  const navigate = useNavigate();
  const click = async () => {
    navigate(`/products/id/${product.id}`);
  };

  return (
    <>
      <div className="container-Cards">
        <div className="card" onClick={product.id ? click : null}>
          <div className="cardetails">
            <p className="text-title">{fullName}</p>
            <img className="image" src={image} alt={name} key={name}></img>
            <p className="text-brand">{brand}</p>
          </div>
        </div>
      </div>
    </>
  );
}
