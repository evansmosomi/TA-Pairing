const { Weights } = require("./Weights");

class Choices{
    constructor(First_Name,Last_Name,Prof_Choice,TA_Choice,LabInstruct_Choice,TA_Taught,Taken_Course,TA_Major_Matches){

        this.First_Name = First_Name;
        this.Last_Name = Last_Name;
        this.FullName = First_Name +" "+ Last_Name;
        this.Prof_Choice = Prof_Choice;
        this.LabInstruct_Choice = LabInstruct_Choice;
        this.TA_Choice = TA_Choice;

        this.Taken_Course = Taken_Course;
        this.TA_Taught = TA_Taught;
        this.TA_Major_Matches = TA_Major_Matches;
        this.Assigned = false;
        this.Weight = 0;
        
        if (Prof_Choice == 0){
          Prof_Choice = 10;
        }
        if (LabInstruct_Choice==0){
          LabInstruct_Choice =10;
        }
        if (TA_Choice==0){
          TA_Choice =10;
        }
        

        

        this.Weight = Prof_Choice*Weights.Professor + LabInstruct_Choice*Weights.LabInstructer+ TA_Choice*Weights.TA +Taken_Course*Weights.Taken +  TA_Taught*Weights.Taught + TA_Major_Matches*Weights.Major;
    }
    getFullName(){
      return this.First_Name + " " + this.Last_Name
    }
    getWeight(){
      return this.Weight
    }

  
  };

  
  
  module.exports.Choices = Choices;