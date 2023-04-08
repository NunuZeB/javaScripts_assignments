// Rock paper scissors
const hands = ['rock', 'paper', 'scissors'];
//getHand function returns a hand from the array using the given formula
function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}
//the 4 players
let player1 = {
    name: 'Player1',
    hand: getHand(),
    wins: 0
};
let player2 = {
    name: 'Player 2',
    hand: getHand(),
    wins: 0
};
let player3 = {
    name: 'Player3',
    hand: getHand(),
    wins: 0
}   
let player4 = {
    name: 'Player4',
    hand: getHand(),
    wins: 0
}
//playRound function gets hands from each player, determines the outcome
function playRound(p1, p2) {
    p1.hand = getHand();
    p2.hand = getHand();
    //if they are tie
    if (p1.hand === p2.hand) {
        console.log(p1.hand + " VS " + p2.hand + " There is a tie")
        return null;
    }
    //check if p1 wins
    else if (
        (p1.hand === "rock" && p2.hand === "scissors") ||
        (p1.hand === "scissors" && p2.hand === "paper") ||
        (p1.hand === "paper" && p2.hand === "rock")

    ) {
        console.log(p1.hand + " VS " + p2.hand + " " + p1.name + " is a  winnner");
        p1.wins++
        return p1;
    }
    // other wise p2 wins
    else {
        console.log(p1.hand + " VS " + p2.hand + " " + p2.name + " is a winner");
        p2.wins++
        return p2;
    }
}
//playRound(player1, player2)
// playgame to play the full game and return the winner 
function playGame(p1, p2, playUntil) {
    p1.wins = 0;
    p2.wins = 0;

    while (p1.wins < 5 && p2.wins < 5) {
         playRound(p1, p2);
    }
    if (p1.wins > p2.wins) {
        return p1
    } else {
        return p2;
    }
}
// function to play the tournament and return the winner
function playTournament(p1, p2, p3, p4){
    console.log("Round one \n")
let firstWinner=playGame(p1, p2);
console.log(firstWinner.name +  " is a winner \n");
    console.log("Second round \n");
let secondWinner=playGame(p3,p4);
//secone winner
console.log(secondWinner.name +  " is a winner \n");
    console.log("Finale game \n");
let finalwinner =playGame(firstWinner, secondWinner);
//anounce the champion
console.log(finalwinner.name + " is the world champion! \n");

}
playTournament(player1, player2, player3, player4)
