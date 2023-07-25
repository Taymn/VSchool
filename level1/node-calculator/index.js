const readline = require("readline-sync")
var numOne = readline.question('What is your first number? ');
console.log(numOne);

var numTwo = readline.question('What is your second number? ');
console.log(numTwo);

var operation = readline.question("what is desired operation of numbers?" +
" add, sub, mul, or div? ");

// value = 0
let value;

// Number()forces variable to be read as a number
var add = () => value = Number(numOne) + Number(numTwo);
var sub = () => value = numOne - numTwo;
var mul = () => value = numOne * numTwo;
var div = () => value = numOne / numTwo;

console.log(operation)

 let input = () => {
    if (operation === "add") {
        add()
    } else if (operation === "sub") {
        sub()
    } else if (operation === "mul") {
        mul()
    } else if (operation === "div") {
        div()
    }
}

// calls function
input() 

console.log("The result is "+ (value));