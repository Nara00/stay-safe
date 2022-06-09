import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData }) {

  var dataClean = {
    labels: chartData.map((data)=>data.crime_type),
    datasets: [{
      label: `Crimenes por tipo`,
      data: chartData.map((data)=>data.count),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
    
  };

  var options = {
    resposive: true,
    maintainAspectRatio: false,

    pointRadius: 10,
    pointStyle: 'crossRot',
    tension:0.2,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }

  return <Line data={dataClean} options={options}/>;
}

export default LineChart;
