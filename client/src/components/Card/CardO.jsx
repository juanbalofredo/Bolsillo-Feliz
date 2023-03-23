import { useState } from "react";
import { useSelector } from "react-redux";
import { deleteProdPr, updatePrecioProdM } from "../../redux/apiPetitions/productsPetitions";
import "../../views/detalleProd/detalleProd.css";
import swal from "sweetalert";

const CardO = (props) => {
  const estate = useSelector((state) => state.bolsilloPersist);

  const [input, setInput] = useState(3);
  function setear(e) {
    const { value } = e.target;
    setInput(value);
  }

  function dale() {
    updatePrecioProdM(input, props.product.productId, estate.superMId);
    swal({
      title: "Precio cambiado",
      text: "Producto actualizado correctamente",
      icon: "success",
      button: "OK",
    }).then((result) => {
      if (result === true) {
        window.location.reload(true);
      }
    });
  }
  function pone() {
    swal({
      title: "Seguro?",
      text: "Desea eliminar producto",
      icon: "warning",
      button: "eliminar",
    }).then((result) => {
      if (result === true) {
        deleteProdPr(props.product.id)
        window.location.reload(true);
      }
    });
  }

  return (
    <>
      <div className="detail-compara-cont-2" key={props.product.id}>
        <button onClick={pone} className="but-qw-n-q-v">
          X
        </button>
        <img src={props.product.product.image} alt="img" />
        <div>
          <h3 className="super-det-pre-2">
            {props.product.product.name} {props.product.product.unit}
          </h3>
          <h3>Marca: {props.product.product.brand}</h3>
          <h3 className="super-det-pre-2-pla">${props.product.price}</h3>
        </div>
        <div>
          <input type="number" placeholder="Cambiar precio" onChange={setear} />
          {input.length ? (
            <button onClick={dale} className=".bottonazo">
              Cambiar
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CardO;
