import { useNavigate } from "react-router-dom";
import "../../views/detalleProd/detalleProd.css";

const CardM = (props) => {
  const navigate = useNavigate();

  const click = async () => {
    navigate(`/market/id/${props.props.id}`);
  };


  return (
    <>
      <div
        className="detail-compara-cont-a"
        key={props.props.name}
        onClick={click}
      >
        <div className="detail-precio-s-a">
          <img src={props.props.image} alt={props.props.image} />
          <h2>{props.props.name}</h2>
          <div className="queso-asdad-aa">
            <h3 className="label-5-su"><p>{"★".repeat(props.props.puntaje_promedio)}</p>{"★".repeat(5-props.props.puntaje_promedio)}</h3>
            </div>
        </div>
      </div>
    </>
  );
};

export default CardM;
