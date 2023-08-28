class Char {
    constructor(name, totalCoins, status, hasStar = false) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
    }

    setName(namePicked) {
        if (namePicked === "Mario") {
            this.name = "Mario"

        } else if (namePicked === "Luigi") {
            this.name = "Luigi"
        }
    }

    gotHit() {
        if (this.status === 'Powered Up') {
            this.status = 'Big'
        }
        else if (this.status === 'Big') {
            this.status = 'Small'
        }
        else if (this.status === 'Small') {
            this.status = 'Dead'
        }
        player.print()
        gameOver()
    }

    gotPowerup() {
        if (this.status === 'Small') {
            this.status = 'Big'
        }
        if (this.status === 'Big') {
            this.status = 'Powered Up'
        }
        if (this.status === 'Powered Up') {
            this.hasStar = true
        }
        player.print()
    }

    addCoin() {
        this.totalCoins++
        player.print()
    }

    print() {
        console.log(`
        Name: ${this.name}
        Status: ${this.status}
        Coin: ${this.totalCoins}
        Star Power: ${this.hasStar}
        `)
    }
}


function getRandomName() {
    let num = Math.floor(Math.random() * 2)
    if (num === 0) {
        player.setName("Mario")
    } else if (num === 1) {
        player.setName("Luigi")
    }
}

const player = new Char("name", 0, "Big", false)
getRandomName()
player.print()


function randomRange() {
    let num = Math.floor(Math.random() * 3)
    console.log(num)
    if (num === 0) {
        if (player.hasStar === true) {
            player.hasStar = false
        } else {
            player.gotHit()
        }
    } else if (num === 1) {
        player.gotPowerup()
    } else if (num === 2) {
        player.addCoin()
    }
}


var intervalId = setInterval(randomRange, 1000);
function gameOver() {
    if (player.status === "Dead") {
        clearInterval(intervalId)
    }
}

