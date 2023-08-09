
const readline = require("readline-sync");

/* 1. Console must greet player with a fun message */
console.log("Welcome to my RPG");
readline.prompt();

/* 2. Console must ask for the player's name and store it  */
const name = readline.question("What is your name, Adventurer? ");
console.log(`Hope that you are ready for a Colossal Adventure, ${name}!`);
console.log(" ")
readline.keyIn('At any time, press [p] to check your stats. Try it now.\n', {limit: 'p' })
console.log(" ")

/* Player */
const adventurer = {
    HP: 100,
    attPwr: 20,
    Inventory: [],
    
    printInventory(){
        console.log(`Name:${name}`);
        console.log(`HP:${this.HP}`);
        console.log(`Attack Power:${this.attPwr}`);
        console.log(`Inventory:${this.Inventory}`); 
    }
}
adventurer.printInventory();
console.log(" ")
readline.prompt();

// Items
droppedItem = ["Potion"]

/* Enemies */
let enemies =
    [{
        name: "Knight",
        HP: 30,
        attPwr: 20,
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


/* 3. Walking: Boolean  */
let walk = false
let wildEnemy = false


while (adventurer.HP > 0 && enemies.length > 0) {
    let walking = readline.keyIn('press [w] to walk \n', { limit: 'w , p'});
    if (walking === 'w'){
        while(wildEnemy === false){
            const walkOrEnemy = Math.floor(Math.random() * 4) + 1
            if (walkOrEnemy === 1) {
                wildEnemy = true
                walk = false
                enemyFound()
            }
            else {
                console.log(" ")
                console.log("walking... press enter to continue")
                readline.prompt(), walk = true;
            }
        }

    } else if (walking === 'p'){
        console.log(" ")
        adventurer.printInventory()
        console.log(" ")
    }
}

/* 4. If a wild enemy appears: functions and objects */

//determines which enemy will appear
function enemyFound() {

    while (wildEnemy === true) {
        let enemyType = Math.floor(Math.random() * enemies.length)
        console.log("A "+enemies[enemyType].name+" has been spotted")
        let attacking = readline.keyIn('press [a] to attack the ' + enemies[enemyType].name + ' or press [r] to escape. \n', { limit: 'a, r,p' });
        console.log(" ")

        //Ask player to fight or escape
          if (attacking === 'p'){
            adventurer.printInventory()
            console.log(" ")
// BUG rerolls the enemy
            }else if (attacking === 'a') {
            let advenAttPwr = Math.floor(Math.random() * 100 % (adventurer.attPwr))
            console.log(" ")
            console.log('You attacked ' + enemies[enemyType].name + ' .')
            console.log("Enemy is hit for " + advenAttPwr + ".")
            enemies[enemyType].HP = enemies[enemyType].HP - advenAttPwr
            console.log(enemies[enemyType].name + "'s HP:" + enemies[enemyType].HP)
            readline.prompt();
            fight(enemies[enemyType])
            
            // create new enemy
            } else if (attacking === 'r') {
                escape(enemies[enemyType])
            
        }
    }
}

// Escape Function
function escape(boss) {
    let escChance = Math.floor(Math.random() * 2) + 1
    if (escChance === 1) {
        escapeHit(boss)
        wildEnemy = false
        console.log("You have escaped... This fight.")
        readline.prompt(), walk = true;
    } else {
        escapeHit(boss)
        console.log(`Escape failed. Prepare to face ${boss.name}!`)
        readline.prompt()
        fight(boss)
    }
    //After the player attacks or runs, the enemy attacks back for a random damage amount
}

function escapeHit(boss){
    console.log(`Attacked by ${boss.name}`)
    let enemyAttPwr = Math.floor(Math.random() * 100 % (boss.attPwr))
    adventurer.HP = adventurer.HP - enemyAttPwr
    console.log(`${boss.name} attacked for `+enemyAttPwr+ ".")
    console.log(`${name}'s HP: ${adventurer.HP}`)
    readline.prompt();

}

// Fight Function
function fight(boss) {
    // console.log("FIGHT FUNCTION")
    console.log(`Fight ${boss.name}`)
    readline.prompt()

    while (adventurer.HP > 0 && boss.HP > 0) {
        let enemyAttPwr = Math.floor(Math.random() * 100 % (boss.attPwr))
        adventurer.HP = adventurer.HP - enemyAttPwr
        console.log(`${boss.name} Attacked for ${enemyAttPwr}.`)
        console.log(`${name}'s HP:${adventurer.HP}`)
        console.log(" ")
        let advenAttPwr = Math.floor(Math.random() * 100 % (adventurer.attPwr))
        boss.HP = boss.HP - advenAttPwr
        console.log(`You attacked ${boss.name} for ${advenAttPwr}.`)
        console.log(`${boss.name}'s HP: ${boss.HP}`)
        readline.prompt();
    }
    if (adventurer.HP <= 0) {
        console.log(`Adventurer ${name} was found unworthy.`)
        process.exit()
    } if (boss.HP <= 0) {
        let arr = [...enemies]
        let newEnemyArray = arr.filter(item => {
            if (item.name !== boss.name) {
                return item
            }
        })
        enemies = newEnemyArray
        adventurer.HP = adventurer.HP + 10
        console.log(`${boss.name} is defeated! Item drop recieved.`)
        console.log(`${name}'s HP:${adventurer.HP}`)
        adventurer.Inventory.push(droppedItem)
        console.log(" ")
    } if (enemies.length === 0) {
        wildEnemy = false
        console.log(`Adventurer ${name} has conquered all opponents!`)
        process.exit()
    }
    console.log("Enemies Left: "+ enemies.length)
    console.log(" ")
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