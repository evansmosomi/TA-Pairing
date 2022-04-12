import React, { Component } from "react";
import Success from "./Success";
import ProfessorDetails from "./ProfessorDetails";
import ProfStudentPick1 from "./ProfStudentPick1";
import ProfStudentPick2 from "./ProfStudentPick2";
import ProfStudentPick3 from "./ProfStudentPick3";
import ProfStudentPick4 from "./ProfStudentPick4";
import ProfStudentPick6 from "./ProfStudentPick6";
import ProfStudentPick5 from "./ProfStudentPick5";
import ProfConfirm from "./ProfConfirm";

export default class ProfessorForm extends Component {
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
    student1: "",
    student2: "",
    student3: "",
    student4: "",
    student5: "",
    student6: "",
    student7: "",
    student8: "",
    student9: "",
    student10: "",
    student11: "",
    student12: "",
    student13: "",
    student14: "",
    student15: "",
    student16: "",
    student17: "",
    student18: "",
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
    } = this.state;
    const values = {
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
    };

    switch (step) {
      case 1:
        return (
          <ProfessorDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <ProfStudentPick1
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <ProfStudentPick2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <ProfStudentPick3
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <ProfStudentPick4
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <ProfStudentPick5
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 7:
        return (
          <ProfStudentPick6
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 8:
        return (
          <ProfConfirm
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
