import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class StudCoursePick6 extends Component {
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
              placeholder="Course"
              label="Select your third course choice"
              onChange={handleChange("course")}
              defaultValue={values.course}
              margin="normal"
              fullWidth
            />
            <br />

            <TextField
              placeholder="Previous experience"
              label="Have you instructed this course before as a TA?"
              onChange={handleChange("experience")}
              defaultValue={values.experience}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Prerequisites obtained"
              label="Are you in the same faculty/program of study as the course you selected? "
              onChange={handleChange("prerequisites")}
              defaultValue={values.prerequisites}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Previous experience"
              label="Have you passed this course (required)?"
              onChange={handleChange("experience2")}
              defaultValue={values.experience}
              margin="normal"
              fullWidth
            />

            <TextField
              placeholder="Summary Bio"
              label="In under 200 words, why do you believe you are a perfect candidate to be a TA?"
              onChange={handleChange("experience2")}
              defaultValue={values.bio}
              margin="normal"
              fullWidth
            />

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
