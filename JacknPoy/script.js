const Btnplayer = document.querySelectorAll(".player");
const ScorePlayer = document.querySelector(".Player-Score");
const ScoreCom = document.querySelector(".Computer-Score");
const Switch = document.querySelector(".LightDark-Mode");
const body = document.body;
let ComputerChoice = ["Rock", "Paper", "Scissor"];
let PlayerScore = 0;
let ComputerScore = 0;
let Dark = false;

function UpdateScore() {
  ScoreCom.innerText = ComputerScore;
  ScorePlayer.innerText = PlayerScore;
}

function AttackPC(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    alert("Draw");
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissor") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissor" && computerChoice === "Paper")
  ) {
    alert("You Win");
    PlayerScore++;
    console.log("Computer Suck");
  } else {
    alert("Computer Wins");
    ComputerScore++;
    console.log("Player Suck");
  }
  UpdateScore();
}

Btnplayer.forEach((btn) => {
  btn.addEventListener("click", () => {
    let computer =
      ComputerChoice[Math.floor(Math.random() * ComputerChoice.length)];
    let player = btn.innerText;
    AttackPC(player, computer);
    AttackImg(player, computer);
    // i want the choice Array randomize its position indexes
    ComputerChoice.unshift(ComputerChoice.pop());
    // conversation
  });
});

function AttackImg(player, computer) {
  const PlayerAttack = document.querySelector(".AttackPlayer");
  const ComAttack = document.querySelector(".AttackComputer");
  const paper = `<i class="fa-solid fa-hand fa-rotate-10 fa-5x"></i>`;
  const rock = `<i class="fa-solid fa-hand-back-fist fa-rotate-10 fa-5x"></i>`;
  const scissor = `<i class="fa-solid fa-hand-scissors fa-rotate-90 fa-5x"></i>`;

  if (player === "Paper") {
    PlayerAttack.innerHTML = paper;
  } else if (player === "Rock") {
    PlayerAttack.innerHTML = rock;
  } else {
    PlayerAttack.innerHTML = scissor;
  }

  if (computer === "Paper") {
    ComAttack.innerHTML = paper;
  } else if (computer === "Rock") {
    ComAttack.innerHTML = rock;
  } else {
    ComAttack.innerHTML = scissor;
  }
}

Switch.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (Dark === true) {
    Switch.innerHTML = `<i class="fa-solid fa-toggle-on fa-3x"></i>`;
    Dark = false;
  } else {
    Switch.innerHTML = `<i class="fa-solid fa-toggle-off fa-3x" style="color:white"></i>`;
    Dark = true;
  }
});

window.addEventListener("keydown", function (event) {
  const key = event.key;
  const code = event.code.replace('Key','');
  console.log("Key:", key);
  console.log(code);
});
