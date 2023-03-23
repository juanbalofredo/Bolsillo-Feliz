import "../../views/detalleProd/detalleProd.css";

const CardO = (props) => {
  console.log(props);

  return (
    <>
      <div className="detail-compara-cont" key={props.id}>
        <div>
          <h3 className="super-det-pre">
            {props.product.product.name} {props.product.product.unit}
          </h3>
          <h3>Marca:{props.product.product.brand}</h3>
          <h3 className="super-det-pre">${props.product.price}</h3>
        </div>
        <input type="number" />
        <button>Cambiar</button>
      </div>
    </>
  );
};

export default CardO;
