let firstNumber  =  10;
let secondNumber = 10;

let sum = firstNumber + secondNumber;
let difference = firstNumber - secondNumber;
let product = firstNumber * secondNumber;
let division = firstNumber / secondNumber;

console.log(sum); // Output: 15
console.log(difference);    // Output: 5
console.log(product);     // Output: 50
console.log(division);    // Output: 2  

let isequal = firstNumber === secondNumber;
let isequalvalue = firstNumber == secondNumber;

console.log(isequal); // Output: true  (=== : same value AND type)
console.log(isequalvalue); // Output: true  (== : same value, type coerced)

let cartTotal = 100;

cartTotal += 20; 
console.log(cartTotal); 
cartTotal -= 10;
console.log(cartTotal);
cartTotal *= 2;
console.log(cartTotal);
cartTotal /= 4;
console.log(cartTotal);