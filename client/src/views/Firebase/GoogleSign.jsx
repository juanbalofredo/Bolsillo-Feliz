import { useDispatch } from "react-redux";

import { StartGoogleAuth } from "../../redux/apiPetitions/userPetitions";

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmitGoogle = () => {
    // if(user === false)
    dispatch(StartGoogleAuth);
    // .then(res=>navigate("/home"))
  };

  return (
    <button className="register-google" onClick={handleSubmitGoogle}>
      Iniciar Sesion con Google
    </button>
  );
};

export default Register;
