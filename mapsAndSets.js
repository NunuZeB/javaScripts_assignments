//creating a map
let fruitInventory = new Map();
fruitInventory.set('apple', 10);
fruitInventory.set('banana', 20);
fruitInventory.set('orange', 30);
// updating
fruitInventory.set('apple', 15);
let bananaInventory= fruitInventory.get('banana');
//creating a set 
let  uniqueColors = new Set (['red','blue','green']);
uniqueColors.add('yellow');
let hasBlue = uniqueColors.has('blue');
console.log(hasBlue);