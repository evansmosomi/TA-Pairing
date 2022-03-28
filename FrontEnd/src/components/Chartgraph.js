import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Line } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

function Chartgraph() {
  const [initialState, setInitialState] = useState([]);
  useEffect(() => {
    fetch("/api/").then((res) => {
      if (res.ok) {
        return (
          <div className="chart">
            <Pie
              data={{
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                  {
                    label: "# of Votes",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
              height={0.04}
              width={0.06}
              options={{
                maintainAspectRatio: false,

                legend: {
                  labels: {
                    fontSize: 25,
                  },
                },
              }}
            />
          </div>
        );
      }
    });
  }, []);
}

export default Chartgraph;

// <div className="chart">
//   CHART
//   {initialState.length > 0 && initialState.map((e) => <li>{e}</li>)}
//   <Pie
//     data={{
//       labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//       datasets: [
//         {
//           label: "# of Votes",
//           data: [12, 19, 3, 5, 2, 3],
//           backgroundColor: [
//             "rgba(255, 99, 132, 0.2)",
//             "rgba(54, 162, 235, 0.2)",
//             "rgba(255, 206, 86, 0.2)",
//             "rgba(75, 192, 192, 0.2)",
//             "rgba(153, 102, 255, 0.2)",
//             "rgba(255, 159, 64, 0.2)",
//           ],
//           borderColor: [
//             "rgba(255, 99, 132, 1)",
//             "rgba(54, 162, 235, 1)",
//             "rgba(255, 206, 86, 1)",
//             "rgba(75, 192, 192, 1)",
//             "rgba(153, 102, 255, 1)",
//             "rgba(255, 159, 64, 1)",
//           ],
//           borderWidth: 1,
//         },
//       ],
//     }}
//     height={0.04}
//     width={0.06}
//     options={{
//       maintainAspectRatio: false,

//       legend: {
//         labels: {
//           fontSize: 25,
//         },
//       },
//     }}
//   />
// </div>

// const Chartgraph = () => {
//   const [initialState, setInitialState] = useState([]);
//   const [chartData, setChartData] = useState({});

//   const chart = () => {
//     let empSal = [];
//     let empAge = [];
//     axios
//       .get("http://dummy.restapiexample.com/api/v1/employees")
//       .then((res) => {
//         console.log(res);
//         for (const dataObj of res.data.data) {
//           empSal.push(parseInt(dataObj.employee_salary));
//           empAge.push(parseInt(dataObj.employee_age));
//         }
//         setChartData({
//           labels: empAge,
//           datasets: [
//             {
//               label: "level of thiccness",
//               data: empSal,
//               backgroundColor: ["rgba(75, 192, 192, 0.6)"],
//               borderWidth: 4,
//             },
//           ],
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     console.log(empSal, empAge);
//   };

//   useEffect(() => {
//     chart();
//   }, []);
//   return (
//     <div className="App">
//       <h1>Dankmemes</h1>
//       <div>
//         {/* {initialState.length > 0 && initialState.map((e) => <li>{e}</li>)} */}
//         <Line
//           data={chartData}
//           options={{
//             responsive: true,
//             title: { text: "THICCNESS SCALE", display: true },
//             scales: {
//               yAxes: [
//                 {
//                   ticks: {
//                     autoSkip: true,
//                     maxTicksLimit: 10,
//                     beginAtZero: true,
//                   },
//                   gridLines: {
//                     display: false,
//                   },
//                 },
//               ],
//               xAxes: [
//                 {
//                   gridLines: {
//                     display: false,
//                   },
//                 },
//               ],
//             },
//           }}
//         />
//       </div>
//     </div>
