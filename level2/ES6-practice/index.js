// # **`let` and `const`**

var name = "John"
var age = 101

function runForLoop(pets) {
    const petObjects = []
    for (var i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

// # **ES6 Arrow Functions**

// ### **Task 1**

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    // return arr.map(function(carrot) {
    //     return { type: "carrot", name: carrot }
    // })
    return arr.map(carrot => ({ type: "carrot", name: carrot }))
}
console.log(mapVegetables(carrots))

// ### **Task 2**

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    // return arr.filter(function(person) {
    //     return person.friendly
    // })
    return arr.filter(person =>(person.friendly))
}
console.log(filterForFriendly(people))

// ### **Task 3**

// function doMathSum(a, b) {
//     return a + b
// }
doMathSum = (a,b) => (a + b)

// var produceProduct = function(a, b) {
//     return a * b
// }
produceProduct = (a, b) => (a * b)
console.log(doMathSum(2,3))
console.log(produceProduct(2,3))

// ### **Task 4**

// Hi Kat Stark, how does it feel to be 40?

const person = {
    first: "Jane",
    last: "Doe",
    age: 40
};

function printString({first, last, age}) {
    return `Hi ${first} ${last}, how does it feel to be ${age}?`
}

console.log(printString(person))

// ### **Task 5**

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];

 function filterForDogs(arr) {
    // return arr.filter(animal => {
    //     if (animal.type === "dog") {
    //         return true
    //     } else {
    //         return false
    //     }
    // })

return arr.filter(animal =>(animal.type === "dog" ? true:false))
}
console.log(filterForDogs(animals))

// ### **Task 6**
// # **Template Literals**

const traveller = {
    name: "Janice",
    location: "Hawaii",
};

function printGreeting({name, location}){

return `Hi ${name}!

Welcome to ${location}.

I hope you enjoy your stay.  Please ask the president of ${location} if you need anything.`}

console.log(printGreeting(traveller))

