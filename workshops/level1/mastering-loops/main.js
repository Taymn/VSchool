const readline = require("readline-sync"); // variable created to use readline-sync package from npm install readline-sync

const playerName = readline.question("Hello!  What is your name?"); // readline sync question that promps the user with a question.  Answer is saved to playerName variable

console.log(`Welcome ${playerName} to the RPG game!!! `); // consoles a message using the users playerName


//ES5  Function Expression
// function Character(name, healthPoints, attackPoints, inventory) {
//   this.name = name;
//   this.healthPoints = healthPoints;
//   this.attackPoints = attackPoints;
//   this.inventory = inventory;
//   this.printInventory = function () {
//     console.log(`Name: ${this.name}`);
//     console.log(`Inventory: ${this.inventory}`);
//   };
// }

let isGameRunning = true;
//ES6 - Class constructor
class Character {
  constructor(name, healthPoints, attackPoints, inventory) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPoints = attackPoints;
    this.inventory = inventory;
  }
  printInventory() {
    console.log(`Inventory: ${this.inventory}`);
  }
}

let playerInventory = ["bow", "sword", "axe", "rocket launcher"]; // global variable to hold the inventory for the user

// instantiating 1 hero and 3 enemies using Character constructor
const hero = new Character(playerName, 100, 5, playerInventory);
const enemy1 = new Character("Tricky Tim", 25, 2, ["Tooth", "Bracelet"]);
const enemy2 = new Character("Lulu", 36, 3, ["Sword", "Necklace"]);
const enemy3 = new Character("Mickey", 18, 1, ["Ears"]);

// console.log(hero);
// console.log(enemy1);
// console.log(enemy2);
// console.log(enemy3);

let enemies = [enemy1, enemy2, enemy3]; // creates an array of all instantiated enemies

// console.log(enemies);

// hero.printInventory(); // prints the inventory of the hero

// enemy1.printInventory();

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

while (isGameRunning) {
  let action = readline.question(
    'What do you want to do? Press [w] to walk, [I] to see your inventory or [q] to quit?',
    { limit: ["w", "i", "q"] }
  );
  // console.log(action);
  if (action === "w") {
    console.log("You choose to walk")

    let enemyChance = getRandomNumber(1, 4)
    console.log("Enemy Chance")

    if (enemyChance === 2) {
      let randomEnemyIndex = getRandomNumber(0 - 1, enemies.length)
      let currEnemy = enemies[randomEnemyIndex]
      console.log("An enemy has appeared");
      console.log(currEnemy);
      const options = ["fight", "run"];
      let fightOrRun = readline.keyInSelect(options, 
        "Do you want to fight or run??");
      console.log(options[fightOrRun])
      if (options[fightOrRun] === "fight") {
        fight();
      } else if (options[fightOrRun] === "run") {
        run();
      }
    }


  } else if (action === "i") {
    hero.printInventory();
  } else if (action === "q") {
    console.log("You choose to quit")
    isGameRunning = false;
  }
}

function fight() {
  console.log("You Chose to FIGHT");
}

function run() {
  console.log("You Chose to RUN");
}





