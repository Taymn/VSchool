
const readline = require("readline-sync");

/* Player */
const adventurer = {
    HP: 100,
    attPwr: 20,
}

/* Enemies */
let enemies =
    [{
        name: "Knight",
        HP: 30,
        attPwr: 20
    },
    {
        name: "Bandit",
        HP: 20,
        attPwr: 10
    },
    {
        name: "Guard",
        HP: 50,
        attPwr: 15
    }]


/* 1. Console must greet player with a fun message */
console.log("Welcome to my RPG");
readline.prompt();

/* 2. Console must ask for the player's name and store it  */
const name = readline.question("What is your name, Adventurer? ");
console.log(`Hope that you are ready for a Colossal Adventure, ${name}!`);
console.log(`${name} has HP of ${adventurer.HP} and attPwr is ${adventurer.attPwr}`)
readline.prompt();

/* 3. Walking: Boolean  */
let walk = false
let wildEnemy = false

let walking = readline.keyIn('press [w] to walk \n', { limit: 'w' }, walk = true);

while (walk === true) {
    const walkOrEnemy = Math.floor(Math.random() * 4) + 1
    if (walkOrEnemy === 1) {
        wildEnemy = true
        walk = false
        enemyFound()
    }
    else {
        console.log("walking...")
        readline.prompt(), walk = true;
    }
}

/* 4. If a wild enemy appears: functions and objects */

//determines which enemy will appear
function enemyFound() {

    while (wildEnemy === true) {
        let enemyType = Math.floor(Math.random() * enemies.length)
        console.log("ENEMY FOUND FUNCTION")
        let attacking = readline.keyIn('press [a] to attack the ' + enemies[enemyType].name + ' or press [r] to escape. \n', { limit: 'a, r' });
        //Ask player to fight or escape
        if (attacking === 'a') {
            let advenAttPwr = Math.floor(Math.random() * 100 % (adventurer.attPwr))
            console.log('You attacked ' + enemies[enemyType].name + ' .')
            console.log("Enemy is hit for " + advenAttPwr + ".")
            enemies[enemyType].HP = enemies[enemyType].HP - advenAttPwr
            console.log(enemies[enemyType].name + "'s HP:" + enemies[enemyType].HP)
            readline.prompt();
            fight(enemies[enemyType])

        } else if (attacking === 'r') {
            escape(enemies[enemyType])
        }
    }
}

// Escape Function
function escape(boss) {
    let escChance = Math.floor(Math.random() * 2) + 1
    console.log("You have entered ESCAPE FUNCTION")
    if (escChance === 1) {
        wildEnemy = false
        attack = false
        console.log("You have escaped... This fight.")
        readline.prompt(), walk = true;
    } else {
        attack = true
        console.log(`Escape failed. Prepare to face ${boss.name}!`)
        readline.prompt()
        fight(boss)
    }
    //After the player attacks or runs, the enemy attacks back for a random damage amount
    console.log(`Attacked by ${boss.name}`)
    let enemyAttPwr = Math.floor(Math.random() * 100 % (boss.attPwr))
    adventurer.HP = adventurer.HP - enemyAttPwr
    console.log("Enemy Attacked for " + enemyAttPwr + ".")
    console.log(`${name}'s HP: ${adventurer.HP}`)
    readline.prompt();
}

// Fight Function
function fight(boss) {
    console.log("FIGHT FUNCTION")
    console.log(`Fight ${boss.name}`)
    readline.prompt()

    while (adventurer.HP > 0 && boss.HP > 0) {
        let enemyAttPwr = Math.floor(Math.random() * 100 % (boss.attPwr))
        adventurer.HP = adventurer.HP - enemyAttPwr
        console.log(`${boss.name} Attacked for ${enemyAttPwr}.`)
        console.log(`${name}'s HP:${adventurer.HP}`)
        let advenAttPwr = Math.floor(Math.random() * 100 % (adventurer.attPwr))
        boss.HP = boss.HP - advenAttPwr
        console.log(`You attacked ${boss.name} for ${advenAttPwr}.`)
        console.log(`${boss.name}'s HP: ${boss.HP}`)
        readline.prompt();
    }
    if (adventurer.HP <= 0) {
        console.log(`Adventurer ${name} was found unworthy.`)
        process.exit()
    } else if (boss.HP <= 0) {
        for (var i = enemies.length; i >= 0; i--){
            (enemies[i] === -1)
        }
        console.log(`${boss.name} is defeated!`)
    } else if (Array.of(enemies) === -1) {
        console.log(`Adventurer ${name} has conquered all opponents!`)
    }
}


// If attacking, a random amount of damage will be dealt between a min and max

 // if(attacking & mathrndm === 1){
    //     fight('BIG KNIGHT')
    // }
    
        // wildEnemy Long Version

        // if (enemyType === 1) {
        //     fight(enemies[0])
        //     enemyType = ("Enemy Knight")
        // }
        // else if (enemyType === 2) {
        //     fight(enemies[1])
        //     enemyType = ("Enemy Bandit")
        // }
        // else if (enemyType === 3) {
        //     fight(enemies[2])
        //     enemyType = ("Enemy Guard")
        // }
        // console.log("ENEMY FOUND FUNCTION")