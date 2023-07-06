// 1
var firstName = "Adam"
console.log(firstName)

//2
var age = 38
console.log(age)

//3
if (38<40) {
    console.log("Adam is not middle aged")
}  else {
     console.log("Adam is middle aged")
} 

//4
var myProfessions = ["FastFood", "Soldier", "Officer", "Developer"]
console.log( myProfessions.length)

//5
var iAm = {
    Name: "Adam",
    Age: 38,
    Height: "60 in.",
    Weight: "230 lbs."
}
let object = iAm.Weight;
console.log(object)

//6
var officer = {
    Name: "Adam",
    Age: 38,
    isHealthy: true,
    isOverWeight: false,
}
var uniform = ["Patrol Cap", "BDU Top", "BDU Bottom", "Combat Boots"]
let combatReady = officer.isHealthy
console.log(combatReady)
let needsPT = officer['isOverWeight']
console.log(needsPT)

//7
let enviornment = "ok"

if (enviornment === "good"){
    console.log("I love my job!")
} else if (enviornment === "bad"){
    console.log("My job sucks!")
} else {
    console.log("Time to quit")
};

//7a
var sport = 'football'

if (sport === 'football'){
    console.log("football is fun")
} else {
    console.log("sports are not fun")
}

//8

for(var i = 0; i < 10; i++){
    console.log(i)
}

//9

var ID = document.getElementById("ID")

function handleButtonClick(){
    console.log("ID was clicked")
}

ID.addEventListener("click", handleButtonClick)
