import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategoryParams } from "../../redux/apiPetitions/productsPetitions";
import "./navBar.css";
import { resPage } from "../../redux/slice/globalSlice";

export default function SearchBar() {
  const { brand, category } = useSelector((state) => state.bolsilloFeliz);
  const dispatch = useDispatch();
  const [pname, setPname] = useState("");
  const navigate = useNavigate();
  const valor = "ASC";

  const handleInputModel = (e) => {
    e.preventDefault();
    dispatch(resPage());
    setPname(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (window.location.href !== "https://bolsillofeliz.vercel.app/home") {
      getCategoryParams(dispatch, brand, category, valor, pname)
        .then(navigate("/home"))
        .then(() => getCategoryParams(dispatch, brand, category, valor, pname));
    }
    getCategoryParams(dispatch, brand, category, valor, pname);
  }
  return (
    <>
      <div className="searchbar-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="busca">
            <input
              className="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => handleInputModel(e)}
            />
            <div type="submit">
              <i className="" id="formbusca"></i>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
