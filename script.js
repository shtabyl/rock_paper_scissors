let ansVarArr = ['rock', 'paper', 'scissors'];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(ansVarArr) {
    let randomNum = getRandomInt(3);
    return ansVarArr[randomNum];
}

function getHumanChoice() {
    let input = prompt('Enter your choice: rock, paper, scissors?').toLowerCase();
    while (ansVarArr.indexOf(input) === -1) {
        input = prompt('Invalid input. Repeat your choice, please.').toLowerCase();
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
}

function playRound(score) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    let roundWinner = getRoundWinner(computerChoice, humanChoice);
    getScore(roundWinner, score);
    return score;
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
    let rounds = 5;
    let score = {'human': 0, 'computer': 0};
    playRound(score);

}