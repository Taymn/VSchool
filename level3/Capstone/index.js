// Code Challenge Level Assessment

// Write a function that takes a list of integers and returns the sum of all the even numbers in the list.

//var Array = [1,2,3,4,5,6]
var sum = 0

function findSum(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum = sum + array[i]
        }
    } return sum
}
console.log(findSum([1,2,3,4,5,6,7,8]))
console.log(findSum([10,20,30,40,50,60]))

