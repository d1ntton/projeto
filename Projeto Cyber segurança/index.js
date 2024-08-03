// Seleciona elementos do DOM
const $startGameButton = document.querySelector(".start-quiz");
const $nextQuestionButton = document.querySelector(".next-question");
const $questionsContainer = document.querySelector(".questions-container");
const $questionText = document.querySelector(".question");
const $answersContainer = document.querySelector(".answers-container");
const $loginButton = document.querySelector(".login");
const $loginForm = document.getElementById("login-form");
const $loginContainer = document.querySelector(".login-container");
const $rulesContainer = document.querySelector(".rules-container");
const $timer = document.getElementById("timer");
const $timerContainer = document.querySelector(".timer");

// Variáveis globais
let currentQuestionIndex = 0;
let totalCorrect = 0;
let loggedIn = false;
let username = "";
let timer;

// Função de login
$loginForm.addEventListener("submit", login);

function login(event) {
  event.preventDefault();
  const inputUsername = $loginForm.username.value.trim();
  const password = $loginForm.password.value.trim();
  
  if (inputUsername!== "" && password!== "") {
    fetch('login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `username=${inputUsername}&password=${password}`,
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        loggedIn = true;
        username = inputUsername;
        $loginForm.reset();
        $loginContainer.classList.add("hide");
        $rulesContainer.classList.remove("hide");
      } else {
        alert(data.error);
      }
    });
  } else {
    alert("Por favor, preencha todos os campos para fazer login.");
  }
}

// Função de começar o quiz
$startGameButton.addEventListener("click", startGame);

function startGame() {
  if (!loggedIn) return;
  $rulesContainer.classList.add("hide");
  $questionsContainer.classList.remove("hide");
  startTimer();
  displayNextQuestion();
}

// Função de iniciar o timer
function startTimer() {
  let timeLeft = 15;
  $timerContainer.classList.remove("hide");
  $timer.textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    $timer.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      selectAnswerAutomatically();
    }
  }, 1000);
}

// Função de exibir próxima pergunta
$nextQuestionButton.addEventListener("click", displayNextQuestion);

function displayNextQuestion() {
  resetState();
  
  if (currentQuestionIndex === questions.length) {
    return finishGame();
  }

  const currentQuestion = questions[currentQuestionIndex];
  $questionText.textContent = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const newAnswerButton = document.createElement("button");
    newAnswerButton.classList.add("button", "answer");
    newAnswerButton.textContent = answer.text;
    if (answer.correct) {
      newAnswerButton.dataset.correct = answer.correct;
    }
    $answersContainer.appendChild(newAnswerButton);

    newAnswerButton.addEventListener("click", selectAnswer);
  });

  clearInterval(timer);
  startTimer();
}

// Função de resetar estado
function resetState() {
  while ($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild);
  }

  document.body.removeAttribute("class");
  $nextQuestionButton.classList.add("hide");
}

// Função de selecionar resposta
function selectAnswer(event) {
  const answerClicked = event.target;

  if (answerClicked.dataset.correct) {
    totalCorrect++;
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true;
  });
  
  clearInterval(timer);
  $timerContainer.classList.add("hide");
  $nextQuestionButton.classList.remove("hide");
  currentQuestionIndex++;
}

// Função de selecionar resposta automaticamente
function selectAnswerAutomatically() {
  const selectedAnswer = document.querySelector('.answer.selected');
  if (!selectedAnswer) {
    document.body.classList.add("incorrect");
  } else {
    if (selectedAnswer.dataset.correct) {
      totalCorrect++;
    }
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true;
  });

  $timerContainer.classList.add("hide");
  $nextQuestionButton.classList.remove("hide");
  currentQuestionIndex++;
}

// Função de finalizar o quiz
function finishGame() {
  fetch('save_score.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `username=${username}&score=${totalCorrect}`,
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      $questionsContainer.innerHTML = `
        <p class="final-message">
          Parabéns por completar o quiz, ${username}!<br>
          Agora é só aguardar o resultado.<br>
          Estou torcendo por você!
        </p>`;
    } else {
      alert("Erro ao salvar a pontuação: " + data.error);
    }
  });
}
