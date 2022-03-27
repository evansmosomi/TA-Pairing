const { Spreadsheet } = require("../data");

exports.hello = (req, res) => {
  res.json(Spreadsheet.ComputeAlgorithmOnFile("./Capstone.xlsx"));
};
