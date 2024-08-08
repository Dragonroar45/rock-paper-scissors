function getComputerChoice(){
    let numComputerChoice = Math.floor(Math.random() * (3-1+1)) + 1;
    if (numComputerChoice === 1){
        return "rock";
    } else if (numComputerChoice === 2){
        return "scissor";
    } else {
        return "paper";
    }
}