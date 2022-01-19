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

// asks for Rock , Paper or Scissors, from the user
let playerSelection = toLowerCase(prompt("Rock , Paper or Scissors?"));
let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    //compare what player and computer selected.
    //write win or lose based on the following criteria:
    // rock & scissors = rock win, rock & paper = paper win
    // rock & rock = draw, scissors & scissors = draw, paper & paper = draw
    // scissors & paper = scissors win
    
}
