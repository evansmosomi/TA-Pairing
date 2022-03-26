// import React from "react";
// import Report from "./components/Report";
// import { StudentForm } from "./components/StudentForm";
// import "./index.css";

// // const express = require("express");
// // const app = express();
// // const PORT = 3000;
// // app.listen(PORT, () => console.log("listening at http://localhost:${PORT}"));

// // app.use(express.static("public"));

// // const fs = require("fs");

// // const saveData = (values) => {
// //   const jsonData = JSON.stringify(values);
// //   fs.writeFile("student.json", jsonData);
// // };

// // //saveData(values);
// const App = () => {
//   return (
//     <div className="App">
//       <Report />
//     </div>
//   );
// };

// export default App;
//-------------------------------------------------------
// import React, { Component } from "react";
// import "./index.css";
// import Chart from "./components/Chart";
// //import StudentForm from "./components/StudentForm";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       chartData: {},
//     };
//   }

//   componentWillMount() {
//     // this.getchartData(); // this should be this.getChartData();
//     this.getChartData();
//   }

//   getChartData() {
//     // Ajax calls here
//     this.setState({
//       chartData: {
//         labels: [
//           "Boston",
//           "Worcester",
//           "Springfield",
//           "Lowell",
//           "Cambridge",
//           "New Bedford",
//         ],
//         datasets: [
//           {
//             label: "Population",
//             data: [617594, 181045, 153060, 106519, 105162, 95072],
//             backgroundColor: [
//               "rgba(255, 99, 132, 0.6)",
//               "rgba(54, 162, 235, 0.6)",
//               "rgba(255, 206, 86, 0.6)",
//               "rgba(75, 192, 192, 0.6)",
//               "rgba(153, 102, 255, 0.6)",
//               "rgba(255, 159, 64, 0.6)",
//               "rgba(255, 99, 132, 0.6)",
//             ],
//           },
//         ],
//       },
//     });
//   }

//     return (

//         <Chart />

//     );

//   // render() {
//   //   return (
//   //     <>
//   //       <div className="App">
//   //         <Chart
//   //           chartData={this.state.chartData}
//   //           location="Massachusetts"
//   //           legendPosition="bottom"
//   //         />
//   //       </div>
//   //     </>
//   //   );
//   // }
// }

// export default App;

//---------------------------------

import React from "react";

import BarChart, { Chart } from "./components/Chart.js";
import ProfessorCourseSelections from "./components/ProfessorCourseSelections.js";
import StudentForm from "./components/StudentForm.js";
import "./index.css";
import RoleSelector from "./components/RoleSelector";

const App = () => {
  return (
    <div>
      <Chart />
    </div>
  );
};

export default App;
