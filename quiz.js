//...........................................Buttons..................................................................
document.addEventListener("DOMContentLoaded", function () {
  const startbutton = document.getElementById("start_button");

  const nextQuestionButton = document.getElementById("next-ques-button");
  const ans = document.getElementById("answer-btn");

  const startForm = document.getElementById("StartForm");
  const quizForm = document.getElementById("QuizForm");
  const endForm = document.getElementById("EndForm");
  
  startbutton.addEventListener("click", function (e) {
    e.preventDefault();
    startForm.classList.add("displayNoneForm");
   // startForm.style.display = "none";
   // quizForm.classList.add("displayNone");
    quizForm.classList.add("displayShowForm");
    quizForm.classList.replace("displayNoneForm","displayShowForm");

   // quizForm.style.display = "block";
   // endForm.style.display = "none";
    endForm.classList.add("displayNoneForm");
    endForm.classList.replace("displayShowForm","displayNoneForm");
   //endForm.classList.add("displayNone");
  });
  nextQuestionButton.addEventListener("click", function (e) {
    e.preventDefault();
  });

  ans.addEventListener("click", function (e) {
    e.preventDefault();
  });
});
//..................................................................................................................
const Questions = [
  {id:1,
    question: "Q1:Which keyword is used to declare variables in JavaScript?",
    answers: [
      { text: "Var", correct: false, id:11 },
      { text: "Let", correct: false, id:12 },
      { text: "Const", correct: false, id:13 },
      { text: "All of the above", correct: true, id:14 },
    ],
  },
  {id:2,
    question: "Q2:What does the DOM stand for in JavaScript?",
    answers: [
      { text: "Document Object Model", correct: true, id:15 },
      { text: "Data Object Mode", correct: false, id:16 },
      { text: "Document Order Module", correct: false, id:17 },
      { text: "Dynamic Output Mechanism", correct: false, id:18 },
    ],
  },
  {id:3,
    question: "Q3:What is the purpose of the typeof operator in JavaScript?",
    answers: [
      { text: "To check if a variable is defined", correct: false, id:19},
      { text: "To determine the type of a variable", correct: true, id:20 },
      { text: "To compare two variables", correct: false, id:21 },
      { text: "To assign a value to a variable", correct: false, id:22 },
    ],
  },
  {id:4,
    question:
      "Q4:Which of the following is not a valid way to comment in JavaScript?",
    answers: [
      { text: "// This is a comment", correct: false, id:23 },
      { text: "/* This is a comment */", correct: false, id:24 },
      { text: "..This is a comment..", correct: true, id:25 },
      { text: "/ This is a multiline comment */", correct: false, id:26 },
    ],
  },
  {id:5,
    question: "Q5:What does the === operator in JavaScript do?",
    answers: [
      { text: "Assigns a value to a variable", correct: false, id:27 },
      {
        text: "Compares values for equality without type coercion",
        correct: false, id:28
      },
      {
        text: "Compares values for equality with type coercion",
        correct: true, id:29
      },
      { text: "Checks if a variable is undefined or null", correct: false, id:30 },
    ],
  },
];
const ques = document.getElementById("questions");
const ans = document.getElementById("answer-btn");
const next = document.getElementById("next-ques-button");

const quizForm = document.getElementById("QuizForm");
const endForm = document.getElementById("EndForm");

let questionIdToFind=1;
let answerIdToFind;                         
let score = 0;
let count;

let foundQuestion = Questions.find(question => question.id === questionIdToFind);

function gotoNext() {
    questionIdToFind++;
    answerIdToFind+4;
 // currentQuestionIndex++;
  if (isCorrect) {
    score++;
    console.log(score);
  }
  if (questionIdToFind <= Questions.length) {
 // if (currentQuestionIndex < Questions.length) {
    foundQuestion = Questions.find(question => question.id === questionIdToFind);
    showQuestion();
  } else {
    endForm.classList.add("displayShow");
    endForm.classList.replace("displayNoneForm","displayShowForm");
  //  endForm.style.display = "block";
   quizForm.classList.add("displayNoneForm");
   quizForm.classList.replace("displayShowForm","displayNoneForm");

  //  quizForm.style.display = "none";
    const showScore = document.getElementById("showScore");
    showScore.textContent = `Obtained Marks: ${score}`;
  }
}

function showQuestion() {
  //  console.log(answerIdToFind)
  ans.innerHTML = "";
  count = false;
  if (count == false) {
   // next.style.display = "none";
   next.classList.add("displayNone");
   next.classList.replace("displayShow","displayNone");
  }
  let currentQuestion = foundQuestion;
//   let currentQuestion = Questions[currentQuestionIndex];
  ques.innerHTML = currentQuestion.question;

 // currentQuestion.answers.forEach((foundAnswer) => {
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
     button.innerHTML = answer.text;
   // button.innerHTML = foundAnswer.text;
    button.classList.add("btn");
    button.id = answer.id +"";                                          
    ans.appendChild(button);
  });
}
let selectedButton;
let isCorrect;
function selectAnswer() {
  const allButtons = document.querySelectorAll("#answer-btn button");
  allButtons.forEach((button) => {
    button.classList.remove("selected");
  });

  selectedButton = event.target;
  selectedButton.classList.add("selected");
  //isCorrect = foundQuestion.answers.find(
 // isCorrect = Questions[currentQuestionIndex].answers.find(
   // (answer) => answer.text === selectedButton.innerHTML                      
   // (answer) => answer.id=== selectedButton.id                        
    //(foundAnswer) => foundAnswer.text === selectedButton.innerHTML
 // ).correct;

 isCorrect = foundQuestion.answers.find((answer) => {
    return answer.id+"" === selectedButton.id; 
    }  ).correct;
    console.log(selectedButton.id);
  count = true;
  if (count == true) {
   // next.style.display = "inline";
  next.classList.add("displayShow");
  next.classList.replace("displayNone","displayShow");
  
  }
}