
function findEvenNumbers(arr) {
    //  return value
    var even = []

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 ){
        even.push(arr[i]) 
        }
    }
    //  start with 
        return even
}

// what am i returning


console.log(findEvenNumbers([1,2,3,4,5,6,7,8,9,10])) // Expected Output:  [2,4,6,8,10]
console.log(findEvenNumbers([11, 22, 33, 44, 55, 66, 77, 88, 99, 100])) // Expected Output:  [22, 44, 66, 88, 100]

/*Write a function called findEvenNumbersthat takes in an array of numbers and returns a new array containing only the even numbers from the input array. Can you implement this function using arrays and loops? Remember to consider the condition for determining even numbers.  Use the below code to test your solution.*/