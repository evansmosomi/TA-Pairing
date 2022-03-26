
const { expect, assert } = require('chai');

const { Choices } = require('../Choices');
const { Course } = require('../Course');
const { Weights } = require("../Weights");


describe('Name Test', () => {
  var Choice; 
    beforeEach(function(){
        Choice = new Choices("Evans","Mosomi",1,1,1,1,1,1);;
    });

    it('Teaching Assistant name should be equal', function(done){
        expect(Choice.getFullName()).to.be.equal("Evans Mosomi");
        done();
    }); 

});


describe('Weight Test', () => {
    var Choice; 
      beforeEach(function(){
          Choice = new Choices("Evans","Mosomi",1,1,1,1,1,1);;
      });
  
      it('Weights should be equal to 33', function(done){
          expect(Choice.getWeight()).to.be.equal(33);
          done();
      }); 
  
  });


  describe('Sort Test', () => {
    var Test_Course, Best_Choice; 
      beforeEach(function(){
        Test_Course = new Course("Machine Learning", 1)

        
        var Choice = new Choices("Naweed","Adil",2,1,1,1,1,1);
        var Choice2 = new Choices("test","test",1,1,1,1,2,1);
        Best_Choice = new Choices("Evans","Mosomi",1,1,1,1,1,1);

        Test_Course.addChoice(Choice);
        Test_Course.addChoice(Choice2);
        Test_Course.addChoice(Best_Choice);

        Test_Course.sortCandidates();
      });
  
      it('Candidate should be Best_Choice', function(done){
          expect(Test_Course.getCandidate()).to.be.equal(Best_Choice);
          done();
      }); 
  
  });

  describe('Best Choice Test For Professor vs Teaching Assistant vs Lab instructor', () => {
    var Test_Course, Best_Choice; 
      beforeEach(function(){
        Test_Course = new Course("Machine Learning", 1)

        
        var Choice = new Choices("Naweed","Adil",2,1,2,1,1,1);
        var Choice2 = new Choices("test","test",2,2,1,1,1,1);
        Best_Choice =  new Choices("Evans","Mosomi",1,2,2,1,1,1);

        Test_Course.addChoice(Choice);
        Test_Course.addChoice(Choice2);
        Test_Course.addChoice(Best_Choice);
        
        Test_Course.sortCandidates();
      });
  
      it('Candidate should have professor choice as 1', function(done){
          expect(Test_Course.getCandidate()).to.be.equal(Best_Choice);
          done();
      }); 
  
  });

  describe('Best Choice Test For TA teached vs passing the class and major matching', () => {
    var Test_Course, Best_Choice; 
      beforeEach(function(){
        Test_Course = new Course("Machine Learning", 1)

        
        var Choice = new Choices("Evans","Mosomi",1,1,1,1,1,2);
        var Choice2 = new Choices("test","test",1,1,1,2,1,1);
        Best_Choice = new Choices("Naweed","Adil",1,1,1,1,2,1);

        Test_Course.addChoice(Choice);
        Test_Course.addChoice(Choice2);
        Test_Course.addChoice(Best_Choice);

        Test_Course.sortCandidates();
      });
  
      it('Candidate should have taught the class in previous years', function(done){
          expect(Test_Course.getCandidate()).to.be.equal(Best_Choice);
          done();
      }); 
  
  });