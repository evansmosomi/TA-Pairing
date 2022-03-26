
class Course{
  PotentialCandidates = [];
    constructor(Name, Min_Amount){

        this.Name = Name;
        this.Min_Amount = Min_Amount;
        
    }
 
    getCandidate(List){
      var PotentialCandidates = this.PotentialCandidates
      if (List[PotentialCandidates[0].FullName] != true){
        this.PotentialCandidates[0].Assigned = true;
        return this.PotentialCandidates[0];
      }
      else{
        var i = 1;
        while((List[PotentialCandidates[i].FullName] != true)){
          this.PotentialCandidates[i].Assigned = true;
        return this.PotentialCandidates[i];
        }
      }
    }

    addChoice(Choice)
    {
      this.PotentialCandidates.push(Choice)
    }
    sortCandidates(){
      
      this.PotentialCandidates.sort(function(a, b) {
        
        return a.getWeight() - b.getWeight();
    });
    }
    unpairedCandidates(){
      var Unpaired_Candidates = [];
      for (var i = 0 ;i < this.PotentialCandidates.length;i++){
        var Candidate = this.PotentialCandidates[i]
      
        if (Candidate.Assigned == false){
          Unpaired_Candidates.push(Candidate)
        }
      }
      return Unpaired_Candidates;
    }
    getPotentialCandidates(){
      return this.PotentialCandidates;
    }
  };
  
  module.exports.Course = Course;