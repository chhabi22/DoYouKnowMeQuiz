// DO YOU KNOW ME QUIZ
var readLineSync = require("readline-sync");
const chalk = require('chalk');
const log = console.log;

var userName = readLineSync.question("Hi, What's your name? ");
var score = 0;

//LOGS BEFORE THE QUIZ QUESTIONS
log(chalk.green.bold("---------------------------------------"));
log('Welcome ' + chalk.yellowBright.bold(userName) + ' to ' + chalk.bgBlueBright.bold("DO YOU KNOW Chhabi ?"));
log(chalk.green.bold("---------------------------------------"));


// RULES
log(chalk.bgCyan.bold("NOTE:"))
log(chalk.yellowBright("1. write answer in lower case."))
log(chalk.yellowBright("1. At the end, take a screenshot of your final score if it is higher than the highest score and send me."))
log("---------------------------------------")
log(chalk.bgBlack.inverse(" >>>> HERE IS THE QUIZ FOR YOU <<<<"))
log("---------------------------------------")

//HIGH SCORE DATA
var highscore = [{
  name: "chhabi",
  hscore: 3
}];
// Function for ques and ans
function play(question,answer){
  var userAnswer = readLineSync.question(question);

  if(userAnswer == answer){
    log(chalk.bgGreen.bold("Correct!!"));
    score = score + 1;
  }
  else{
    log(chalk.bgRed.bold("wrong"));
  }
  console.log("Your Score: " + score);
  console.log("-----------------------------")
}

// Array of question and answers
var questions = [
   {
     question: "What's my last name? ", 
     answer: "gupta"
   }, {
     question: "I am living in which Country? ",
     answer: "canada"
   },
   {
     question: "What's my birthday month? ",
     answer: "june"
   },
   {
     question: "What's my birth date? ",
     answer: "22"
   },
   {
     question: "Movies or Books? ",
     answer: "books"
   }
   ];

// Loop to play questions
   for(var i = 0; i < questions.length; i++){
     var CurrentQuestion = questions[i];
     play(CurrentQuestion.question, CurrentQuestion.answer);
     var finalScore = score
   }

   log(chalk.bgBlack("YOUR FINAL SCORE: ") + finalScore);
   log("Is your score higher than others? ");

   var currenths = highscore[0];
   if(finalScore > currenths.hscore){

   log(chalk.yellowBright.bold("yesss"));
  
   } else {
     log(chalk.yellowBright.bold("NOPE"));
   }
