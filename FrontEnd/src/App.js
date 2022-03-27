import React, { Component } from "react";
import "./index.css";
import Chart from "./components/Chart";
//import StudentForm from "./components/StudentForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
    };
  }

  componentWillMount() {
    // this.getchartData(); // this should be this.getChartData();
    this.getChartData();
  }

  

  render() {
    return (
      <div>
        <Chart />
      </div>
    ); 
  }
}

export default App;