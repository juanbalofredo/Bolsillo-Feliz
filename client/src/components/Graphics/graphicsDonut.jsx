import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

import { useState } from "react";

import axios from "axios";

const MyChartDonut = () => {
  const chartRef = useRef(null);
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/user/`)
      .then((e) => setUser(e.data))
      .catch((err) => {
        return err;
      });
    const usu = users?.filter((a) => a.type_account === "1");
    const merca = users?.filter((a) => a.type_account === "2");
    const adm = users?.filter((a) => a.type_account === "3");

    let myChart = null;
    const createChart = () => {
      const ctx = chartRef.current.getContext("2d");
      myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Usuario", "Mercader", "Admin"],
          datasets: [
            {
              label: "cantidad",
              data: [usu?.length, merca?.length, adm?.length],
            },
          ],
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
          height: 100,
          width: 200,
        },
      });
    };

    if (chartRef.current) {
      if (myChart) {
        myChart.destroy(); // Destruye el gráfico anterior si existe
      }

      createChart(); // Crea un nuevo gráfico
    }

    return () => {
      if (myChart) {
        myChart.destroy(); // Destruye el gráfico al salir del componente
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default MyChartDonut;
