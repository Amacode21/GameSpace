const Btnplayer = document.querySelectorAll(".player");
const ScorePlayer = document.querySelector(".Player-Score");
const ScoreCom = document.querySelector(".Computer-Score");
const Switch = document.querySelector(".LightDark-Mode");
const body = document.body;
const gameMode = document.querySelector(".gameMode");
const Menu = document.querySelector(".menu-btn");
const Option = document.querySelectorAll(".list-item");
const MainOption = document.querySelector(".Option");
let ComputerChoice = ["Rock", "Paper", "Scissor", "Rock", "Paper", "Scissor"];
let PlayerScore = 0;
let ComputerScore = 0;
let Dark = false;

Option.forEach((item) => {
  item.addEventListener("click", () => {
    const gameMode = document.querySelector(".gameMode");
    gameMode.innerText = item.innerText;
    MainOption.classList.remove("toggle-menu-btn");
  });
});

Menu.addEventListener("click", () =>
  MainOption.classList.toggle("toggle-menu-btn")
);

// Update the score
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
  } else {
    alert("Computer Wins");
    ComputerScore++;
  }
  UpdateScore();
}

// Impossible to Win hahaha
function GameModeGodLevel(player) {
  if (player === "Rock") {
    return "Paper";
  } else if (player === "Paper") {
    return "Scissor";
  } else {
    return "Rock";
  }
}

function GameModeHard(player) {
  const Com = Math.floor(Math.random() * 2);
  if (player === "Paper") {
    var c = ["Scissor", "Paper"];
    return c[Com];
  } else if (player === "Rock") {
    var c = ["Paper", "Rock"];
    return c[Com];
  } else {
    var c = ["Rock", "Scissor"];
    return c[Com];
  }
}

function GameStart(player, computer) {
  AttackPC(player, computer);
  AttackImg(player, computer);
  // i want the choice Array randomize its position indexes
  ComputerChoice.unshift(ComputerChoice.pop());
  // Interact();
  // conversation
}

Btnplayer.forEach((btn) => {
  btn.addEventListener("click", () => {
    var GameMode = gameMode.innerText;
    let computer =
      ComputerChoice[Math.floor(Math.random() * ComputerChoice.length)];
    let player = btn.innerText;
    Mode(GameMode, player, computer);
  });
});
function Mode(mode, player, computer) {
  if (mode === "God Level") {
    GameStart(player, GameModeGodLevel(player));
  } else if (mode === "Hard") {
    GameStart(player, GameModeHard(player));
  } else {
    GameStart(player, computer);
  }
}
function AttackImg(player, computer) {
  // rcs declaration
  const paper = `<i class="fa-solid fa-hand fa-rotate-10 fa-5x"></i>`;
  const rock = `<i class="fa-solid fa-hand-back-fist fa-rotate-10 fa-5x"></i>`;
  const scissor = `<i class="fa-solid fa-hand-scissors fa-rotate-90 fa-5x"></i>`;
  // Picture || icon change here!
  const PlayerAttack = (document.querySelector(".AttackPlayer").innerHTML =
    player === "Paper" ? paper : player === "Rock" ? rock : scissor);
  const ComAttack = (document.querySelector(".AttackComputer").innerHTML =
    computer === "Paper" ? paper : computer === "Rock" ? rock : scissor);
}

// Switch to darkmode to lightmode;
Switch.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  Btnplayer.forEach((item) => {
    item.classList.toggle("dark-mode-btn");
  });
  if (Dark === true) {
    Switch.innerHTML = `<i class="fa-solid fa-toggle-on fa-3x"></i>`;
    Dark = false;
  } else {
    Switch.innerHTML = `<i class="fa-solid fa-toggle-off fa-3x" style="color:white"></i>`;
    Dark = true;
  }
});

window.addEventListener("keydown", function (event) {
  var GameMode = gameMode.innerText;
  const key = event.key;
  const code = event.code.replace("Key", "").toLowerCase();
  let cAttack =
    ComputerChoice[Math.floor(Math.random() * ComputerChoice.length)];
  switch (code) {
    case "r":
      Mode(GameMode , "Rock", cAttack);
      break;
    case "p":
      Mode(GameMode , "Paper", cAttack);
      break;
    case "s":
      Mode(GameMode , "Scissor", cAttack);
      break;
    default:
      "";
  }
});
