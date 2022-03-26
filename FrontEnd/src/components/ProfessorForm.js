import React, { Component } from "react";
import StudentDetails from "./StudentDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class StudentForm extends Component {
  state = {
    step: 1,
    name: "",
    id: "",
    courses: "",
    prerequisites: "",
    semester: "",
    experience: "",
    profile: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      name,
      id,
      profile,
      course,
      email,
      prerequisites,
      semester,
      occupation,
      experience,
      city,
      bio,
    } = this.state;
    const values = {
      name,
      id,
      course,
      prerequisites,
      semester,
      email,
      experience,
      profile,
      occupation,
      city,
      bio,
    };

    switch (step) {
      case 1:
        return (
          <StudentDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
        console.log("Capstone TA Assignment");
    }
  }
}

export default StudentForm;
