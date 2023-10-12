const userScore_span = document.getElementById('user-score');
const cpuScore_span = document.getElementById('cpu-score');
const scoreBoard_div = document.getElementsByClassName('scores');
const results_p = document.querySelector('.results > p');

const rock_div = document.getElementById('Rock');
const paper_div = document.getElementById('Paper');
const scissors_div = document.getElementById('Scissors');
const lizard_div = document.getElementById('Lizard');
const spock_div = document.getElementById('Spock');

let userScore = 0;
let cpuScore = 0;
let user = ['You', 'Computer'];
let canPlay = true;

/**
 * Function to randomly select a number and generate the computers choice
 * @returns the computers answer
 */
function getCpuHand() {
    const hands = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    const randomNumber = Math.floor(Math.random() * 5);
    return hands[randomNumber];
}

/**
 * Function to check the scores total
 * @param {Number} score 
 * @returns stop game if score limit reached
 */
let isGameOver = (score) => {
    return userScore === 10 || cpuScore === 10;
};

/**
 * function to disable the buttons and prevent spam clicks
 */
function disableButtons() {
    const buttons = document.querySelectorAll('.hand');
    buttons.forEach(button => button.disabled = true);
    canPlay = false;
}

/**
 * Function to enable the buttons
 */
function enableButtons() {
    const buttons = document.querySelectorAll('.hand');
    buttons.forEach(button => button.disabled = false);
    canPlay = true;
}

/**
 * function that determines who wins the game
 */
function gameOver() {
    let winner = userScore === 10 ? user[0] : user[1];
    results_p.innerHTML = 'Game Over';
    

    const playAgainButton = document.getElementById('play-again');
    playAgainButton.style.display = 'block';

    playAgainButton.addEventListener('click', () => {
        userScore = 0;
        cpuScore = 0;
        userScore_span.innerHTML = userScore;
        cpuScore_span.innerHTML = cpuScore;
        results_p.innerHTML = 'Choose a hand..';
        playAgainButton.style.display = 'none';
        enableButtons();

    });
}

/**
 * Function that determines if the user wins the round
 * @param {string} userHand 
 * @param {String} cpuHand 
 * @returns a message to let the user know they have won 
 */
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
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 1500
      });
    userHand_div.classList.add('green-border');
    setTimeout(() => userHand_div.classList.remove('green-border'), 1500);
    if (isGameOver()) {
        return gameOver();
    }
}

/**
 * Function that determines if the user looses against the computer
 * @param {string} userHand 
 * @param {String} cpuHand 
 * @returns A message to let the user know they have lost the round
 */
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
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 1500
      });
    userHand_div.classList.add('red-border');
    setTimeout(() => userHand_div.classList.remove('red-border'), 1500);
    if (isGameOver()) {
        return gameOver();
    }
}
/**
 * Function that determines if the user and the computer draw the same round
 * @param {string} userHand 
 * @param {string} cpuHand 
 * @returns a string to say the hands draw
 */
function draw(userHand, cpuHand) {
    const userHand_div = document.getElementById(userHand);
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    results_p.innerHTML = `${userHand} is equal to ${cpuHand}, it's a draw!`;
    Swal.fire({
        position: 'center',
        icon: 'info',
        title: "It's a draw...",
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 1500
      });
    userHand_div.classList.add('grey-border');
    setTimeout(() => userHand_div.classList.remove('grey-border'), 1500);
    if (isGameOver()) {
        return gameOver();
    }
}

/**
 * Function that enables the user to play the game
 * @param {string} userHand 
 * @returns the game
 */
function game(userHand) {
    if (!canPlay || isGameOver()) {
        return;
    }

disableButtons();

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
    setTimeout(enableButtons, 1500);

}

/**
 * function to provide the listeners for the user buttons
 */
function main () {
    rock_div.addEventListener("click", () => game("Rock"));
    paper_div.addEventListener("click", () => game("Paper"));
    scissors_div.addEventListener("click", () => game("Scissors"));
    lizard_div.addEventListener("click", () => game("Lizard"));
    spock_div.addEventListener("click", () => game("Spock"));
}

main();
