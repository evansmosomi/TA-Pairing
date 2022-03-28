import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Chartgraph from "./components/Chartgraph";
import StudentForm from "./components/StudentForm";
import RoleSelector from "./components/RoleSelector";
import ProfessorForm from "./components/ProfessorForm";

import Report from "./components/Report";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RoleSelector />} />
            <Route path="studentform" element={<StudentForm />} />
            <Route path="labform" element={<StudentForm />} />
            <Route path="professorform" element={<ProfessorForm />} />
            <Route path="report" element={<Report />} />
            <Route path="visual" element={<Chartgraph />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
