// JavaScript Objects Part 1

// key: value
// var person = {
//     name: "Rick",
//     age: 70,
//     friends: ["Morty", "Joe", "Sam", "Samantha"], 
//     address: {
//         street: "123 street",
//         city: "Somewhere"
//     }
// }

// // two notations for accessing an objects data
// // Dot Notation "."

// // console.log(person.name)
// // console.log(person.age)
// // console.log(person.friends)
// // console.log(person.address.street)

// //Bracket Notation []

// // console.log(person["name"])
// // console.log(person["address"]["city"])

// //////////////
// // EXERCISE //

// // Find 2 real world things you can describe in the form of an Object.  
// // Give those objects 1 of each data type (string, number, boolean, array, object)
// // Practice console.log() items in those objects using both dot "." and bracket "[]" notation.

// // Object 1:
// var officer = {
//     name: "sir",
//     age: 35,
//     fitForDuty:  true,
//     uniform: ["patrol cap", "bdu top", "bdu bottom", "combat boots", "sidearm", "radio" ],
//     personelID: {
//         rank: "Sergeant",
//         sN: 123,
//         post: "base",
//         callSign: "base"
//     }
// }

// console.log(officer.uniform[4])
// console.log(officer["personelID"]["callSign"])

// // Object 2:
// var car = {
//     condition: "fair",
//     miles: 100000,
//     maintained: true,
//     features: ["2 door", "automatic", "gasoline", "cruize control"],
//     details: {
//         year: 2016,
//         make: "kia",
//         model: "forte"
//     }

// }

// console.log(car["miles"])
// console.log(car.details.make)

// Javascript Objects Part 2

var car = {
    type: "Honda",
    make: "Civic",
    wheels: 4,
    honksound: "BLLEERRP",
    honk: function(){
        console.log(this.honksound)
    }
}

// car.hashadaccident = true
// console.log(car)

// Objects can hold functions - METHOD

car.honk()

// "this"

// Objects and Arrays
    // Passed by reference
var otherCar = car

otherCar.type = "Jeep"

console.log(car)

