var pageContentEl = document.querySelector("#page-content");
var questionText = document.querySelector("#question-text");
var introP = document.querySelector("#encouragement");
var timer = document.querySelector("#timer");
var time = 5;
var points = 0;
var correctAnswer = document.querySelector("#correct");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");

var questions = [
  "Commonly used data types do not include: ",
  "The condition of an if / else statement is enclosed with ______.",
  "Arrays in JavaScript can be used to store ______.",
  "String values must be enclosed within ______ when being assigned to variables",
  "A very useful tool used during development and debugging for printing content to the debugger is: ",
];

var answersList1 = ["strings", "booleans", "alerts", "number"];
var answersList2 = [
  "quotes",
  "curly brackets",
  "paraenthesis",
  "square brackets",
];
var answersList3 = [
  "numbers and strings",
  "other arrays",
  "booleans",
  "all of the above",
];
var answersList4 = ["commas", "curly brackets", "quotes", "paraenthesis"];
var answersList5 = ["JavaScript", "terminal/bash", "for loops", "console.log"];
// var answers = [answers1, answers2, answers3, answers4, answers5];

var startQuiz = function (event) {
  // remove intro text
  pageContentEl.remove();

  // add first question and answers
  questionText.textContent = questions[0];
  answer1.textContent = answersList1[0];

  // start timer countdown
  setInterval(() => {
    countdown();
  }, 1000);
};

var countdown = function () {
  timer.textContent = "Time: " + time;
  if (time > 0) {
    time--;
  } else if (time <= 0) {
    clearInterval();
    // game over function
  }
};

var correct = function (event) {
  console.log("things");
  // click on correct answer
  if (event.target) {
    console.log("better things");
    points += 25;
    nextSet(questions, answers);
  }
  // move to next questions set
};

pageContentEl.addEventListener("click", startQuiz);

console.log(questions[0]);
