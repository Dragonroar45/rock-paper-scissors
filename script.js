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

let rock = document.querySelector(".choice-img1");

let parentDivPara = document.querySelector(".choices-powerups");

let humanVisualScore = document.querySelector(".human-score");

let computerVisualScore = document.querySelector(".computer-score");

let paragraph = document.querySelector(".result");

let paper = document.querySelector(".choice-img2");

let scissors = document.querySelector(".choice-img3");

rock.addEventListener("click", () => {
    humanChoice = "rock";
    let computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);
});

paper.addEventListener("click", () => {
    humanChoice = "paper";
    let computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);
});

scissors.addEventListener("click", () => {
    humanChoice = "scissors";
    let computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);
});


function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        paragraph.textContent = "Its a tie!";
        humanVisualScore.textContent = humanScore;
        computerVisualScore.textContent = computerScore;
    } 
}


let humanChoice;
let humanScore = 0;
let computerScore = 0;