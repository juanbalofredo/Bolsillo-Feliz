import React from 'react';
import { Line } from 'react-chartjs-2';

const MyChart = () => {

  const dataLine = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Ventas',
        data: [100, 200, 300, 400, 500, 600],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Line data={dataLine} />
    </div>
  );
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