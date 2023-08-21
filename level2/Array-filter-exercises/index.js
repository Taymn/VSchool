// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

function fiveAndGreaterOnly(arr) {

    // const fiveAndGreaterOnly = arr.filter(arr => {
    //     if(arr >= 5){
    //         return arr
    //     }
    // })

    return arr.filter(arr => arr >= 5 ? arr : null)
}

// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

// 2) Given an array of numbers, return a new array that only includes the even numbers.

function evensOnly(arr) {
    // const evensOnly = arr.filter(arr => {
    //     if (arr % 2 === 0) {
    //         return arr
    //     }
    // })

    return arr.filter(arr => arr % 2 === 0 ? arr : null)
}
// test
console.log(evensOnly([3, 6, 8, 2]));

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

function fiveCharactersOrFewerOnly(arr) {
    // const fiveCharactersOrFewerOnly = arr.filter(str => {
    //     if(str.length <= 5){
    //         return str
    //     }
    // })
    // return fiveCharactersOrFewerOnly

    //  ES6:Terinary            if statement:   if true, else
    return arr.filter(str => str.length <= 5 ? str : null)
}
// test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));

//   4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

function peopleWhoBelongToTheIlluminati(arr) {
    //     const peopleWhoBelongToTheIlluminati = arr.filter(arr => {
    //             if(arr.member !== true){
    //                 return arr
    //             }
    //     })
    //     return peopleWhoBelongToTheIlluminati
    return arr.filter(arr => arr.member !== true)
}

// test
console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));

// 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

function ofAge(arr) {
    // const ofAge = arr.filter(person => {
    //     if(person.age >= 18){
    //         return person
    //     }
    // })
    // return ofAge
    return arr.filter(person => person.age >= 18 ? person : null)
}
// test
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));

