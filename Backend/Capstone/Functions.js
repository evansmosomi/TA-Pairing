
  const Functions = {}

  Functions.CompareChoices = function(Choice1, Choice2){
      return(Choice1.FullName == Choice2.FullName)
  }

  module.exports.Functions = Functions;