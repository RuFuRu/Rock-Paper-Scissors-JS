// asks for Rock , Paper or Scissors
let input = toLowerCase(prompt("Rock , Paper or Scissors?"));

// function that on user input randomly selects rock,paper or scissor
// and returns the outcome
function computerPlay() {
    //put rock , paper and scissors in an array, then
    //with math.random select randomly one of those
    const array = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * 3);
    return console.log(array[random]); 
}