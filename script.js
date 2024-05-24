// Code logic of game "Rock Paper Scissors".
// Get computer choice, get human choice in each round, 
// compare results and return winner.
// Return winner after five rounds.

const answerOption = ['rock', 'paper', 'scissors'];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let randomNum = getRandomInt(3);
    return answerOption[randomNum];
}

function getHumanChoice(round) {
    let input = prompt(`Round ${round}. 
        Enter your choice: rock, paper, scissors?`).toLowerCase();
    // Check for wrong spelling in user input
    while (answerOption.indexOf(input) === -1) {
        input = prompt(`Round ${round}. 
            Invalid input. Repeat your choice, please.`).toLowerCase();
    }
    return input;
}

function getScore(roundWinner, score) {
    if (roundWinner === 'human') {
        score.human++;
        return;
    } else if (roundWinner === 'computer') {
        score.computer++;
        return score;
    } else {
        score.computer++;
        score.human++;
    }
    return;
}

function playRound(score, round) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice(round);
    let roundWinner = getRoundWinner(computerChoice, humanChoice);
    getScore(roundWinner, score);
    console.log(`Round ${round}`)
    console.log('Computer |', computerChoice, '|', score.computer);
    console.log('Human:   |', humanChoice, '|', score.human);
    return;
}

function getRoundWinner(computerChoice, humanChoice) {
    let roundWinner;
    if (computerChoice === 'rock') {
        switch(humanChoice) {
            case 'paper':
                roundWinner = 'human';
                break;
            case 'scissors':
                roundWinner = 'computer';
                break;
            default:
                roundWinner = 'tie';
        }
    } else if (computerChoice === 'paper') {
        switch(humanChoice) {
            case 'rock':
                roundWinner = 'computer';
                break;
            case 'scissors':
                roundWinner = 'human';
                break;
            default:
                roundWinner = 'tie';
        }
    } else {
        switch(humanChoice) {
            case 'rock':
                roundWinner = 'human';
                break;
            case 'paper':
                roundWinner = 'computer';
                break;
            default:
                roundWinner = 'tie';
        }
    }
    return roundWinner;
}

function playGame() {
    // let rounds = prompt('Choose amount of rounds:');
    let rounds = 5;
    let score = {'computer': 0, 'human': 0};
    for (let i = 1; i <= rounds; i++) {
        playRound(score, i);
    }
    if (score.computer > score.human) {
        return 'The winner is Computer!';
    } else if (score.computer < score.human) {
        return 'The winner is Human!';
    } else {
        return 'Tie!';
    }
}

// Add tests for getRoundWinner();