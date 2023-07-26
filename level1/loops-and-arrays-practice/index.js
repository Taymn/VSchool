// 1
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

computers = 0;
for  (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {computers++}
}
// console.log(computers)

//2
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
        // console.log("not old enough");
     } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        // console.log("old enough");
        }
    }

// 3

const light = (array) => {
    let sum = 0
    for (var i =0; i < array.length; i++) {
        sum += array[i]
    }
    return (sum % 2 === 0) ? "The light is off" : "The light is on";

}

[2, 5, 435, 4, 3]; // "The light is on"
[1, 1, 1, 1, 3]; // "The light is on"
[9, 3, 4, 2]; // "The light is off"


    console.log(light([2, 5, 435, 4, 3]))
    console.log(light([1, 1, 1, 1, 3]))
    console.log(light([9, 3, 4, 2]))