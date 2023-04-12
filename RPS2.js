//Rock Paper, Scisors  activity part 2
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
    name: 'Player2',
    hand: getHand(),
    wins: 0
};
let player3 = {
    name: 'Player3',
    hand: getHand(),
    wins: 0
} ;  
let player4 = {
    name: 'Player4',
    hand: getHand(),
    wins: 0
};
//playRound function gets hands from each player
function playRound(p1, p2) {
    p1.hand = getHand();
    p2.hand = getHand();
    //check if they are tie
    if (p1.hand === p2.hand) {
        console.log(p1.hand + " VS " + p2.hand + " There is a tie");
        return null;
    }
    //check if p1 wins
    else if (
        (p1.hand === "rock" && p2.hand === "scissors") ||
        (p1.hand === "scissors" && p2.hand === "paper") ||
        (p1.hand === "paper" && p2.hand === "rock")
    )
        //displays and return the winner and increaments number of wins
         { console.log (p1.hand + " VS " +  p2.hand + " played and " + p1.name + " is a  winnner");
        p1.wins++;
        return p1;
    }
    // other wise p2 wins and displays and return the winner and increaments number of wins
        else{
            console.log(p1.hand + " VS " + p2.hand + " played  and " + p2.name  + " is a winner.");
            p2.wins++;
            return p2 ;   
        }   
     } 
function playGame(p1, p2, playUntil){
     p1.wins= 0;
     p2.wins = 0;
     while(p1.wins< playUntil && p2.wins < playUntil)
        playRound(p1,p2);
     if(p1.wins>p2.wins){
        return p1;
     }
     else{
        return p2;
     }
}
// function to play the tournament and return the winner
function playTournament(p1, p2, p3, p4, playUntil){
    console.log("Round one \n");
let firstWinner=playGame(p1, p2, playUntil);
console.log(firstWinner.name +  " is a winner \n");
    console.log("Second round \n");
let secondWinner=playGame(p3,p4,playUntil);
//secone winner
console.log(secondWinner.name +  " is a winner \n");
    console.log("Finale game \n");
let finalwinner =playGame(firstWinner, secondWinner, playUntil);
//anounce the champion
console.log(finalwinner.name + " is the world champion! \n");

}
//play the tournament
playTournament(player1, player2, player3, player4, 3)
