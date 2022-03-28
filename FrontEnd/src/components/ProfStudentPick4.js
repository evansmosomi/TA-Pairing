import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class ProfStudentPick4 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Enter Course Details" />

            <h2>Winter 2023 Courses</h2>

            <TextField
              placeholder="First course"
              label="Enter your first course name"
              onChange={handleChange("course4")}
              defaultValue={values.course4}
              margin="normal"
              fullWidth
            />
            <br></br>
            <h4>List down your top 3 student choices</h4>
            <TextField
              placeholder="#1"
              label="1st Student Choice"
              onChange={handleChange("student10")}
              defaultValue={values.student10}
              margin="normal"
              fullWidth
            />

            <TextField
              placeholder="#2"
              label="2nd Student Choice"
              onChange={handleChange("student11")}
              defaultValue={values.student11}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="#3"
              label="3rd Student Choice"
              onChange={handleChange("student12")}
              defaultValue={values.student12}
              margin="normal"
              fullWidth
            />

            <br />

            <br />

            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>

            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}
