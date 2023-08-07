//Random number - 1 to 3
// 1 = rock 
// 2 = paper
// 3 = scissors

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

//-----------------Score----------------------
//make 2 boolean variable ---> playerWon and playerLost
//set both to false at the start of the function
//set playerWin to true if "You Win" || set playerLose to true if "You Lose"

let playerWin = 0;
let playerLose = 0;

function playRound(player, computer) {

    let playerSelection = player;
    let computerSelection = computer.toLowerCase();

    if(playerSelection == "rock"){
        if(computerSelection == "scissors"){
            playerWin = playerWin + 1;
            console.log("You win! Rock beats Scissor");
        }else if(computerSelection == "paper"){
            playerLose = playerLose + 1;
            console.log("You lose! Paper beats Rock");
        }else{
            console.log("Draw");
        }
    }
    if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            playerWin = playerWin + 1;
            console.log("You win! Paper beats Rock");
        }else if(computerSelection == "scissors"){
            playerLose = playerLose + 1;
            console.log("You lose! Scissor beats Paper");
        }else{
            console.log("Draw");
        }
    }
    if(playerSelection == "scissors"){
        if(computerSelection == "paper"){
            playerWin = playerWin + 1;
            console.log("You win! Scissor beats Paper");
        }else if(computerSelection == "rock"){
            playerLose = playerLose + 1;
            console.log("You lose! Rock beats Scissor");
        }else{
            console.log("Draw");
        }
    }
}

//Five rounds - repeat playRound 5 times
//make a loop which contains:
// 1. prompt - get players's selection before each round
// 2. call getComputerChoice - get Computer's selection before each round
// 3. playRound:
//      if player wins add 1 to win variable (don't show the score)
//      if player loses add 1 to lose variable (don't show the score)
//      if draw then score stays same

//-----------------------end of loop-----------------------
// if win is greater than lose then player is the winner
// if win is less than lose then player is the loser


//--------------keeping track of wins ans losses------------------
//make 2 variable --> roundWon and roundLost
//set then equal to 0 at the start
//  inside of the for loop:
//      check if playerWon is true:
//          if True then add 1 to roundWon
//      check if playerLost is true:
//          if true then add 1 to roundLost

function game(playerSelection){
    playRound(playerSelection,getComputerChoice());
}
