let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

// console.log(generateTarget());

const compareGuesses = function(userGuess, computerGuess, targetGuess) {

    const userAbsoluteVal = Math.abs(targetGuess - userGuess);
    const computerAbsoluteVal = Math.abs(targetGuess - computerGuess);

    // return userAbsoluteVal <= computerAbsoluteVal;

    if (userAbsoluteVal <= computerAbsoluteVal) {
        return true;
    } else {
        return false;
    }
}
console.log(compareGuesses(-5, 7, 4));

const updateScore = winner => winner === 'human' ? humanScore++ : computerScore++;
// console.log(updateScore('human'));

function advanceRound() {
    currentRoundNumber++;
}