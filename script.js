/** 
 * Code logic of game "Rock Paper Scissors".
 * Get computer choice, get human choice in each round, 
 * compare results and return a winner of a round.
 * Return the winner after five rounds.
*/

const ANSWER_OPTION = ['rock', 'paper', 'scissors'];
const MAX_ROUNDS = 3;

const playBtn = document.querySelector('.start-game');
const rockBtn = document.querySelector('.rock-button');
const paperBtn = document.querySelector('.paper-button')
const scissorsBtn = document.querySelector('.scissors-button');
const playField = document.querySelector('.play-field-container');
const pointsBox = document.querySelector('.points-box');
const resultBox = document.querySelector('.result-box');
const pointsHuman = document.querySelector('.points-human');
const pointsComputer = document.querySelector('.points-computer');
const gameResult = document.querySelector('.game-result');
const humanPrize = document.querySelector('.human-prize');
const computerPrize = document.querySelector('.computer-prize');

const roundCounters = document.querySelectorAll('.round-counter');
const humanChoiceBtns = document.querySelectorAll('.user-choice');
const computerChoiceBtns = document.querySelectorAll('.computer-choice');

let score = {};
let round;


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let randomNum = getRandomInt(ANSWER_OPTION.length);
    return ANSWER_OPTION[randomNum];
}

function getRoundWinner(computerChoice, humanChoice) {
    let roundWinner;
    if (computerChoice === 'rock') {
        switch(humanChoice) {
            case 'paper': {
                roundWinner = 'human';
                break;
            }
            case 'scissors': {
                roundWinner = 'computer';
                break;
            }
            default:{
                roundWinner = 'tie';
            }
        }
    } else if (computerChoice === 'paper') {
        switch(humanChoice) {
            case 'rock': {
                roundWinner = 'computer';
                break;
            }
            case 'scissors': {
                roundWinner = 'human';
                break;
            }
            default: {
                roundWinner = 'tie';
            }
        }
    } else {
        switch(humanChoice) {
            case 'rock': {
                roundWinner = 'human';
                break;
            }
            case 'paper': {
                roundWinner = 'computer';
                break;
            }
            default: {
                roundWinner = 'tie';
            }
        }
    }
    return roundWinner;
}

function getScore(roundWinner) {
    if (roundWinner === 'human') {
        score.human += 1;
        pointsHuman.style.backgroundColor = '#00E9D3';
        setTimeout(() => {
            pointsHuman.style.backgroundColor = 'transparent';
        }, 0.2 * 1000);
        return;
    } else if (roundWinner === 'computer') {
        score.computer += 1;
        pointsComputer.style.backgroundColor = '#00E9D3';
        setTimeout(() => {
            pointsComputer.style.backgroundColor = 'transparent';
        }, 0.2 * 1000);
        return;
    }
    score.computer += 1;
    score.human += 1;
    pointsComputer.style.backgroundColor = '#00E9D3';
    pointsHuman.style.backgroundColor = '#00E9D3';
        setTimeout(() => {
            pointsHuman.style.backgroundColor = 'transparent';
            pointsComputer.style.backgroundColor = 'transparent';
        }, 0.2 * 1000);
    return;
    }

function playRound(humanChoice) {
    round += 1;
    let computerChoice = getComputerChoice();
    let roundWinner = getRoundWinner(computerChoice, humanChoice);
    getScore(roundWinner);
    showComputerChoice(computerChoice, roundWinner);
    showHumanChoice(humanChoice, roundWinner);
    pointsComputer.textContent = score.computer;
    pointsHuman.textContent = score.human;
    if (round < MAX_ROUNDS) {
        setTimeout(() => {
            roundCounters[round].classList.add('active');
        }, 1.0 * 1000);
    }
    return;
}

function getResults() {
    if (score.computer > score.human) {
        gameResult.textContent = 'Computer won.';
        computerPrize.style.visibility = 'visible';
        return;
    } else if (score.computer < score.human) {
        gameResult.textContent = 'You won!';
        humanPrize.style.visibility = 'visible';
        return;
    }
    gameResult.textContent = 'Tie!';
    return;
}

function startGame() {
    round = 0;
    score = {'computer': 0, 'human': 0};
    if (playBtn.textContent === 'Play again'
        || playBtn.textContent === 'New game'
    ) {
        roundCounters.forEach((item) => item.classList.remove('active'));
    } 
    roundCounters[round].classList.add('active');
    playBtn.textContent = 'New game';
    enableHumanChoiceBtns();
    gameResult.textContent = '';
    pointsComputer.textContent = score.computer;
    pointsHuman.textContent = score.human;
    computerPrize.style.visibility = 'hidden';
    humanPrize.style.visibility = 'hidden';
}

function endGame() {
    disableHumanChoiceBtns();
    playBtn.textContent = 'Play again';
    getResults();
}

function disableHumanChoiceBtns() {
    humanChoiceBtns.forEach((btn) => {
        btn.disabled = true;
    });
}

function enableHumanChoiceBtns() {
    humanChoiceBtns.forEach((btn) => {
        btn.disabled = false;
    });
}

function showComputerChoice(computerChoice, roundWinner) {
    let index = ANSWER_OPTION.indexOf(computerChoice);
    if (roundWinner === 'human') {
        computerChoiceBtns[index].classList.add('selected');
        setTimeout(() => {
            computerChoiceBtns[index].classList.remove('selected');
        }, 1.0 * 1000);
    } else {
        computerChoiceBtns[index].classList.add('selected-winner');
        setTimeout(() => {
            computerChoiceBtns[index].classList.remove('selected-winner');
        }, 1.0 * 1000);
    }
}

function showHumanChoice(humanChoice, roundWinner) {
    disableHumanChoiceBtns();
    let index = ANSWER_OPTION.indexOf(humanChoice);
    if (roundWinner === 'computer') {
        humanChoiceBtns[index].classList.add('selected');
        if (round < MAX_ROUNDS) {
            setTimeout(() => {
                enableHumanChoiceBtns();
                humanChoiceBtns[index].classList.remove('selected');
            }, 1.0 * 1000);
        } else {
            setTimeout(() => {
                humanChoiceBtns[index].classList.remove('selected');
            }, 1.0 * 1000);
        }
    } else {
        humanChoiceBtns[index].classList.add('selected-winner');
        if (round < MAX_ROUNDS) {
            setTimeout(() => {
                enableHumanChoiceBtns();
                humanChoiceBtns[index].classList.remove('selected-winner');
            }, 1.0 * 1000);
        } else {
            setTimeout(() => {
                humanChoiceBtns[index].classList.remove('selected-winner');
            }, 1.0 * 1000);
        }
    }
}

document.addEventListener('click', (e) => {
    switch(e.target) {
        case playBtn: {
            startGame();
            break;
        }
        case rockBtn: {
            playRound('rock');
            if (round === MAX_ROUNDS) {
                endGame();
            }
            break;
        }
        case paperBtn: {
            playRound('paper');
            if (round === MAX_ROUNDS) {
                endGame();
            }
            break;
        }
        case scissorsBtn: {
            playRound('scissors');
            if (round === MAX_ROUNDS) {
                endGame();
            }
            break;
        }
    }
});

// module.exports = getRoundWinner;