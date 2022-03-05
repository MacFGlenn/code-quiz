var pageContentEl = document.querySelector("#page-content");
var questionContentEl = document.querySelector("#question");
var questionText = document.querySelector("#question-text");
var introP = document.querySelector("#encouragement");
var timer = document.querySelector("#timer");
var time = 600;
var pointsEl = document.querySelector("#points");
var points = 0;
var answerSet = 0;
var correctAnswerEl = document.querySelector(".correct");
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

var startQuiz = function () {
  // remove intro text
  pageContentEl.remove();

  // add first question and answers
  questionText.textContent = questions[0];
  answer1.textContent = answersList1[0];
  answer2.textContent = answersList1[1];
  answer3.textContent = answersList1[2];
  answer4.textContent = answersList1[3];

  answer3.classList.add("correct");

  answerSet = 1;
  console.log(answerSet);

  // start timer countdown
  setInterval(() => {
    countdown();
  }, 1000);
};

var nextSet = function (event) {
  switch (answerSet) {
    case (answerSet = 1):
      questionText.textContent = questions[1];
      answer1.textContent = answersList2[0];
      answer2.textContent = answersList2[1];
      answer3.textContent = answersList2[2];
      answer4.textContent = answersList2[3];
      answerSet = 2;
      correctAnswer();
      console.log(points);
      break;
    case (answerSet = 2):
      questionText.textContent = questions[2];
      answer1.textContent = answersList3[0];
      answer2.textContent = answersList3[1];
      answer3.textContent = answersList3[2];
      answer4.textContent = answersList3[3];
      answerSet = 3;
      console.log(answerSet);
      break;
    case (answerSet = 3):
      questionText.textContent = questions[3];
      answer1.textContent = answersList4[0];
      answer2.textContent = answersList4[1];
      answer3.textContent = answersList4[2];
      answer4.textContent = answersList4[3];
      answerSet = 4;
      break;
    case (answerSet = 4):
      questionText.textContent = questions[4];
      answer1.textContent = answersList5[0];
      answer2.textContent = answersList5[1];
      answer3.textContent = answersList5[2];
      answer4.textContent = answersList5[3];
      answerSet = 5;
      break;
    case (answerSet = 5):
      // show score
      questionText.textContent = "";
  }
};

var countdown = function () {
  timer.textContent = "Time: " + time;
  pointsEl.textContent = "Points: " + points;
  if (time > 0) {
    time--;
  } else if (time <= 0) {
    clearInterval();
    // game over function
  }
};

var correctAnswer = function (event) {
  if ((event.target.classList = "correct")) {
    console.log("correct");
    points += 1;
  }
};

pageContentEl.addEventListener("click", startQuiz);
questionContentEl.addEventListener("click", nextSet);
questionContentEl.addEventListener("click", correctAnswer);
