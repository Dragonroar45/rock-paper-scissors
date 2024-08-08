function getComputerChoice(){
    let numComputerChoice = Math.floor(Math.random() * (3-1+1)) + 1; // 1 implies rock, 2 implies scissor, 3 implies paper
    if (numComputerChoice === 1){
        return "rock";
    } else if (numComputerChoice === 2){
        return "scissor";
    } else {
        return "paper";
    }
}

function getHumanChoice(){
    userChoice = prompt("Please enter Rock, Paper or Scissors:", "");
    return userChoice;
}