import { useState } from "react";
import { useSelector } from "react-redux";
import { updatePrecioProdM } from "../../redux/apiPetitions/productsPetitions";
import "../../views/detalleProd/detalleProd.css";
import swal from "sweetalert";

const CardO = (props) => {
  const estate = useSelector((state) => state.bolsilloPersist);

  const [input,setInput] = useState(3)
  function setear(e) {
    const { value } = e.target;
    setInput(value);
  };


  function dale (){
    updatePrecioProdM(input,props.product.productId,estate.superMId);
    swal({
      title: "Precio cambiado",
      text: "Producto actualizado correctamente",
      icon: "success",
      button: "OK",
    });
  }

  return (
    <>
      <div className="detail-compara-cont-2" key={props.product.id}>
        <img src={props.product.product.image}alt="img" />
        <div>
          <h3 className="super-det-pre-2">
            {props.product.product.name} {props.product.product.unit}
          </h3>
          <h3>Marca:{props.product.product.brand}</h3>
          <h3 className="super-det-pre-2">${props.product.price}</h3>
        </div>
        <input type="number" placeholder="Cambiar precio" onChange={setear} />{
          input.length ?
        <button onClick={dale} >Cambiar</button>:null}
      </div>
    </>
  );
};

export default CardO;
