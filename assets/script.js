var pageContentEl = document.querySelector("#page-content");
var questionText = document.querySelector("#main-text");
var introP = document.querySelector("#encouragement");
var timer = document.querySelector("#timer");
var time = 5;
var points = 0;
var correctAnswer = document.querySelector("#correct");

var questions = [
  "Commonly used data types do not include: ",
  "The condition of an if / else statement is enclosed with ______.",
  "Arrays in JavaScript can be used to store ______.",
  "String values must be enclosed within ______ when being assigned to variables",
  "A very useful tool used during development and debugging for printing content to the debugger is: ",
];

var answers1 = ["strings", "booleans", "alerts", "number"];
var answers2 = ["quotes", "curly brackets", "paraenthesis", "square brackets"];
var answers3 = [
  "numbers and strings",
  "other arrays",
  "booleans",
  "all of the above",
];
var answers4 = ["commas", "curly brackets", "quotes", "paraenthesis"];
var answers5 = ["JavaScript", "terminal/bash", "for loops", "console.log"];
var answers = [answers1, answers2, answers3, answers4, answers5];

var startQuiz = function (event) {
  console.log(event.target.className);
  if ((event.target.className = "starts")) {
    // remove p and start button
    introP.parentNode.removeChild(introP);
    event.target.parentNode.removeChild(event.target);

    // change h1 to 1st question
    // add 4 buttons for answers
    question2(event);

    // start timer countdown
    setInterval(() => {
      countdown();
    }, 1000);
  } else if ((event.target.className = ".answer")) {
    console.log("damn");
  }
};

var nextSet = function (question, answer) {
  for (i = 0; i < question.length; i++) {
    //   answer[i].className += "answers";
    nextQuestion(question[i]);
    nextAnswers(answer[i]);
  }
};

var nextQuestion = function (array) {
  questionText.textContent = array;
};

var nextAnswers = function (array) {
  for (i = 0; i < array.length; i++) {
    var btn = document.createElement("button");
    btn.textContent = array[i];
    btn.id = i;
    btn.className = "answer";
    pageContentEl.appendChild(btn);
  }
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

var question2 = function (event) {
    if (event.target.id = 0) {
        nextQuestion(question[1]);
        nextAnswers(answer[1]);
    }
}

pageContentEl.addEventListener("click", startQuiz);
pageContentEl.addEventListener("click", question2);
