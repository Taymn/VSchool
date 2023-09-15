// Challenge 1
// Your task is to implement the solution function to sort the array in ascending order, while preserving the original index positions of -1 values. Write a function solution(a) that takes in an array a and returns a new array with the following conditions:
// All non -1 values in the array should be sorted in ascending order.
// The -1 values should retain their original index positions in the sorted array.

function solution(arr) {
    //create copy of test to manipulate
    const newArr = [...arr];
    //remove values !== -1 of copy
    const notOne = newArr.filter(arr => arr !== -1);
    // sort copy into assending order
    const sortedNotOne = notOne.sort((a, b) => a - b);

    let sortedIndex = 0;
    for (var i = 0; i < newArr.length; i++) {
        // insert sorted copy while preserving the indexOf -1 of test
        if (newArr[i] !== -1) {
            newArr[i] = sortedNotOne[sortedIndex];
            sortedIndex++;
        }
    }
    return newArr
}


// console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
// console.log(solution([5, 3, 1]))
// console.log(solution([-1, -1, -1, -1]))
// console.log(solution([100, -1, 50, -1, 75]))

// Challenge 2
// Write a JavaScript function called **`countVowels`** that takes a string as input and counts the number of vowels (a, e, i, o, u) in the string. The function should return the count.

// Implement the **`countVowels`** function using either the provided example solutions or your own solution.

const input1 = 'Hello, World!';
const input = 'Counting Vowels';

function countVowels(str) {
    //str is case sensitive
    str = str.toLowerCase();
    // array of vowels
    const vowels = ["a", "e", "i", "o", "u"]
    // initial count
    let count = 0
    // loop through str chars
    for (var i = 0; i < str.length; i++) {
        //checks if char is a vowel
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

// console.log(countVowels(input1));
// console.log(countVowels(input));

// Write a JavaScript function called **`findSumOfTwo`** that takes in an array of numbers and a target number. The function should find two numbers in the array that add up to the target number and return them as an array. If there are multiple pairs that satisfy the condition, return any one of them. If no such pair exists, return an empty array. 
// Implement the **`findSumOfTwo`** function using either the provided example solutions or your own solution. 

const sum = []

function findSumOfTwo(numbers, target) {
    for (var i = 0; i < numbers.length; i++) {
        for (var j = 1; j < numbers.length; j++) {
            if ((numbers[i] + numbers[j]) === target) {
                return [numbers[i], numbers[j]]
            }
        }
    }
    return []
}

console.log(findSumOfTwo([2, 4, 7, 11, 15], 9)); // Output: [2, 7] 
console.log(findSumOfTwo([5, 12, 3, 9, 1], 8)); // Output: [3, 5]