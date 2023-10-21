// const math = require('./math.js')
// const {sum, sub} = require('./math.js')
const sum = require('./math.js').sum
console.log(require('./math.js').sub(10,5))
const mult = require('./math2.js')
const {multiply, setFactor} = require('./math2.js')
const User = require('./user.js')

// console.log(math.sum(10,5))
// console.log(math.sub(10,5))
console.log(sum(10,5))
// console.log(sub(10,5))
// console.log(mult(10))
console.log(multiply(10))
setFactor(10)

console.log(multiply(10))
console.log(new User('steve', 10))