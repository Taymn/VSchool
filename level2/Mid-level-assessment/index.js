// ## **Challenge 1: Sorting an Array**

// Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.

function sortNumbers(numbers) {
return numbers.sort((a, b) => a - b);
}
// if negative, stays if poitive moves

// Example usage:
const numbers = [4, 2, 7, 1, 9, 5];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers);

// ## **Challenge 2: Mapping an Array**

// Write a function that takes an array of strings and returns a new array where each string is converted to uppercase.

function convertToUppercase(strings) {
    return strings.map(str => str.toUpperCase());
    }

    // Example usage:
const strings = ['hello', 'world', 'javascript'];
const uppercaseStrings = convertToUppercase(strings);
console.log(uppercaseStrings);

// Write a function that takes an array of numbers and returns a new array containing only the even numbers.

const arr = [4, 2, 7, 1, 9, 5];
const filteredEvenNumbers = filterEvenNumbers(arr)
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(filteredEvenNumbers);