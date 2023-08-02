const readline = require("readline-sync");
const name = readline.question("What is your name? ");

/* Intro Dialogue */
console.log("Hi " + name + "! Welcome to my game.");
console.log("These are the rules:");
console.log("1. Find the key, or");
console.log("2. Open the door");
console.log("3. Put your hand in the hole");
console.log("The result depends on if you have the key.");
console.log("Having the key opens the door!");
console.log("But no key will kill you...");

/* Player Choices (looping question) */
let item = "key"
let findKey = "find key"
let putHandInHole = "put hand in hole"
let pocket = []
let living = true
let playAgain = false

/*while loop - if/else statement. Ends when condition is not met*/
while (living === true) {
    console.log("Choose: \n(1) find key or \n(2) put hand in hole or \n(3) open door")
    let choices = readline.question("What is your choice?\n");
    playAgain = false

    /*Swicth case method*/
    switch (choices) {
        case "1":
            pocket.push(item),
                console.log("You have choosen to find key.");
            console.log("Key obtained!")
            break;
        case "2":
            console.log("You have choosen to put hand in hole.");
            living = false
            console.log("You Died")
            break;
        case "3":
            console.log("You have choosen to open the door.");
            if (pocket[0] === "key") {
                while (playAgain === false) {
                    console.log("Door is open.")
                    let replay = readline.question("You have ecasped. Play again? \nY or N\n").toLowerCase()
                    switch (replay) {
                        case "y":
                            playAgain = true
                            pocket = []
                            break;
                        case "n":
                            console.log("Thanks for playing.")
                            living = false
                            playAgain = true
                            break;

                        default:
                            ("You have ecasped. Play again? \nY or \nN")

                            break;
                    }
                }
            } else {
                console.log("Door is locked.")
            }
            break;
        default:
            console.log("Please select either 1, 2, or 3.")
            break;
    }
}

/* Check for Key */
/* (while loop) hand in hole: key present - open door, no key, dead */
