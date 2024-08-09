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

function getHumanChoice(){
    userChoice = prompt("Please enter Rock, Paper or Scissors:", "");
    return userChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    let round = 0;
    while (round <= 5){
        round += 1;
        if (humanChoice === computerChoice){
            console.log("It's a tie");
            humanScore += 1;
            computerScore += 1;
            console.log(`Current scores: Computer - ${computerScore} Human - ${humanScore}`);
            humanChoice = getHumanChoice();
            computerChoice = getComputerChoice();
            continue;
        } else if (humanChoice === "rock" && computerChoice === "paper"){
            console.log("You lose. Paper beats Rock");
            computerScore += 1;
            console.log(`Current scores: Computer - ${computerScore} Human - ${humanScore}`);
            humanChoice = getHumanChoice();
            computerChoice = getComputerChoice();
            continue;
        } else if (humanChoice === "rock" && computerChoice === "scissors"){
            console.log("You win. Rock beats Scissors");
            humanScore += 1;
            console.log(`Current scores: Computer - ${computerScore} Human - ${humanScore}`);
            humanChoice = getHumanChoice();
            computerChoice = getComputerChoice();
            continue;
        } else if (humanChoice === "scissors" && computerChoice === "rock"){
            console.log("You lose")
        }
    }
}
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
let humanScore = 0;
let computerScore = 0;