
const readline = require("readline-sync");

/* 1. Console must greet player with a fun message */

// console.log("Welcome to my RPG");
// readline.prompt();

/* 2. Console must ask for the player's name and store it  */

// const name = readline.question("What is your name, Adventurer? ");
// console.log("Hope that you are ready for a Colossal Adventure, " + name + "!");
// readline.prompt();

/* 3. Walking  */

let walk = false
let wildEnemy = false

let walking = readline.keyIn('press [w] to walk \n', { limit: 'w' }, walk = true);
// console.log("walk: " + walk)

while (walk === true) {
    const walkOrEnemy = Math.floor(Math.random() * 4) + 1
    console.log(walkOrEnemy)
    if (walkOrEnemy === 1) {
        wildEnemy = true
        walk = false
        console.log("fight")
    } else {
        console.log("walking...")
       walking = readline.keyIn('press [w] to walk \n', { limit: 'w' }, walk = true);
    } 
}

/* 4. If a wild enemy appears */

while (wildEnemy === true) {
}