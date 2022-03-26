import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import { FormControlLabel } from "@material-ui/core";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormLabel from "@mui/material/FormLabel";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
export class ProfessorDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    // const [value, setValue] = React.useState("female");

    // const handleChange = (event) => {
    //   setValue(event.target.value);
    // };

    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <h1>StudentPair - Professor View</h1>
            <AppBar title="Enter User Details" />
            <TextField
              placeholder="Name"
              label="Enter your professor name"
              onChange={handleChange("name")}
              defaultValue={values.name}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="ID"
              label="Studet/Staff Banner ID"
              onChange={handleChange("id")}
              defaultValue={values.id}
              margin="normal"
              fullWidth
            />

            <br />
            {/* <FormLabel id="demo-controlled-radio-buttons-group">
              Gender
            </FormLabel> */}
            {/* <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup> */}
            <br />
            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default ProfessorDetails;
