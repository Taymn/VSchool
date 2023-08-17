const addBaddie = document.getElementById("submit")

addBaddie.addEventListener("click",()=>{

//const for 3 baddies to pull values

const Goombas = document.getElementById("goombasInput").value
console.log(Goombas)
const Bobboms = document.getElementById("bobbomsInput").value
console.log(Bobboms)
const Cheeps = document.getElementById("cheepsInput").value
console.log(Cheeps)

//create element to display values as a total

var total = document.getElementById('total')
var totalAmount = Goombas*5 + Bobboms*7 + Cheeps*11

//add to the textContent

total.textContent = "Total: "+totalAmount

// totalAmount += 2

console.log(totalAmount)
})