function computerPlay() {
    //put rock , paper and scissors in an array, then
    //with math.random select randomly one of those
    const array = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return array[random]; 
}

// will ask for Rock , Paper or Scissors, from the user, later
let playerSelection;
let computerSelection;

function playRound(player = playerSelection, computer = computerSelection) {
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

function game() {
    for(let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock , Paper or Scissors?").toLowerCase();
        computerSelection = computerPlay();
        console.log(playRound());
    }
}

game();
