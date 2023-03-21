import Navbar from "../Navbar/NavBar"
import Footer from "../../views/footer/Footer"
import React from "react"
import "./Detaillaoding.css"

const DetailLoading = () => {

    return(<>
<Navbar />
<div className="Detail-container">

    <button className="laoding-detail-but">Volver</button>


  <div className="det-prod">
            <div className="imageContainer-laoding">
              
           </div>
  </div>
</div>
<Footer/>
</>
)}

export default DetailLoading