import React, { useEffect, useState } from "react"
import axios from "axios";
import { useParams } from "react-router-dom";


const Market = ()=> {

    const { id } = useParams();
    const [market, setMarket] = useState(null);
    useEffect(() => {
        axios
          .get(`http://localhost:3001/market/id/${id}`)
          .then((e) => setMarket(e.data))
          .catch((err) => {
            return err;
          });
      }, [id]);

  console.log(market)
return (<>
 
       <h1>{market.name}</h1>

</>)

}

export default Market