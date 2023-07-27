// capilizeAndLowercase("HelLo") // => "HELLOhello"
var greet = "Hello"
var capilizeAndLowercase = greet.toUpperCase() + greet.toLowerCase()
console.log(capilizeAndLowercase)

// findMiddleIndex("Hello") // => 2
// findMiddleIndex("Hello World") // => 5
var string = "Hello"
var stringOne = "Hello World"
var findMiddleIndex = Math.floor(string.length/2)
var findMiddleIndexOne = Math.floor(stringOne.length/2)
console.log(findMiddleIndex)
console.log(findMiddleIndexOne)

// returnFirstHalf("Hello") // => "He"
// returnFirstHalf("Hello World") // => "Hello"
var word = "Hello"
var wordOne = "Hello World"
var returnFirstHalf = word.slice(0,2)
var returnFirstHalfOne = wordOne.slice(0,5)
console.log(returnFirstHalf)
console.log(returnFirstHalfOne)

// capilizeAndLowercase("Hello") // => "HEllo"
// capilizeAndLowercase("Hello World") // => "HELLO world"
var hi = "Hello"
var hiW = "hello world"
var firstHalf = hi.slice(0,2)
var firstHalfCaps = firstHalf.toLocaleUpperCase()
var lastHalf = hi.slice(2,5)
var capilizeAndLowercase = firstHalfCaps + lastHalf
console.log(capilizeAndLowercase)

// console.log("Hello".slice(0, 2).toLocaleUpperCase() + "Hello".slice(2, 5));

var firstHalfW = hiW.slice(0,5)
var lastHalfW = hiW.slice(6,11)
var firstHalfWCaps = firstHalfW.toLocaleUpperCase()
var capilizeAndLowercaseW = firstHalfWCaps +" "+ lastHalfW
console.log(capilizeAndLowercaseW)