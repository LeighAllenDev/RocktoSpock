let userScore = 0;
let cpuScore = 0;
const userScore_span = document.getElementById('user-score');
const cpuScore_span = document.getElementById('cpu-score');
const scoreBoard_div = document.getElementsByClassName('scores');
const results_p = document.querySelector('.results > p');
const userHand_div = document.getElementById(userHand);
/**
 * Game button divs 
 */
const rock_div = document.getElementById('Rock');
const paper_div = document.getElementById('Paper');
const scissors_div = document.getElementById('Scissors');
const lizard_div = document.getElementById('Lizard');
const spock_div = document.getElementById('Spock');

/** get Computer Choice for game */
function getCpuHand() {
    const hands = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    const randomNumber = Math.floor(Math.random() * 5);
    return hands[randomNumber];
}

function win(userHand, cpuHand) {
    userScore++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    results_p.innerHTML = `${userHand} Beats ${cpuHand}, You win!`;
}


function main() {
    rock_div.addEventListener("click", () => game("Rock"));
    paper_div.addEventListener("click", () => game("Paper"));
    scissors_div.addEventListener("click", () => game("Scissors"));
    lizard_div.addEventListener("click", () => game("Lizard"));
    spock_div.addEventListener("click", () => game("Spock"));
}

main();