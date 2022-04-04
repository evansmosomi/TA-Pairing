import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "../index.css";
import { Outlet, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="m" fullHeight="m">
            <Link to="/report">
              <p color="black">Are you an admin?</p>
            </Link>
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
            >
              <Link to="/labform">Lab Instructor</Link>
            </Button>
            <br></br>
            <Button
              variant="contained"
              label="What is your profile at this school?"
              id="professor"
              margin="normal"
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
