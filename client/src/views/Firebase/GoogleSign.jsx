import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { StartGoogleAuth } from "../../redux/apiPetitions";

const Register = () => {
  const user = useSelector(state=> state.bolsilloFeliz)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmitGoogle = () => {
    if(user.user === false)
    dispatch(StartGoogleAuth)
    .then(res=>navigate("/home"))
  };

  return (
    <button className="register-google" onClick={handleSubmitGoogle}>
      Iniciar Sesion con Google
    </button>
  );
};

export default Register;
