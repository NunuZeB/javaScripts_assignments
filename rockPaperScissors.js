//Rock Paper, Scisors activity

const hands = ['rock', 'paper', 'scissors'];
//getHand function returns a hand from the array using the given formula
function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}
//the two players
let player1 = {
    name: 'Player1',
    hand: getHand()
};
let player2 = {
    name: 'Player 2',
    hand: getHand()
};
//playRound function gets hands from each player, determines the outcome
function playRound(p1, p2) {
    p1.hand = getHand();
    p2.hand = getHand();
    //compare the two hands and give the result
    if (p1.hand === p2.hand) {
        console.log(p1.hand + " VS " + p2.hand + " There is a tie")
    }
    else {
        if (p1.hand === "rock") {

            if (p2.hand === "paper") {
                console.log(p1.hand + " VS " + p2.hand + " " + p2.name + " is a  winnner")
            }
            else {
                console.log(p1.hand + " VS " + p2.hand + " " + p1.name + " is a winner");
            }
        }
        else if (p1.hand === "scissors") {
            if (p2.hand === "rock") {
                console.log(p1.hand + " VS " + p2.hand + " " + p2.name + " is a winnner")
            }
            else {
                console.log(p1.hand + " VS " + p2.hand + " " + p1.name + "  is a winner");
            }
        }
        else {
            if (p2.hand === "scissors") {
                console.log(p1.hand + " VS " + p2.hand + " " + p2.name + " is a  winnner")
            }
            else {
                console.log(p1.hand + " VS " + p2.hand + " " + p1.name + " is a winner");
            }
        }
    }

}
playRound(player1, player2)








