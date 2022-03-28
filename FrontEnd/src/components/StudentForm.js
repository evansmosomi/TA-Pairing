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
    email: "",
    bio: "",

    course1: "",
    course2: "",
    course3: "",
    course4: "",
    course5: "",
    course6: "",
    experience1: "",
    experience2: "",
    experience3: "",
    experience4: "",
    experience5: "",
    experience6: "",
    prerequisites1: "",
    prerequisites2: "",
    prerequisites3: "",
    prerequisites4: "",
    prerequisites5: "",
    prerequisites6: "",
    pass1: "",
    pass2: "",
    pass3: "",
    pass4: "",
    pass5: "",
    pass6: "",
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
    } = this.state;
    const values = {
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
