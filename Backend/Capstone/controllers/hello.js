const { Spreadsheet } = require("../data");

exports.hello = (req, res) => {
  res.send(Spreadsheet.ComputeAlgorithmOnFile("./Capstone.xlsx"));
};
