//Calculator avtivity
let billBeforeTip = 100;
function calculateTip(amount) {
    return amount * .2;
}
function getBillTotal(bill) {
    let tip = calculateTip(bill);
    let totalBill = bill + tip;
    return totalBill;
}
console.log(getBillTotal(billBeforeTip));

console.log("This function retuns the tip amount " + calculateTip(billBeforeTip) +
    " and  this one returns " + getBillTotal(billBeforeTip) + " the total bill amount.");

