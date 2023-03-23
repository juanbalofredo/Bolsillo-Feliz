import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import "./card.css";

export default function Card({ product, market }) {
  const { name, brand, image } = product;
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const click = async () => {
    navigate(`/products/id/${product.id}`);
  };

  if (product) {
    const precioM = product.prices.find((a) => a.superM.name === market);
    if (precioM) {
        
    return (
      <>
        <div className="container-Cards">
          <div className="card" onClick={product.id ? click : null}>
            <div className="cardetails">
              <p className="text-title">{name}</p>
              <img className="image" src={image} alt={name} key={name}></img>
              <p className="text-brand">{brand}</p>
              <h2 className="price-brand-mark">${precioM.price}</h2>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>

        </div>
      </>
    );
  }}
}
