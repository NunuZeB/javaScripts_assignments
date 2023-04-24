 //Create two arrays of numbers called numbers1 and numbers2
let numbers1 =[1,2,3];
let numbers2= [4,5,6];
 //Use the spread operator to create an array called numbers that combines the elements of numbers1 and numbers2.
 let numbers = [...numbers1, ...numbers2]
 console.log(numbers);

//Define an arrow function called square that accepts a number as an argument and returns the square of the number.
let square= (number)=> {
    return number*number;
}
console.log(square(2));
//Use the map method to create a new array called squares that contains the squares of the numbers in the numbers array.
const squares =numbers.map(square)
console.log(squares);

//Define an arrow function called isEven that accepts a number as an argument and returns true if the number is even, otherwise false.
let isEven = (number) => number % 2===0? true:false

//Use the filter method to create a new array called evenSquares that contains only the even squares from the squares array.
const evenSquares = squares.filter(isEven)
console.log(evenSquares)

//Use destructuring assignment to extract the first and second elements of the evenSquares array into constants firstEvenSquare and secondEvenSquare.
const [a, b, ...theRestItem] = evenSquares
const firstEvenSquare =[a];
const secondEvenSquare =[b];
console.log(`${firstEvenSquare} and ${secondEvenSquare}`)

//Use a template literal to log the original numbers array, the squares array, the evenSquares array, and the extracted even squares.
console.log(`The original numbers:${numbers},
 the squares array:${squares}, 
 the even squares array:${evenSquares} 
 and the extracted even squares:${firstEvenSquare},${secondEvenSquare} `)