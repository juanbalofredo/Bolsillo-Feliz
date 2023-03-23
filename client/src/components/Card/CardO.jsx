
import "../../views/detalleProd/detalleProd.css";

const CardO = (props) => {
  if (props.props.superM) {
    return (
      <>
        <div
          className="detail-compara-cont"
          key={props.props.superM.id}
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

export default CardO;
