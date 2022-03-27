const Excel = require("exceljs");
const XLSX = require("xlsx");
const { Choices } = require("./Choices");
const { Course } = require("./Course");
const { Functions } = require("./Functions");

var Spreadsheet = {};
var List_Of_Courses = [];
var Paired_Candidates = [];
var List_Of_Students = {};
Spreadsheet.ComputeAlgorithmOnFile = async function (filename) {
  const workbook2 = new Excel.Workbook();
  await workbook2.xlsx.readFile(filename);
  const workbook = XLSX.readFile(filename);

  var worksheet = workbook.Sheets["TA_Assignment_Sheet"];
  var Total_Courses = workbook.Workbook.Names.length;
  for (
    var Number_Of_Courses = 0;
    Number_Of_Courses < Total_Courses;
    Number_Of_Courses++
  ) {
    var Sheet_Course = workbook.Workbook.Names[Number_Of_Courses]; //mobile app dev

    const Course_Name = workbook2.worksheets[0]; //mobile app dev

    var range = XLSX.utils.decode_range(Sheet_Course.Ref);
    var worksheetRange = XLSX.utils.decode_range(worksheet["!ref"]);

    var Current_Course = new Course(Sheet_Course.Name, 1);

    for (var R = range.s.r + 1; R <= range.e.r; ++R) {
      var First_Name = Course_Name.getCell(
        XLSX.utils.encode_cell({ c: 3, r: R })
      ).value;
      var Last_Name = Course_Name.getCell(
        XLSX.utils.encode_cell({ c: 4, r: R })
      ).value;
      var Professor_Choice = Course_Name.getCell(
        XLSX.utils.encode_cell({ c: 5, r: R })
      ).value;
      var TA_Choice = Course_Name.getCell(
        XLSX.utils.encode_cell({ c: 6, r: R })
      ).value;
      var Lab_Instructor_Choice = Course_Name.getCell(
        XLSX.utils.encode_cell({ c: 7, r: R })
      ).value;
      var Taught_before = Course_Name.getCell(
        XLSX.utils.encode_cell({ c: 8, r: R })
      ).value;
      var Taken_Course = Course_Name.getCell(
        XLSX.utils.encode_cell({ c: 9, r: R })
      ).value;
      var TA_Major_Matches = Course_Name.getCell(
        XLSX.utils.encode_cell({ c: 10, r: R })
      ).value;

      var Choice = new Choices(
        First_Name,
        Last_Name,
        Professor_Choice,
        TA_Choice,
        Lab_Instructor_Choice,
        Taught_before,
        Taken_Course,
        TA_Major_Matches
      );

      if (List_Of_Students[Choice.FullName] == null)
        List_Of_Students[Choice.FullName] = false;

      Current_Course.addChoice(Choice);
    }
    Current_Course.sortCandidates();
    console.log(Current_Course.Name + " Best Choice:");
    var BestChoice = Current_Course.getCandidate(List_Of_Students);
    console.log(List_Of_Students);
    List_Of_Students[BestChoice.FullName] = true;
    console.log(BestChoice);
    Paired_Candidates.push(BestChoice);
    console.log("\n");
    List_Of_Courses.push(Current_Course);
  }
  console.log(Paired_Candidates);
  console.log("Unpaired Teaching Assistants: \n");
  var Unpaired = [];
  for (const Candidate of List_Of_Courses[0].getPotentialCandidates()) {
    var flag = false;
    for (const Candidate2 of Paired_Candidates) {
      if (Functions.CompareChoices(Candidate, Candidate2) == true) {
        flag = true;
        break;
      }
    }
    if (flag == false) {
      Unpaired.push(Candidate);
    }
  }

  console.log(Unpaired);

  console.log(Unpaired.length);
  console.log(Paired_Candidates.length);

  return Paired_Candidates.length, Unpaired.length;
};

module.exports.Spreadsheet = Spreadsheet;
