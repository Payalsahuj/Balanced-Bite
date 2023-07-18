import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Sales Data Line Chart',
    },
  },
  maintainAspectRatio: false, 
};

const labels = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1,6,2,8,4,3,4],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [4,4,2,6,9,6,9],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const Linechart=()=> {
  return <div  style={{height:"450px",padding:'10px 10px',backgroundColor:'white'}}><Line options={options} data={data} /></div>
}
