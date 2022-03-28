import React, { Component } from "react";
import StudentDetails from "./StudentDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import ProfessorDetails from "./ProfessorDetails";
import ProfessorCourseSelections from "./ProfessorCourseSelections";
import RoleSelector from "./RoleSelector";

export class StudentForm extends Component {
  state = {
    step: 1,
    name: "",
    id: "",
    courses: "",
    prerequisites: "",
    semester: "",
    experience: "",
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
      occupation,
      city,
      bio,
    };

    switch (step) {
      case 1:
        return (
          <RoleSelector
            //profiles
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <StudentDetails
            // <ProfessorDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          // <ProfessorCourseDetails
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 5:
        return <Success />;
      default:
        console.log("Capstone TA Assignment");
    }
  }
}

export default StudentForm;
