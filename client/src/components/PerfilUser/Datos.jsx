import "./Perfil.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserByEmail } from "../../redux/apiPetitions/userPetitions";
import swal from "sweetalert";
import axios from "../../redux/axios.js";
import { useState } from "react";
import { oneUsers } from "../../redux/slice/persistSlice";

export default function PerfilDatos() {
  const { name, avatar, email, last_name, type_account, id } = useSelector(
    (state) => state.bolsilloPersist
  );
  const [Foto, SetFoto] = useState("");
  var tipodecuenta = type_account;
  if (type_account === "1") {
    tipodecuenta = "Usuario";
  } else if (type_account === "2") {
    tipodecuenta = "Marcader";
  } else if (type_account === "3") {
    tipodecuenta = "Admin";
  }
  var uploadedImage = "";
  const dispatch = useDispatch();
  const uploadImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "proyectof");
    axios
      .post("https://api.cloudinary.com/v1_1/dzuasgy3l/image/upload", formData)
      .then((response) => {
        uploadedImage = response.data.secure_url;
        SetFoto(uploadedImage);
      })
      .then((e) =>
        axios({
          method: "put",
          url: "/user/update",
          data: { id: id, avatar: uploadedImage },
        })
      )
      .then((e) => dispatch(oneUsers(e.data)))
      .then((e) => swal("Perfil actualizado con exito!", "OK", "success"))
      .catch((e) => swal("Algo salio mal!", "Intentar otra vez", "error"));
  };
  async function HandleData() {
    const password = await swal("Escribe tu contraseña actual", {
      content: {
        element: "input",
        attributes: {
          type: "password",
        },
      },
    });
    const res = await getUserByEmail(email, password);
    if (res.status === 200) {
      const newpassword = await swal("Escribe tu contraseña actual", {
        content: {
          element: "input",
          attributes: {
            type: "password",
          },
        },
      });
      const response = await axios({
        method: "put",
        url: "/user/update",
        data: { id, newpassword },
      });
      return swal("Contraseña actualizada con exito!", "OK", "success");
    }
    swal("Algo salio mal!", "Intentar otra vez", "error");
    return;
  }

  return (
    <>
      <div className="container_datos-2">
        <div className="reg-avata2">
          {Foto.length > 5 ? (
            <img src={Foto} alt="perdo" />
          ) : (
            <img src={avatar} alt={name} />
          )}
          <input
            type="file"
            name="avatar"
            id="my_file"
            placeholder="Imagen"
            autoComplete="off"
            value={uploadedImage}
            onChange={(e) => uploadImage(e)}
          />
        </div>
        <div className="renderUser">
          <div>
            <label>Nombre :</label>
            <input type="text" name="inputname" value={name} disabled></input>
          </div>
          <div>
            <label>Apellido :</label>
            <input
              type="text"
              name="inputname"
              value={last_name}
              disabled
            ></input>
          </div>
          <div>
            <label>Email :</label>
            <input type="text" name="inputname" value={email} disabled></input>
          </div>
          <div>
            <label>Tipo De Cuenta :</label>
            <input
              type="text"
              name="inputname"
              value={tipodecuenta}
              disabled
            ></input>
          </div>

          <form className="buttonContraseña">
            <label className="labelC" onClick={(e) => HandleData(e)}>
              Cambiar Contraseña
            </label>
          </form>
        </div>
      </div>
    </>
  );
}
