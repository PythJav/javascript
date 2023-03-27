function getComputerChoice(){
    let values = ["Rock","Scissors","Paper"];
    let index = values[Math.floor(Math.random()*values.length)];
    return index;
}
const playerSelection = "Rock";
const computerSelection= getComputerChoice();
console.log(computerSelection);
playRound(playerSelection,computerSelection);
function playRound(p,c){
    let lowerP = p.toLowerCase();
    let lowerC = c.toLowerCase();

    // console.log(lowerP);

    // console.log(lowerP);
    if (lowerP == lowerC){
        console.log("Draw")   
        }
    else if (lowerP == "rock"){
        if (lowerC == "paper"){
            console.log("You Lose");
        }
        else if (lowerC =="scissors"){
            console.log("You win");
        }

    }
    



    }


