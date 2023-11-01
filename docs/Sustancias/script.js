const ctx = document.getElementById("myChart").getContext("2d");

const data = {
  labels: [
    "12 a 19 años",
    "20 a 29 años",
    "30 a 39 años",
    "40 a 49 años",
    "50 a 59 años",
    "60 a 70 años",
  ],
  datasets: [
    {
      label: "Alcohol",
      data: [16.3, 36.6, 28.8, 21.8, 10.9, 7.6],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
    {
      label: "Tabaco",
      data: [4.7, 13.5, 11.8, 11.7, 0.6, 0.1],
      backgroundColor: "rgba(153, 102, 255, 0.5)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth: 1,
    },
    {
      label: "Marihuana",
      data: [1.5, 8, 2.8, 0.5, 0, 0],
      backgroundColor: "rgba(255, 206, 86, 0.5)",
      borderColor: "rgba(255, 206, 86, 1)",
      borderWidth: 1,
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  },
};

const myChart = new Chart(ctx, config);
const ctx2 = document.getElementById("myChart2").getContext("2d");

const data2 = {
  labels: ["1990", "1995", "2000", "2006", "2010", "2015"],
  datasets: [
    {
      label: "Alcohol",
      data: [39.3, 40.3, 39, 36, 24.2, 41.6],
      borderColor: "rgba(75, 192, 192, 1)",
      fill: false,
    },
    {
      label: "Tabaco",
      data: [19.3, 18.3, 17.2, 16.4, 15.1, 14],
      borderColor: "rgba(255, 159, 64, 1)",
      fill: false,
    },
    {
      label: "Marihuana",
      data: [0.5, 0.3, 1.3, 1, 2.6, 4.8],
      borderColor: "rgba(255, 206, 86, 1)",
      fill: false,
    },
  ],
};

const config2 = {
  type: "line",
  data: data2,
  options: {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  },
};

const myChart2 = new Chart(ctx2, config2);

const ctx3 = document.getElementById("myChart3").getContext("2d");

const data3 = {
  labels: [
    "Alcohol",
    "Marihuana",
    "Éxtasis",
    "Tabaco",
    "Cocaína",
    "Ketamina",
    "Crack",
  ],
  datasets: [
    {
      label: "Porcentaje",
      data: [16, 15.2, 8.7, 4.6, 4.2, 3.3, 2.6, 2.5],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const config3 = {
  type: "bar",
  data: data3,
  options: {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        max: 20,
      },
    },
  },
};

const myChart3 = new Chart(ctx3, config3);
