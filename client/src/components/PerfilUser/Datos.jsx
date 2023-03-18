import "./Perfil.css";
import { useSelector } from "react-redux";
import { getUserByEmail } from "../../redux/apiPetitions/userPetitions";
import swal from "sweetalert";
import axios from "axios";

export default function PerfilDatos() {
  const { name, avatar, email, last_name, type_account, id } = useSelector(
    (state) => state.bolsilloPersist
  );
  console.log(id);
  var tipodecuenta = type_account;
  if (type_account === "1") {
    tipodecuenta = "Usuario";
  } else if (type_account === "2") {
    tipodecuenta = "Marcader";
  } else if (type_account === "3") {
    tipodecuenta = "Admin";
  }
  async function HandleData() {
    const password = await swal("Escribe tu contraseña actual", {
      content: "input",
    });
    const res = await getUserByEmail(email, password);
    console.log(res.status);
    try {
      if (res.status === 200) {
        const newpassword = await swal("Escribe tu nueva contraseña", {
          content: "input",
        });
        const response = await axios({
          method: "put",
          url: "http://localhost:3001/user/update",
          data: { id, newpassword },
        });
          return swal("Contraseña actualizada con exito!", "OK", "success");
      }
    } catch (error) {
    }
    swal("Algo salio mal!", "Intentar otra vez", "error");
    return;
  }
  return (
    <>
      <div className="container_datos">
        <img src={avatar} alt={name} />
        <div className="renderUser">
          <label>Nombre</label>
          <input type="text" name="inputname" value={name} disabled></input>
          <label>Apellido</label>
          <input
            type="text"
            name="inputname"
            value={last_name}
            disabled
          ></input>
          <label>Email</label>
          <input type="text" name="inputname" value={email} disabled></input>
          <label>Tipo De Cuenta</label>
          <input
            type="text"
            name="inputname"
            value={tipodecuenta}
            disabled
          ></input>
          <label>Contraseña</label>
          <input
            type="password"
            name="inputname"
            value="**********"
            disabled
          ></input>
          <div className="buttonContraseña">
            <form>
              <label className="labelC" onClick={(e) => HandleData(e)}>
                Cambiar Contraseña
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
// swal("Escribe tu contraseña actual", { content: "input" })
// .then((value) => getUserByEmail(email, value))
// .then((value) =>
//   swal("Escribe tu nueva contraseña", { content: "input" })
// )
// .then((value) =>
//   axios({
//     method: "post",
//     url: "http://localhost:3001/user/email",
//     data: {id, value},
//   })
// ).then((value)=>swal("Contraseña Cambiada", "OK", "success")).catch((value)=>swal("Algo salio mal!", "Intentar otra vez", "error"))
