let getComputerChoice = function(){
    let min = 1;
    let max = 3;

    let ranInt  = Math.floor(Math.random() * (max - min + 1) + min);

    if(ranInt === 1){
        console.log("Rock");
    }else if(ranInt === 2){
        console.log("Paper");
    }else if (ranInt === 3){
        console.log("Scissors");
    }
}

getComputerChoice();