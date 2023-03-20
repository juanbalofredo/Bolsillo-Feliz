import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChart = () => {

    const data = {
        labels: ['Rojo', 'Azul', 'Amarillo'],
        datasets: [
          {
            label: '# de votos',
            data: [12, 19, 3],
          }
        ],
      };

    return (
      <div>
        <Doughnut data={data} />
      </div>
    );
  };

  export default DonutChart;