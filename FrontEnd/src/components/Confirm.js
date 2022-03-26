import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        name,
        id,
        profile,
        course,
        semester,
        experience,
        occupation,
        city,
        bio,
      },
    } = this.props;

    // const express = require("express");
    // const app = express();
    // const PORT = 3000;
    // app.listen(PORT, () =>
    //   console.log("listening at http://localhost:${PORT}")
    // );

    // app.use(express.static("public"));

    // const fs = require("fs");

    // const saveData = (values) => {
    //   const jsonData = JSON.stringify(values);
    //   fs.writeFile("student.json", jsonData);
    // };

    //saveData(values);

    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="Name" secondary={name} />
              </ListItem>
              <ListItem>
                <ListItemText primary="ID" secondary={id} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Profile" secondary={profile} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Course" secondary={course} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Semester/year" secondary={semester} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Experience" secondary={experience} />
                <ListItemText primary="Summary" secondary={bio} />
              </ListItem>
            </List>
            <br />

            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>

            <Button color="primary" variant="contained" onClick={this.continue}>
              Confirm & Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
