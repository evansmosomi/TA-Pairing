import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Line } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

export default class Report extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: [] };
  }

  componentDidMount() {
    this.UserList();
  }

  UserList() {
    fetch("/api/").then(({ results }) => this.setState({ data: results }));
  }

  render() {
    return (
      <div className="chart">
        REPORT
        <Pie
          data={{
            labels: this.state.data.labels,
            datasets: [
              {
                label: "Number of Students in Course",
                data: this.state.data.data, // data: this.state.data.data
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                ],
              },
            ],
          }}
        />
      </div>
    );
  }
}
