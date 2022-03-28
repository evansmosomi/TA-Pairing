import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../index.css";
import StudentForm from "./StudentForm";
import ProfessorForm from "./ProfessorForm";
import { Outlet, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="m" fullHeight="m">
            <center>
              <h1>Welcome to Student Pair</h1>
            </center>
            <AppBar title="Enter User Details" />
            <br></br>
            <Button
              color="primary"
              variant="contained"
              label="What is your profile at this school?"
              id="student"
              margin="normal"
              fullWidth
            >
              <Link to="/studentform">Student</Link>
            </Button>
            <br></br>
            <Button
              color="secondary"
              variant="contained"
              label="What is your profile at this school?"
              id="lab instructor"
              margin="normal"
              fullWidth
            >
              <Link to="/studentform">Lab Instructor</Link>
            </Button>
            <br></br>
            <Button
              color="primary"
              variant="contained"
              label="What is your profile at this school?"
              id="professor"
              margin="normal"
              fullWidth
            >
              <Link to="/professorform">Professor</Link>
            </Button>
            <br />
          </Dialog>
        </>
        <Outlet />
      </MuiThemeProvider>
    );
  }
}

export default App;
