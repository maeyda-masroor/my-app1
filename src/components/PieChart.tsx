// components/PieChart.tsx
import { FC } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import styles from './PieChart.module.css';
// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: FC = () => {
  const data: ChartData<'pie'> = {
    labels: ['NUTRITION PROGRAM','EDUCATION PROGRAM'],
    datasets: [
      {
        label: '# of PROGRAM',
        data: [12, 88.5],
        backgroundColor: [
          '#FF0000',
          '#ff7400',
        ],
        borderColor: [
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return <div className='w-[400px] h-[400px]'>
  <Pie data={data} options={options} />
  </div>;
};

export default PieChart;
