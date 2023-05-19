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
        // console.log(`Draw , both choose ${lowerP}`)  
        document.getElementById("yourScore").innerText =`Draw , both choose ${lowerP}`; 
        }
    else if (lowerP == "rock"){
        if (lowerC == "paper"){
            // console.log(`You Lose ${lowerC} beats ${lowerP}`);
            document.getElementById("yourScore").innerText =`You lose ${lowerC} beats ${lowerP}`; 
            cWin+=1;
        }
        else if (lowerC =="scissors"){
            // console.log(`You win ${lowerP} beats ${lowerC}`);
            document.getElementById("yourScore").innerText =`You win ${lowerP} beats ${lowerC}`;
            pWin+=1;
        }

    }

    else if (lowerP == "paper"){
        if (lowerC == "scissors"){
            // console.log(`You Lose ${lowerC} beats ${lowerP}`);
            document.getElementById("yourScore").innerText =`You lose ${lowerC} beats ${lowerP}`;
            cWin+=1;
        }
        else if (lowerC =="rock"){
            console.log(`You win ${lowerP} beats ${lowerC}`);
            document.getElementById("yourScore").innerText =`You win ${lowerP} beats ${lowerC}`;
            pWin+=1;
            
        }

    }
    else if (lowerP == "scissors"){
        if (lowerC == "rock"){
            console.log(`You Lose ${lowerC} beats ${lowerP}`);
            document.getElementById("yourScore").innerText =`You lose ${lowerC} beats ${lowerP}`;
            cWin+=1;
        }
        else if (lowerC =="paper"){
            console.log(`You win ${lowerP} beats ${lowerC}`);
            document.getElementById("yourScore").innerText =`You win ${lowerP} beats ${lowerC}`;
            pWin+=1;
        }

    }
    



    }
        
function rock (){
    playRound("Rock",getComputerChoice());
    updateScore();
    // document.getElementById("yourScore").innerText = "Rock";


}
function paper (){
    playRound("Paper",getComputerChoice()); 
    updateScore();
    // document.getElementById("yourScore").innerText ="Paper";
}
function scissors (){
    playRound("Scissors",getComputerChoice()); 
    updateScore();
    // document.getElementById("yourScore").innerText ="Scissors";
}


// function game(){
//         for (let i = 0; i<=0; i++){
//             const playerSelection = prompt("Rock , Scissors or Paper")
//             const computerSelection= ;
//             playRound(playerSelection,computerSelection);
//             console.log(`Computer Win Counter : ${cWin}`);
//             console.log(`Your win counter : ${pWin}`)
            
//         }
        
//     }
//  game();

const Rock = document.getElementById("button1");
Rock.addEventListener("click",rock);

const Paper = document.getElementById("button2");
Paper.addEventListener("click",paper);

const Scissors = document.getElementById("button3");
Scissors.addEventListener("click",scissors);

const yourScore = document.querySelector('yourScore');

function updateScore() {
    const playerScorePara = document.getElementById("playerScore");
    const computerScorePara = document.getElementById("computerScore");
    

    playerScorePara.textContent = `Player: ${cWin}`;
    computerScorePara.textContent = `Computer: ${pWin}`;
    if(cWin ==5){
        playerScorePara.textContent = `Player: ${cWin}`;
    computerScorePara.textContent = `Computer: ${pWin}`;

        document.getElementById("yourScore").innerText =`Computer Wins`; 
        alert("Computer Wins");
        cWin=0;
        pWin=0;
        playerScorePara.textContent = `Player: ${cWin}`;
    computerScorePara.textContent = `Computer: ${pWin}`;
    }
    if(pWin ==5){
        playerScorePara.textContent = `Player: ${cWin}`;
    computerScorePara.textContent = `Computer: ${pWin}`;
        document.getElementById("yourScore").innerText =`Player Wins`; 
        alert("Player Wins");
        cWin=0;
        pWin=0;
        playerScorePara.textContent = `Player: ${cWin}`;
    computerScorePara.textContent = `Computer: ${pWin}`;
    }
  
}