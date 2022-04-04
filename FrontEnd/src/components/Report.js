import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default class Report extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tadata: [] };
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI() {
    fetch("/api/")
      .then((response) => {
        return response.json();
      })
      .then((json_data) => {
        console.log(json_data);
        this.setState({ taData: json_data.result });
      });
  }

  render() {
    return (
      <div className="chart">
        REPORT
        {this.state.taData &&
          this.state.taData.map((ta) => (
            <div key={ta.Paired + ta.Unpaired}>
              <div>{ta.Paired}</div>
            </div>
          ))}
      </div>
    );
  }
}
