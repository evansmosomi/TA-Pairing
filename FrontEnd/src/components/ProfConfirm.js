import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

export default class ProfConfirm extends Component {
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
        email,
        bio,
        course1,
        course2,
        course3,
        course4,
        course5,
        course6,
        student1,
        student2,
        student3,
        student4,
        student5,
        student6,
        student7,
        student8,
        student9,
        student10,
        student11,
        student12,
        student13,
        student14,
        student15,
        student16,
        student17,
        student18,
      },
    } = this.props;
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
                <ListItemText primary="First Fall Course" secondary={course1} />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary="1st Student Choice"
                  secondary={student1}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="2nd Student Choice"
                  secondary={student2}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="3rd Student Choice"
                  secondary={student3}
                />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary="Second Fall Course"
                  secondary={course2}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="1st Student Choice"
                  secondary={student4}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="2nd Student Choice"
                  secondary={student5}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="3rd Student Choice"
                  secondary={student6}
                />
              </ListItem>

              <ListItem>
                <ListItemText primary="Third Fall Course" secondary={course3} />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary="1st Student Choice"
                  secondary={student7}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="2nd Student Choice"
                  secondary={student8}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="3rd Student Choice"
                  secondary={student9}
                />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary="Fourth Fall Course"
                  secondary={course4}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="1st Student Choice"
                  secondary={student10}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="2nd Student Choice"
                  secondary={student11}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="3rd Student Choice"
                  secondary={student12}
                />
              </ListItem>

              <ListItem>
                <ListItemText primary="Fifth Fall Course" secondary={course5} />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary="1st Student Choice"
                  secondary={student13}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="2nd Student Choice"
                  secondary={student14}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="3rd Student Choice"
                  secondary={student15}
                />
              </ListItem>

              <ListItem>
                <ListItemText primary="Sixth Fall Course" secondary={course6} />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary="1st Student Choice"
                  secondary={student16}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="2nd Student Choice"
                  secondary={student17}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="3rd Student Choice"
                  secondary={student18}
                />
              </ListItem>

              <ListItem>
                <ListItemText primary="Special Requests" secondary={bio} />
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
