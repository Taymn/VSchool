// Write a function that takes an array of numbers and returns the largest

function largest(arr) {

    var largest = arr[0]

    arr.forEach((i) => {
        if (i > largest) {
            largest = i
        }
    });

    return largest;
}

console.log(largest([6, 13, 250, 3])) // => 250
console.log(largest([3, 5, 2, 8, 1])) // => 8
console.log(largest([-13, 40, 3, 0, 19, 22])) // => 40


// Write a function that takes an array of words and a character and returns each word that has that character present.

function lettersWithStrings(arr, str) {
    const v = [];

    for (var i = 0; i < arr.length; i++) {

        if (arr[i].includes(str) === true) {
            v.push(arr[i])
        }
        else { false }
    }
    return v
}


console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!")) // => ["$hello!", "test!"]
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))  // => ["C%4!", "Hey!"]
console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))  // => []


// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.


function isDivisible (num1, num2) {
    return (num1 % num2 === 0);
} 

// test data
console.log(isDivisible(4, 2)) // => true
console.log(isDivisible(9, 3)) // => true
console.log(isDivisible(15, 4)) // => false

