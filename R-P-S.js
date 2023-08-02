function getComputerChoice(){
    let min = 1;
    let max = 3;

    let ranInt  = Math.floor(Math.random() * (max - min + 1) + min);

    if(ranInt === 1){
        return "rock";
    }else if(ranInt === 2){
        return "paper";
    }else if (ranInt === 3){
        return "scissors";
    }
}

// All the ways that the player can win and lose 
//              win
// Player - rock / comp - scissors
// player - paper / comp - rock
// player - scissors / comp - paper
//              lose
// player - rock / comp - paper
// player - paper / comp - scissors
// player - scissors / comp - rock 

function playRound(player, computer) {

    let playerSelection = player.toLowerCase();
    let computerSelection = computer.toLowerCase();

    if(playerSelection == "rock"){
        if(computerSelection == "scissors"){
            return "You win! Rock beats Scissor"
        }else if(computerSelection == "paper"){
            return "You lose! Paper beats Rock"
        }else{
            return "Draw"
        }
    }
    if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            return "You win! Paper beats Rock"
        }else if(computerSelection == "scissors"){
            return "You lose! Scissor beats Paper"
        }else{
            return "Draw"
        }
    }
    if(playerSelection == "scissors"){
        if(computerSelection == "paper"){
            return "You win! Scissor beats Paper"
        }else if(computerSelection == "rock"){
            return "You lose! Rock beats Scissor"
        }else{
            return "Draw"
        }
    }
}


const playerSelection = "PapER";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));