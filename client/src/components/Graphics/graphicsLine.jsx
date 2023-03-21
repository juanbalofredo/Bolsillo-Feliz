import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
import { usersLine } from "./functionsGraphics";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const MyChart = () => {

  const chartRef = useRef(null);
  const fecha = new Date();
  const [users, setUser] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/user/`)
      .then((e) => setUser(e.data))
      .catch((err) => {
        return err;
      });
    const fechar =  fecha.getFullYear() +"-0"+  (fecha.getMonth() +1)+ "-" + fecha.getDate();
    const fechar1 = fecha.getFullYear() +"-0"+  (fecha.getMonth() +1)+ "-" + (fecha.getDate()-1);
    const fechar2 = fecha.getFullYear() +"-0"+  (fecha.getMonth() +1)+ "-" + (fecha.getDate()-2);
    const fechar3 = fecha.getFullYear() +"-0"+  (fecha.getMonth() +1)+ "-" + (fecha.getDate()-3);
    const fechar4 = fecha.getFullYear() +"-0"+  (fecha.getMonth() +1)+ "-" + (fecha.getDate()-4);
    const fechar5 = fecha.getFullYear() +"-0"+  (fecha.getMonth() +1)+ "-" + (fecha.getDate()-5);
    const usuar = users?.filter((a) => a.createdAt.substr(0,10) === fechar);
    const usuar1 = users?.filter((a) => a.createdAt.substr(0,10) === fechar1);
    const usuar2 = users?.filter((a) => a.createdAt.substr(0,10) === fechar2);
    const usuar3 = users?.filter((a) => a.createdAt.substr(0,10) === fechar3);
    const usuar4 = users?.filter((a) => a.createdAt.substr(0,10) === fechar4);
    const usuar5 = users?.filter((a) => a.createdAt.substr(0,10) === fechar5);

    console.log(fechar1)
    console.log(usuar)

    let fechaDeUsers = usersLine();
    let myChart = null;

    const createChart = () => {
      const ctx = chartRef.current.getContext("2d");
      //console.log(ctx)
      myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [fechar5.slice(5), fechar4.slice(5), fechar3.slice(5), fechar2.slice(5), fechar1.slice(5), fechar.slice(5)],
          datasets: [
            {
              label: "Creacion usuarios",
              data: [usuar5.length,usuar4.length,usuar3.length,usuar2.length,usuar1.length,usuar.length],
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
          height:100,
          width:700
      }
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

export default MyChart;

// import React, { useRef, useEffect } from 'react';
// import { Chart } from 'chart.js';

// const MyChart = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     let myChart = null;

//     const createChart = () => {
//       const ctx = chartRef.current.getContext('2d');
//       myChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//           labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
//           datasets: [
//             {
//               label: 'Ventas',
//               data: [100, 200, 300, 400, 500, 600],
//               backgroundColor: 'rgba(255, 99, 132, 0.2)',
//               borderColor: 'rgba(255, 99, 132, 1)',
//               borderWidth: 1,
//             },
//           ],
//         },
//       });
//     };

//     if (chartRef.current) {
//       if (myChart) {
//         myChart.destroy(); // Destruye el gráfico anterior si existe
//       }

//       createChart(); // Crea un nuevo gráfico
//     }

//     return () => {
//       if (myChart) {
//         myChart.destroy(); // Destruye el gráfico al salir del componente
//       }
//     };
//   }, []);

//   return <canvas ref={chartRef} />;
// };

// export default MyChart;
