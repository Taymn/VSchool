// ES6 Part 1


// const and let

// var name = "steve"

// const firstName = "joe"
// firstName = "steve"
// let age = 12
// age = 13

// Global, Local, Bracket
// function someFunc(){
//    let a
//    if(2 === 2){
//        a = "hello"
//    }
//    console.log(a)
// }

// someFunc()

// spread and rest (gather)
    // Syntax:  ...
// function maxNumber(...nums){
//     console.log(nums)
// }

// maxNumber(0, 3, 58, 20, 200, 30)

// objects and arrays
// const colors1 = ["red", "blue"]
// const colors2 = ["yellow", "green"]

// const allColors = [...colors1, ...colors2]

// console.log(allColors)

// const person = {
//     name: "rick",
//     age: 50
// }

// const personCopy = { ...person }
// console.log(personCopy)


// template literals
// const name = "joe"
// // "hi " + name
// const greeting = `hi ${name}`
// console.log(greeting)

// import & export
// require()
// module.exports


// ES6 part 2

// fat arrow functions
// function sum(){
    
// }

// const sum2 = function(){
    
// }

// const sum2ES6 = word => {
//     console.log(`ES6 is ${word}!`)
//     return word
// }

// addEventListener("click", () => {
    
// })


// object literals
// const blue = "blue"
// const green = "green"
// const red = "red"

// const colors = { red, green, blue }

// console.log(colors)

// object destructuring
// const user = {
//     username: "joe123",
//     age: 20,
//     _id: "f892jf2jf98j39fj"
// }

// const { _id, username, age } = user

// const names = ["john", "betty", "nick"]

// const [john, betty, nick] = names
// console.log(item2)


// default parameters

// function sum(a = 5, b = 10){
//     return a + b
// }

// console.log(sum(7, 5))