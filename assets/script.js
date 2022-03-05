var quizContainer = document.getElementById("quiz");
var resulstsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
submitButton.style.visibility = "hidden";
var myQuestions = [
  {
    question: "Commonly used data types do not include: ",
    answers: {
      a: "strings",
      b: "booleans",
      c: "alerts",
      d: "number",
    },
    correctAnswer: "c",
  },
  {
    question:
      "The condition of an if / else statement is enclosed with ______.",
    answers: {
      a: "quotes",
      b: "curly brackets",
      c: "paraenthesis",
      d: "square brackets",
    },
    correctAnswer: "c",
  },
  {
    question: "Arrays in JavaScript can be used to store ______.",
    answers: {
      a: "numbers and strings",
      b: "other arrays",
      c: "booleans",
      d: "all of the above",
    },
    correctAnswer: "d",
  },
  {
    question:
      "String values must be enclosed within ______ when being assigned to variables.",
    answers: {
      a: "commas",
      b: "curly brackets",
      c: "quotes",
      d: "paraenthesis",
    },
    correctAnswer: "c",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: {
      a: "JavaScript",
      b: "terminal/bash",
      c: "for loops",
      d: "console.log",
    },
    correctAnswer: "d",
  },
];

var startButton = document.getElementById("start");
var timer = document.getElementById("timer");
var time = 60;

var countdown = function () {
  timer.textContent = "Time: " + time;
  if (time > 0) {
    time--;
  } else if (time <= 0) {
    clearInterval();
    // game over function
  }
};

var generateQuiz = function (
  questions,
  quizContainer,
  resulstsContainer,
  submitButton
) {
  var showQuestions = function (questions, quizContainer) {
    var output = [];
    var answers;

    for (i = 0; i < questions.length; i++) {
      answers = [];
      for (letter in questions[i].answers) {
        answers.push(
          "<label>" +
            '<input type="radio" name="question' +
            i +
            '" value="' +
            letter +
            '">' +
            letter +
            ": " +
            questions[i].answers[letter] +
            "</label>"
        );
      }

      output.push(
        '<div class="question">' +
          questions[i].question +
          "</div>" +
          '<div class="answers">' +
          answers.join("") +
          "</div>"
      );
    }

    quizContainer.innerHTML = output.join("");
  };

  var showResulsts = function (questions, quizContainer, resulstsContainer) {
    var answerContainers = quizContainer.querySelectorAll(".answers");

    var userAnswer = "";
    var numCorrect = 0;

    for (i = 0; i < questions.length; i++) {
      userAnswer = (
        answerContainers[i].querySelector(
          "input[name=question" + i + "]:checked"
        ) || {}
      ).value;

      if (userAnswer === questions[i].correctAnswer) {
        numCorrect++;

        answerContainers[i].style.color = "lightgreen';";
      } else {
        answerContainers[i].style.color = "red";
        time -= 5;
      }
    }

    resulstsContainer.innerHTML = numCorrect + " out of " + questions.length;
  };

  showQuestions(questions, quizContainer);

  submitButton.onclick = function () {
    showResulsts(questions, quizContainer, resulstsContainer);
  };
};

// generateQuiz(myQuestions, quizContainer, resulstsContainer, submitButton);
startButton.onclick = function () {
  startButton.style.visibility = "hidden";
  submitButton.style.visibility = "visible";
  setInterval(() => {
    countdown();
  }, 1000);
  generateQuiz(myQuestions, quizContainer, resulstsContainer, submitButton);
};
