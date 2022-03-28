import React, { Component } from "react";
import StudentDetails from "./StudentDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import StudCoursePick1 from "./StudCoursePick1";
import StudCoursePick6 from "./StudCoursePick6";
import StudCoursePick2 from "./StudCoursePick2";
import StudCoursePick3 from "./StudCoursePick3";
import StudCoursePick4 from "./StudCoursePick4";
import StudCoursePick5 from "./StudCoursePick5";

export default class StudentForm extends Component {
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
          <StudentDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <StudCoursePick1
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <StudCoursePick2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <StudCoursePick3
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <StudCoursePick4
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <StudCoursePick5
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 7:
        return (
          <StudCoursePick6
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 8:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 9:
        return <Success />;
      default:
        console.log("Capstone TA Assignment");
    }
  }
}
