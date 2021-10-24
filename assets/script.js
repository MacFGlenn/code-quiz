var pageContentEl = document.querySelector("#page-content");
var questionText = document.querySelector("#main-text");
var introP = document.querySelector("#encouragement");

var questions = [questions1["duh"],
  "question1",
  "question2",
  "question3",
  "question4",
  "question5",
];
var answers = ["answer1", "answer2", "answer3", "answer4"];

var timer = 0;

var startQuiz = function (event) {
  // change h1 to 1st question
  questionText.innerHTML = questions[0];

  // remove p and start button
  introP.parentNode.removeChild(introP);
  event.target.parentNode.removeChild(event.target);

  // add 4 buttons for answers
  for (i = 0; i < answers.length; i++) {
    var btn = document.createElement("button");
    btn.innerHTML = answers[i];
    document.body.appendChild(btn);
  }

  // start timer
  timer = 100;

  console.log("ohwee it's working");
};

pageContentEl.addEventListener("click", startQuiz);
