import React from "react";
import "../index.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { Doughnut } from "react-chartjs-2";
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
    const data = {
      labels: ["Paired", "Unpaired"],
      datasets: [
        {
          label: "# of Students who applied ",
          data: [2, 28],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
          ],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      maintainAspectRatio: false,

      legend: {
        labels: {
          fontSize: 25,
        },
      },
    };

    return (
      <Dialog open fullWidth maxWidth="md">
        <AppBar title="Report" />
        <b>TA ASSIGNMENT REPORT</b>
        <br></br>
        <br></br>
        This report gives a conclusive summary of the students paired up to each
        individual course assigned by an instructor
        <br></br>
        <br></br>
        Total no. of Courses (per semester) available for matching: 2<br></br>
        <br></br>
        Total no. of Paired Students: 2<br></br>
        Total no. of Paired Students: 28
        <br></br>
        <div className="chart">
          <Doughnut data={data} />
          <br></br>
        </div>
        <br></br>
        <br></br>
        <b>Courses</b>
        <br></br>
        <br></br>
        <b>Paired</b>
        1. Machine Learning: <br></br>John Jessica<br></br>
        2. Mobile App Development: <br></br>Godrick Molly<br></br>
        <br></br>
        <br></br>
        <br></br>
        <b> Unpaired</b>
        Betty Chu<br></br>Betty Jen<br></br>Cara Mina<br></br>Caro Janet
        <br></br>Chu Timothy<br></br> Crane Tim<br></br>Felwinter Matt
        <br></br>Godfrey Samatha<br></br> Jake Crane<br></br> Jake Felwinter
        <br></br> Janet Lisa<br></br> Jen Caro<br></br>Jessica Jake<br></br>Jin
        Liu: false Lisa Pedro<br></br> Liu Godrick<br></br>Margit Jin<br></br>
        Matt Nama
        <br></br>Michael Betty<br></br>Mina Bridgette<br></br>
        Molly Vans<br></br>Nama Michael<br></br>Pedro Margit<br></br>Samatha
        John<br></br>Samatha Summers<br></br>Summers Sam<br></br>Timothy Cara
        <br></br>Vans Godfrey<br></br>
        {this.state.taData &&
          this.state.taData.map((ta) => (
            <div key={ta.Paired + ta.Unpaired}>
              <div>{ta.Paired.fullName}</div>
            </div>
          ))}
      </Dialog>
    );
  }
}
