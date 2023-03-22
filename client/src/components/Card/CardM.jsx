
import { useNavigate } from "react-router-dom";
import "../../views/detalleProd/detalleProd.css";

const CardM = (props) => {
  const navigate = useNavigate();

  const click = async () => {
    if (props.props.superM.id) {
      navigate(`/market/id/${props.props.superM.id}`);
    }
  };

  if (props.props.superM) {
    return (
      <>
        <div
          className="detail-compara-cont"
          key={props.props.superM.id}
          onClick={click}
        >
          <div className="detail-precio-s">
            <img src={props.props.superM.image} alt={props.props.superM.image} />
          </div>
          <h3 className="super-det-pre">${props.props.price}</h3>
        </div>
      </>
    );
  }

};

export default CardM;
