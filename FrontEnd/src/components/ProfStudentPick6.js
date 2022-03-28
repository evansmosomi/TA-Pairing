import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class ProfStudentPick6 extends Component {
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
              placeholder="Third course"
              label="Enter your third course name"
              onChange={handleChange("course6")}
              defaultValue={values.course6}
              margin="normal"
              fullWidth
            />
            <br></br>
            <h4>List down your top 3 student choices</h4>
            <TextField
              placeholder="#1"
              label="1st Student Choice"
              onChange={handleChange("student16")}
              defaultValue={values.student16}
              margin="normal"
              fullWidth
            />

            <TextField
              placeholder="#2"
              label="2nd Student Choice"
              onChange={handleChange("student17")}
              defaultValue={values.student17}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="#3"
              label="3rd Student Choice"
              onChange={handleChange("student18")}
              defaultValue={values.student18}
              margin="normal"
              fullWidth
            />

            <TextField
              placeholder="Notes"
              label="Special Requests"
              onChange={handleChange("bio")}
              defaultValue={values.bio}
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
