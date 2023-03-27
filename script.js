function getComputerChoice(){
    let values = ["Rock","Scissors","Paper"];
    let index = values[Math.floor(Math.random()*values.length)];
    return index;
}
const playerSelection = prompt("Rock , Scissors or Paper")
const computerSelection= getComputerChoice();
let cWin= 0;
console.log(computerSelection);
playRound(playerSelection,computerSelection);
function playRound(p,c){
    let lowerP = p.toLowerCase();
    let lowerC = c.toLowerCase();

    // console.log(lowerP);

    // console.log(lowerP);
    if (lowerP == lowerC){
        console.log(`Draw , both choose ${lowerP}`)   
        }
    else if (lowerP == "rock"){
        if (lowerC == "paper"){
            console.log(`You Lose ${lowerC} beats ${lowerP}`);
            cWin=cWin+1;
        }
        else if (lowerC =="scissors"){
            console.log(`You win ${lowerP} beats ${lowerC}`);
        }

    }

    else if (lowerP == "paper"){
        if (lowerC == "scissors"){
            console.log(`You Lose ${lowerC} beats ${lowerP}`);
        }
        else if (lowerC =="rock"){
            console.log(`You win ${lowerP} beats ${lowerC}`);
        }

    }
    else if (lowerP == "scissors"){
        if (lowerC == "rock"){
            console.log(`You Lose ${lowerC} beats ${lowerP}`);
        }
        else if (lowerC =="paper"){
            console.log(`You win ${lowerP} beats ${lowerC}`);
        }

    }
   



    }

function game(){
        let pWin=0;
        let cWin=0;
        for (let i = 0; i<=4; i++){
            console.log(i);
            console.log(cWin);
        }
        
    }
 game();