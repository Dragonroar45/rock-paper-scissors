function getComputerChoice(){
    let numComputerChoice = Math.floor(Math.random() * (3-1+1)) + 1; // 1 implies rock, 2 implies scissor, 3 implies paper
    if (numComputerChoice === 1){
        return "rock";
    } else if (numComputerChoice === 2){
        return "scissors";
    } else {
        return "paper";
    }
}

function randomiser(){
    let randomNum = Math.floor(Math.random() * (3-1+1)) + 1;
    return randomNum;

}

let computerChoice = getComputerChoice();

let rock = document.querySelector(".choice-img1");

let parentDivPara = document.querySelector(".choices-powerups");

let humanVisualScore = document.querySelector(".human-score");

let computerVisualScore = document.querySelector(".computer-score");

let paragraph = document.querySelector(".result");

let paper = document.querySelector(".choice-img2");

let clairovyance = document.querySelector(".power-img1");

let scissors = document.querySelector(".choice-img3");

let round = 0;

let roundDisplay = document.querySelector(".round-no");

rock.addEventListener("click", () => {
    playRound("rock");
});

paper.addEventListener("click", () => {
    playRound("paper");
});

scissors.addEventListener("click", () => {
    playRound("scissors");
});



function playRound(humanChoice){
    if (humanChoice === computerChoice){
        paragraph.textContent = "Its a tie!";
        round += 1;
        roundDisplay.textContent = `${round}`;
        humanVisualScore.textContent = humanScore;
        computerVisualScore.textContent = computerScore;
    } else if ((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper")){
        paragraph.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore += 1;
        round += 1;
        roundDisplay.textContent = `${round}`;
        humanVisualScore.textContent = humanScore;
        computerVisualScore.textContent = computerScore;
    } else{
        paragraph.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore += 1;
        round += 1;
        roundDisplay.textContent = `${round}`;
        humanVisualScore.textContent = humanScore;
        computerVisualScore.textContent = computerScore;
    }
    computerChoice = getComputerChoice();
}

clairovyance.addEventListener("click", () => {
    if (computerChoice === "rock"){
        paragraph.textContent = "In the face of weight, everything folds";
    } else if (computerChoice === "paper"){
        paragraph.textContent = "A gentle touch veils its true strength"
    } else{
        paragraph.textContent = "Precision cuts through the fog of choices";
    }
});


let humanChoice;
let humanScore = 0;
let computerScore = 0;