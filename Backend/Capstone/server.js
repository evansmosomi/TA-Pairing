const express = require("express");
const path = require("path");
const { Choices } = require("./Choices");
const { Course } = require("./Course");
const { Spreadsheet } = require("./data");
const app = express();
var root = path.dirname(require.main.filename);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.htm"));
});

app.get("/api", async function (req, res) {
  res.json(await Spreadsheet.ComputeAlgorithmOnFile(root + "/Capstone.xlsx"));
});

app.listen(3000, function () {
  console.log("Listening on port 3000!");
});

//Weights for each input
const { Weights } = require("./Weights");

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
