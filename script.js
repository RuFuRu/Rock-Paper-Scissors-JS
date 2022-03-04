// function that on user input randomly selects rock,paper or scissor
// and returns the outcome
function computerPlay() {
    //put rock , paper and scissors in an array, then
    //with math.random select randomly one of those
    const array = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return array[random]; 
}
//write a function that plays a single game of Rock, Paper, Scissors
// it takes 2 parametres = playerSelection and computerSelection
//(they should be caseinsensitive)
//then returns a string "You win" or "You lose" , depending on who
// won.

// will ask for Rock , Paper or Scissors, from the user, later
let playerSelection;
let computerSelection;

function playRound(player = playerSelection, computer = computerSelection) {
    //compare what player and computer selected.
    //write win or lose based on the following criteria:
    // rock & scissors = rock win, rock & paper = paper win
    // rock & rock = draw, scissors & scissors = draw, paper & paper = draw
    // scissors & paper = scissors win
    switch(true) {
        case playerSelection === "rock" && computerSelection === "scissors":
            return `You chose ${playerSelection}, computer chose ${computerSelection}. You win`;
        case playerSelection === "rock" && computerSelection === "paper":
            return `You chose ${playerSelection}, computer chose ${computerSelection}. You lose`;
        case playerSelection === "scissors" && computerSelection === "rock":
            return `You chose ${playerSelection}, computer chose ${computerSelection}. You lose`;
        case playerSelection === "scissors" && computerSelection === "paper" :
            return `You chose ${playerSelection}, computer chose ${computerSelection}. You win`;
        case playerSelection === "paper" && computerSelection === "rock":
            return `You chose ${playerSelection}, computer chose ${computerSelection}. You lose`;
        case playerSelection === "paper" && computerSelection === "scissors":
            return `You chose ${playerSelection}, computer chose ${computerSelection}. You lose`;
        case playerSelection === computerSelection:
            return `You chose ${playerSelection}, computer chose ${computerSelection}. You draw with the computer`;
        default:
            return "Please type in either rock, paper or scissors";
    }
}

//write a function that loops 5 times , logging the result of each game;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click',playRound);
});
