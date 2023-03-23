import { useState } from "react";
import { useSelector } from "react-redux";
import { updatePrecioProdM } from "../../redux/apiPetitions/productsPetitions";
import "../../views/detalleProd/detalleProd.css";
import swal from "sweetalert";

const CardO = (props) => {
  const estate = useSelector((state) => state.bolsilloPersist);

  console.log(props);
  function setear(e) {
    const { value } = e.target;
    setInput(value);
  };

  const [input,setInput] = useState()

  function dale (){
    updatePrecioProdM(input,props.id,estate.superMId);
    swal({
      title: "Precio cambiado",
      text: "Producto actualizado correctamente",
      icon: "success",
      button: "OK",
    });
  }

  return (
    <>
      <div className="detail-compara-cont-2" key={props.id}>
        <div>
          <h3 className="super-det-pre-2">
            {props.product.product.name} {props.product.product.unit}
          </h3>
          <h3>Marca:{props.product.product.brand}</h3>
          <h3 className="super-det-pre-2">${props.product.price}</h3>
        </div>
        <input type="number" onChange={setear} />
        <button onClick={dale} >Cambiar</button>
      </div>
    </>
  );
};

export default CardO;
