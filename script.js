const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');

// function that on user input randomly selects rock,paper or scissor
// and returns the outcome
function computerPlay() {
    const array = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return array[random]; 
}

let computerSelection = computerPlay();
let playerSelection;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.classList.contains("rock")) {
            playerSelection = "rock";
            playRound();
        }
        else if(button.classList.contains("paper")) {
            playerSelection = "paper";
            playRound();
        }
        else if(button.classList.contains("scissors")) {
            playerSelection = "scissors";
            playRound();
        }
    });
});


let ps = 0;
let cs = 0;

function playRound(player = playerSelection, computer = computerSelection) {
    //compare what player and computer selected.
    //write win or lose based on the following criteria:
    // rock & scissors = rock win, rock & paper = paper win
    // rock & rock = draw, scissors & scissors = draw, paper & paper = draw
    // scissors & paper = scissors win
    
    switch(true) {
        case playerSelection === "rock" && computerSelection === "scissors":
            ps++;
            playerScore.textContent = ps;
            computerScore.textContent = cs;
            break;
        case playerSelection === "rock" && computerSelection === "paper":
            ps++;
            playerScore.textContent = ps;
            computerScore.textContent = cs;
            break;
        case playerSelection === "scissors" && computerSelection === "rock":
            cs++;
            playerScore.textContent = ps;
            computerScore.textContent = cs;
            break;
        case playerSelection === "scissors" && computerSelection === "paper" :
            ps++;
            playerScore.textContent = ps;
            computerScore.textContent = cs;
            break;
        case playerSelection === "paper" && computerSelection === "rock":
            ps++;
            playerScore.textContent = ps;
            computerScore.textContent = cs;
            break;
        case playerSelection === "paper" && computerSelection === "scissors":
            cs++;
            playerScore.textContent = ps;
            computerScore.textContent = cs;
            break;
        case playerSelection === computerSelection:
            ps++;
            cs++;
            playerScore.textContent = ps;
            computerScore.textContent = cs;
            break;
        default:
            return console.log("error");
    }
    if(ps === 5) {
        return ps;
    }

    if(cs === 5) {
        return cs;
    }
}

if(ps)