const express = require("express");
const path = require("path");
const { Choices } = require("./Choices");
const { Course } = require("./Course");
const { Spreadsheet } = require("./data");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.htm"));
});

app.use("/api", require("./routes/hello"));

app.listen(3001, function () {
  console.log("Listening on port 3000!");
});

//Weights for each input
const { Weights } = require("./Weights");

/* var Test_Course = new Course("Machine Learning", 1)

        
var Choice = new Choices("Evans","Mosomi",1,1,1,1,1,1);
var Choice2 = new Choices("test","test",1,1,1,2,1,1);
var Best_Choice = new Choices("Naweed","Adil",1,1,1,1,1,2);

Test_Course.addChoice(Choice);
Test_Course.addChoice(Choice2);
Test_Course.addChoice(Best_Choice);
console.log(Choice)
console.log(Choice2)
console.log(Best_Choice)

Test_Course.sortCandidates();
console.log(Test_Course.PotentialCandidates)

console.log("--------------Best choice for this course is: ");
console.log(Test_Course.getCandidate())
 */
Spreadsheet.ComputeAlgorithmOnFile("./Capstone.xlsx");

//ComputeTable();

function ComputeTable() {
  var counter = 1;
  //Going through all possibilities and computing weights, this is mainly just for us to check the proof of concept
  for (var Prof_Choice = 1; Prof_Choice < 4; Prof_Choice++) {
    for (
      var LabInstruct_Choice = 1;
      LabInstruct_Choice < 4;
      LabInstruct_Choice++
    ) {
      for (var TA_Choice = 1; TA_Choice < 4; TA_Choice++) {
        for (var TA_Passed = 1; TA_Passed < 3; TA_Passed++) {
          for (var TA_Taught = 1; TA_Taught < 3; TA_Taught++) {
            for (
              var TA_Major_Matches = 1;
              TA_Major_Matches < 3;
              TA_Major_Matches++
            ) {
              var weight =
                Prof_Choice * Weights.Professor +
                LabInstruct_Choice * Weights.LabInstructer +
                TA_Choice * Weights.TA +
                TA_Passed * Weights.Passed +
                TA_Taught * Weights.Taught +
                TA_Major_Matches * Weights.Major;
              console.log(
                counter +
                  ". " +
                  Prof_Choice +
                  "" +
                  LabInstruct_Choice +
                  "" +
                  TA_Choice +
                  "" +
                  TA_Passed +
                  "" +
                  TA_Taught +
                  "" +
                  TA_Major_Matches +
                  " Weight: " +
                  weight
              );
              counter++;
            }
          }
        }
      }
    }
  }
}
