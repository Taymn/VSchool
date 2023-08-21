// Make an array of numbers that are doubles of the first array

function doubleNumbers(arr) {
    // var doubleNumbers = arr.map(n => {
    //     return n * 2
    // })

    // return doubleNumbers
    return arr.map(n => (n * 2))
}


console.log(doubleNumbers([2, 5, 100]));

// 2) Take an array of numbers and make them strings

function stringItUp(arr) {
    // var stringItUp = arr.map(arr => {
    //     return arr.toString()
    // })
    // return stringItUp;
    return arr.map(arr => (arr.toString()))
}

console.log(stringItUp([2, 5, 100]));

// 3) Capitalize the first letter of each name and make the rest of the characters lowercase

function capitalizeNames(arr) {
    // var capitalizeNames = arr.map(arr => {
    //   return arr.charAt(0).toUpperCase() + arr.slice(1).toLowerCase()
    // });
    // return capitalizeNames

    return arr.map(arr => (arr.charAt(0).toUpperCase() + arr.slice(1).toLowerCase()))
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

//   4) Make an array of strings of the names

function namesOnly(arr) {
    // var names = arr.map(arr => {
    //     return arr.name
    // })
    // return names
    return arr.map(arr => (arr.name))
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

//   5) Make an array of strings of the names saying whether or not they can go to The Matrix

function makeStrings(arr) {
    // var ofAge = arr.map(arr =>{
    //     if(arr.age >= 18){
    //         return arr.name +" can go to The Matrix"
    //     } else {return arr.name +" is under age!!"}
    // })
    // return ofAge
    return arr.map(person => person.age >= 18 ? person.name + " can go to the Matrix" : person.name + " is under age")
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

//   6) Make an array of the names in h1's, and the ages in h2's

function readyToPutInTheDOM(arr) {
    // var h1 = arr.map(arr => {
    //     return (`<h1>${arr.name}</h1><h2>${arr.age}</h2>`)
    // })
    // return h1
    return arr.map(h1 => `<h1>${h1.name}</h1><h2>${h1.age}</h2>`)
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

