ansVarArr = ['rock', 'paper', 'scissors'];
Object.freeze(ansVarArr);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let randomNum = getRandomInt(3);
    return ansVarArr[randomNum];
}

function getHumanChoice(round) {
    let input = prompt(`Round ${round + 1}. Enter your choice: rock, paper, scissors?`).toLowerCase();
    // Check for wrong spelling
    while (ansVarArr.indexOf(input) === -1) {
        input = prompt(`Round ${round + 1}. Invalid input. Repeat your choice, please.`).toLowerCase();
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
    console.log('ComputerChoice:', computerChoice);
    console.log('HumanChoice:', humanChoice);
    let roundWinner = getRoundWinner(computerChoice, humanChoice);
    getScore(roundWinner, score);
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
    let rounds = 3;
    let score = {'computer': 0, 'human': 0};
    for (let i = 0; i < rounds; i++) {
        playRound(score, i);
    }
    let winner;
    if (score.computer > score.human) {
        winner = 'Computer';
    } else {
        winner = 'Human';
    }
    return `Winner is: ${winner}!`;
}

// function testGetRoundWinner() {
//     let r = 'rock';
//     let p = 'paper';
//     let s = 'scissors';
//     if (getRoundWinner(r, p) === 'human') {
//     
// }
// }