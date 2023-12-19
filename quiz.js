const startbutton = document.getElementById("start_button");
const nextQuestionButton = document.getElementById("next-ques-button");
const ans = document.getElementById("answer-btn");
const startForm = document.getElementById("StartForm");
const quizForm = document.getElementById("QuizForm");
const endForm = document.getElementById("EndForm");

startbutton.addEventListener("click", function (e) {
  e.preventDefault();
  startForm.classList.add("displayNoneForm");
  quizForm.classList.add("displayShowForm");
  quizForm.classList.replace("displayNoneForm", "displayShowForm");
  endForm.classList.add("displayNoneForm");
  endForm.classList.replace("displayShowForm", "displayNoneForm");
});

let index = 0;
let foundQuestion = Questions[0];
const ques = document.getElementById("questions");
const next = document.getElementById("next-ques-button");
let score = 0;
let count;
let selectedButton;
let isCorrect;

function gotoNext() {
  index++;
  if (isCorrect) {
    score++;
  }
  if (index < Questions.length) {
    foundQuestion = Questions[index];
    showQuestion();
  } else {
    endForm.classList.add("displayShow");
    endForm.classList.replace("displayNoneForm", "displayShowForm");
    quizForm.classList.add("displayNoneForm");
    quizForm.classList.replace("displayShowForm", "displayNoneForm");
    const showScore = document.getElementById("showScore");
    showScore.textContent = `Obtained Marks: ${score}`;
  }
}

function showQuestion() {
  ans.innerHTML = "";
  count = false;
  if (count == false) {
    next.classList.add("displayNone");
    next.classList.replace("displayShow", "displayNone");
  }
  let currentQuestion = foundQuestion;
  ques.innerHTML = currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.id = answer.id + "";
    ans.appendChild(button);
  });
}

function selectAnswer() {
  const allButtons = document.querySelectorAll("#answer-btn button");
  allButtons.forEach((button) => {
    button.classList.remove("selected");
  });

  selectedButton = event.target;
  selectedButton.classList.add("selected");
  isCorrect = foundQuestion.answers.find((answer) => {
    return answer.id + "" === selectedButton.id;
  }).correct;
  console.log(selectedButton.id);
  count = true;
  if (count == true) {
    next.classList.add("displayShow");
    next.classList.replace("displayNone", "displayShow");
  }
}
