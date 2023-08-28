// Constructor Functions
// blueprint for generate js objects with the same shape

// Constructor is "what it is to be car"
// function Car(make, model){
//     this.make = make
//     this.model = model
// }

// What do cars "Do"
// Car.prototype.honk = function(){
//     console.log("Honk")
// }

// // instantiate
// const jeep = new Car("jeep", "cherokee")
// const mazda = new Car("mazda", "3")

// mazda.honk()


// ES6 Classes
class Vehicle {
    constructor(make, model, honkSound){
        this.make = make
        this.model = model
        this.honkSound = honkSound
    }
    
    honk(){
        console.log(this.honkSound)
    }
    
    drive(){
        console.log("Vrooom")
    }
}

// Don't repeat yourself . DRY

class Motorcycle extends Vehicle {
    constructor(make, model, honkSound, hasSideCar){
        super(make, model, honkSound)
        this.hasSideCar = hasSideCar
    }
}


const jeep = new Vehicle("jeep", "cherokee", "Veerp")
// jeep.honk()

const harley = new Motorcycle("Harley", "davidson", "Honkey", true)

harley.honk()

