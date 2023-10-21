let factor = 2

// function multBy2(num) {
//     return num * factor
// }
function multiply(num) {
    return num * factor
}

function setFactor(newFactor){
    factor = newFactor
}

// module.exports = {mult, setFactor}
module.exports = {multiply, setFactor}