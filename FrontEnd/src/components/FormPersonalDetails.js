import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class FormPersonalDetails extends Component {
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

            <TextField
              placeholder="Course"
              label="Select your first course choice"
              onChange={handleChange("course")}
              defaultValue={values.course}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Second choice"
              label="Select your second course choice"
              onChange={handleChange("course2")}
              defaultValue={values.semester}
              margin="normal"
              fullWidth
            />

            <TextField
              placeholder="Third choice"
              label="Select your third course choice"
              onChange={handleChange("course3")}
              defaultValue={values.semester}
              margin="normal"
              fullWidth
            />
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
              label="Are you in the same program of study as the course you selected? (Bachelor's/ Master's/ PhD)"
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
            <br />

            <TextField
              placeholder="Summary Bio"
              label="Indicate in under 200 words, why you believe you are a perfect candidate to be a TA (prior experience, coursework etc.)?"
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

export default FormPersonalDetails;
