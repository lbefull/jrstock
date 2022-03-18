import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function AnnualProfit({ labels }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "시장 수익률",
        data: labels.map(
          () => Math.random() * 10 * (Math.random() < 0.5 ? -1 : 1)
        ),
        backgroundColor: "rgba(251, 191, 36, 1)",
      },
      {
        label: "수익률",
        data: labels.map(
          () => Math.random() * 10 * (Math.random() < 0.5 ? -1 : 1)
        ),
        backgroundColor: "rgba(14, 24, 95, 0.8)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
