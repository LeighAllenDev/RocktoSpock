let userScore = 0;
let cpuScore = 0;
let user = ['You', 'Computer'];
const userScore_span = document.getElementById('user-score');
const cpuScore_span = document.getElementById('cpu-score');
const scoreBoard_div = document.getElementsByClassName('scores');
const results_p = document.querySelector('.results > p');

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

let isGameOver = (score) => {
    if (userScore === 10 || cpuScore === 10) {
        return true;
    } else {
        return false;
    }
}

function gameOver() {
    let winner = userScore === 10 ? user[0] : user[1];
    results_p.innerHTML = `Game Over <br> Winner = ${winner} <br> Final Scores <br> You:${userScore}, CPU:${cpuScore}`;
    userScore = 0;
    cpuScore = 0;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
}

function win(userHand, cpuHand) {
    userScore++;
    const userHand_div = document.getElementById(userHand);
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    results_p.innerHTML = `${userHand} Beats ${cpuHand}, You win!`;
    Swal.fire({
        position: 'center',
        icon: 'success', 
        title: 'You Win!',
        showConfirmButton: false,
        timer: 1500
      })
    userHand_div.classList.add('green-border');
    setTimeout(() => userHand_div.classList.remove('green-border'), 1500);
    if (isGameOver()) {
        return gameOver();
    }
}

function loose(userHand, cpuHand) {
    cpuScore++;
    const userHand_div = document.getElementById(userHand);
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    results_p.innerHTML = `${cpuHand} Beats ${userHand}, You Loose!`;
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'You Loose',
        showConfirmButton: false,
        timer: 1500
      })
    userHand_div.classList.add('red-border');
    setTimeout(() => userHand_div.classList.remove('red-border'), 1500);
    if (isGameOver()) {
        return gameOver();
    }
}

function draw(userHand, cpuHand) {
    const userHand_div = document.getElementById(userHand);
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    results_p.innerHTML = `${userHand} is equal to ${cpuHand}, it's a draw!`;
    Swal.fire({
        position: 'center',
        icon: 'info',
        title: "It's a draw...",
        showConfirmButton: false,
        timer: 1500
      })
    userHand_div.classList.add('grey-border');
    setTimeout(() => userHand_div.classList.remove('grey-border'), 1500);
    if (isGameOver()) {
        return gameOver();
    }
}

function game(userHand) {
    const cpuHand = getCpuHand();
    switch (userHand + cpuHand) {
        case "RockScissors":
        case "RockLizard":
        case "PaperSpock":
        case "PaperRock":
        case "ScissorsPaper":
        case "ScissorsLizard":
        case "LizardSpock":
        case "LizardPaper":
        case "SpockRock":
        case "SpockScissors":
            win(userHand, cpuHand);
            break;
        case "RockPaper":
        case "RockSpock":
        case "ScissorsRock":
        case "ScissorsSpock":
        case "PaperScissors":
        case "PaperLizard":
        case "LizardScissors":
        case "LizardRock":
        case "SpockPaper":
        case "SpockLizard":
            loose(userHand, cpuHand);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
        case "LizardLizard":
        case "SpockSpock":
            draw(userHand, cpuHand);
    }

}

function main () {
    rock_div.addEventListener("click", () => game("Rock"));
    paper_div.addEventListener("click", () => game("Paper"));
    scissors_div.addEventListener("click", () => game("Scissors"));
    lizard_div.addEventListener("click", () => game("Lizard"));
    spock_div.addEventListener("click", () => game("Spock"));
}

main();
