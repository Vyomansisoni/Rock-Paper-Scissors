let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
  //rock , paper ,sessiors
};

const DrawGame = () => {
  msg.innerText = "Game Draw . play try Again!"
  msg.style.backgroundColor = "orange";
};

const showWinner = (userWin,userchoice , compchoice) => {
  if (userWin) {
    userscore ++ ;
    userScore.innerText = userscore;
    msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "Green";
  } else {
    compscore ++ ;
    compScore.innerText = compscore;
    msg.innerText = `You Lose ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "Red";
  }
};

const playgame = (userchoice) => {
//   console.log("user Choice =", userchoice);
  //generate computer choice
  const compchoice = genCompChoice();
//   console.log("comp Choice = ", compchoice);

  if (userchoice === compchoice) {
    DrawGame();
  } else {
    let userWin = true;
    if (userchoice === "rock") {
      //comp choice paper ya fir scisisor
      userWin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userWin = compchoice === "scissors" ? false : true;
    } else {
      userWin = compchoice === "rock" ? false : true;
    }
    showWinner(userWin,userchoice,compchoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
