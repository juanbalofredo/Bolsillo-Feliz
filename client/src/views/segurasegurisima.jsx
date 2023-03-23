import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../redux/apiPetitions/userPetitions";

const SeguraSeguirisima = () => {
  const statePersist = useSelector((state) => state.bolsilloPersist);
  const navigate = useNavigate();

  useEffect(() => {
    updateUser("3", statePersist.id, "2").then((e) => navigate("/home"));
  });

  return( <>
  cargando, espere
  </>);
};

export default SeguraSeguirisima;
