import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

export default class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();

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
        course1,
        course2,
        course3,
        course4,
        course5,
        course6,
        experience1,
        experience2,
        experience3,
        experience4,
        experience5,
        experience6,
        prerequisites1,
        prerequisites2,
        prerequisites3,
        prerequisites4,
        prerequisites5,
        prerequisites6,
        pass1,
        pass2,
        pass3,
        pass4,
        pass5,
        pass6,
        email,
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
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="First Course" secondary={course1} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Taught this course before"
                  secondary={experience1}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Taken this course before"
                  secondary={prerequisites1}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Passed this course" secondary={pass1} />
              </ListItem>

              <ListItem>
                <ListItemText primary="Second Course" secondary={course2} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Taught this course before"
                  secondary={experience2}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Taken this course before"
                  secondary={prerequisites2}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Passed this course" secondary={pass2} />
              </ListItem>

              <ListItem>
                <ListItemText primary="Third Course" secondary={course3} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Taught this course before"
                  secondary={experience3}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Taken this course before"
                  secondary={prerequisites3}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Passed this course" secondary={pass3} />
              </ListItem>

              <ListItem>
                <ListItemText primary="Fourth Course" secondary={course4} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Taught this course before"
                  secondary={experience4}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Taken this course before"
                  secondary={prerequisites4}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Passed this course" secondary={pass4} />
              </ListItem>

              <ListItem>
                <ListItemText primary="Fifth Course" secondary={course5} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Taught this course before"
                  secondary={experience5}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Taken this course before"
                  secondary={prerequisites5}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Passed this course" secondary={pass5} />
              </ListItem>

              <ListItem>
                <ListItemText primary="Sixth Course" secondary={course6} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Taught this course before"
                  secondary={experience6}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Taken this course before"
                  secondary={prerequisites6}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Passed this course" secondary={pass6} />
              </ListItem>

              <ListItem>
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
