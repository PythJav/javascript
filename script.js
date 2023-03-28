function getComputerChoice(){
    let values = ["Rock","Scissors","Paper"];
    let index = values[Math.floor(Math.random()*values.length)];
    return index;
}
// const playerSelection = prompt("Rock , Scissors or Paper")
// const computerSelection= getComputerChoice();
let cWin= 0;
let pWin=0;
// console.log(computerSelection);
// playRound(playerSelection,computerSelection);
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
            cWin+=1;
        }
        else if (lowerC =="scissors"){
            console.log(`You win ${lowerP} beats ${lowerC}`);
            pWin+=1;
        }

    }

    else if (lowerP == "paper"){
        if (lowerC == "scissors"){
            console.log(`You Lose ${lowerC} beats ${lowerP}`);
            cWin+=1;
        }
        else if (lowerC =="rock"){
            console.log(`You win ${lowerP} beats ${lowerC}`);
            pWin+=1;
            
        }

    }
    else if (lowerP == "scissors"){
        if (lowerC == "rock"){
            console.log(`You Lose ${lowerC} beats ${lowerP}`);
            cWin+=1;
        }
        else if (lowerC =="paper"){
            console.log(`You win ${lowerP} beats ${lowerC}`);
            pWin+=1;
        }

    }
   



    }

function game(){
        for (let i = 0; i<=4; i++){
            const playerSelection = prompt("Rock , Scissors or Paper")
            const computerSelection= getComputerChoice();
            playRound(playerSelection,computerSelection);
            console.log(`Computer Win Counter : ${cWin}`);
            console.log(`Your win counter : ${pWin}`)
            
        }
        
    }
 game();