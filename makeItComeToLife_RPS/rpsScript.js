const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

rockBtn.addEventListener('click', () => {
    play(ROCK);
});
paperBtn.addEventListener('click', () => {
    play(PAPER);
});

scissorsBtn.addEventListener('click', () => {
    play(SCISSORS);
});

const hands = ['rock', 'paper', 'scissors'];

function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

function playRound(userOption, computerOption) {
    console.log('Hands')
    console.log(userOption + "'s hand: " + userOption);
    console.log("Computer's hand: " + computerOption);

    if (userOption === computerOption) {
        console.log("It's a tie!");
        return null;

    } else if ((userOption === ROCK && computerOption === 'scissors')
        || (userOption === PAPER && computerOption === 'rock')
        || (userOption === SCISSORS && computerOption === 'paper')) {
        console.log("You win with: " + userOption + ' against ' + computerOption + '.');
        return 'player';
    } else if ((computerOption === 'rock' && userOption === SCISSORS)
        || (computerOption === 'paper' && userOption === ROCK)
        || (computerOption === 'scissors' && userOption === PAPER)) {
        console.log("Computer wins with " + computerOption + ' against ' + userOption + '.');
        return 'computer';
    }
}
function play(userOption) {
    const computerOption = getHand();
    const winner = playRound(userOption, computerOption);
    if (winner === 'player') {
        console.log('You win!');
    } else if (winner === 'computer') {
        console.log('Computer wins!');
    }
}