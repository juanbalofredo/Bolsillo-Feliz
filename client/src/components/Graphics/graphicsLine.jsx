import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
import { useSelector } from "react-redux";

const MyChart = () => {
  const state = useSelector((state) => state.bolsilloFeliz);
  const users = state.allUsers;
  const chartRef = useRef(null);  
  const fecha = new Date();

  useEffect(() => {

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
    const usuar5 = users?.filter((a) => a.createdAt.substr(0,10) === fechar5)




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
          responsive: true,
          maintainAspectRatio: true,
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
