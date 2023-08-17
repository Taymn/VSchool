// Higher Order Functions
// callback is a function passed into another function

function doMath(num1, num2, callback){
    return callback(num1, num2)
}


function sum(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

console.log(doMath(4, 7, sum))
console.log(doMath(5, 10, subtract)) 