import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

const MyChartDonut = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let myChart = null;

    const createChart = () => {
      const ctx = chartRef.current.getContext('2d');
      myChart = new Chart(ctx, {
        type: 'doughnut',
         data: {
                   labels: ['Rojo', 'Azul', 'Amarillo'],
                   datasets: [
                     {
                       label: '# de votos',
                       data: [12, 19, 3],
                     }
                   ],
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