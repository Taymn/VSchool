<!-- Lecture -->

.map()
    returns: A new array the same size as the input array
    purpose: allows you to take an array of data and create a new array of data from it.
    

<!-- Document -->
const users = [
{ name: "joe" },
{ name: "steve" },
{ name: "lisa" }
]
const result = users.map(x => x.name)
console.log(result)
const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const result = arr.map(x => x + 10)
console.log(result)