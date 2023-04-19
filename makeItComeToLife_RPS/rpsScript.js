const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorskBtn = document.getElementById('scissors');

rockBtn.addEventListener('click', () => {
    play(ROCK);
});
paperBtn.addEventListener('click', () => {
    play(PAPER);
});

scissorskBtn.addEventListener('click', () => {
    play(SCISSORS);
});

const hands = ['rock', 'paper', 'scissors'];

function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

let player2 = { name: 'Computer', getHand: getHand() };

function playRound(userOption) {
    console.log('Hands')
    console.log(userOption + "'s hand: " + userOption);
    console.log(player2.name + "'s hand: " + player2.getHand);

    if (player1.getHand === player2.getHand) {
        console.log("It's a tie!");
        return null;

    } else if ((userOption === ROCK && player2.getHand === 'scissors')
        (userOption === PAPER && player2.getHand === 'rock')
        (userOption === SCISSORS && player2.getHand === 'paper')) {
        console.log("You wins with: " + userOption + ' against ' + player2.getHand + '.');
        return player1;
    } else if ((player2.getHand === 'rock' && userOption === SCISSORS)
        (player2.getHand === 'paper' && userOption === ROCK)
        (player2.getHand === 'scissors' && userOption === PAPER)) {
        console.log(player2.name + ' wins with ' + player2.getHand + ' against ' + userOption + '.');
        return player2;
    }

}
playRound(player1, player2);