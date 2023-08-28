# **What is a JavaScript "Class"?**

The `class` keyword was introduced in ES6, and is just syntactical sugar over the constructor function & prototype paradigm we’re used to working with in ES5. While the new `class` syntax doesn't fundamentally change how JavaScript works under the hood (JavaScript remains a prototype-based language instead of an object-oriented language), it offers a cleaner syntax for creating objects and dealing with prototypal inheritance.

Before continuing with this post, it would help to have a grasp on JavaScript's prototype and prototypal-inheritance system. If those concepts are a little hazy, check out the post of [Prototypes and Prototypal Inheritance](https://coursework.vschool.io/prototypes/).

---

# **How do I use `class`?**

We are familiar with using constructor functions in ES5:

```jsx
function Vehicle(make, model) {
    this.make = make;
    this.model = model;
}

Vehicle.prototype.drive = function () {
    console.log("vroom");
};

```

We can achieve this same thing using ES6 classes:

```jsx
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    drive() {
        console.log("vroom");
    }
}

```

You could use this class to build an object the same way as before:

```jsx
const myCar = new Vehicle("Hyundai", "Entourage");

```

This new syntax is great for a few reasons.

- It's similar to the syntax in other object-oriented languages.
- It helps us keep a separation between our methods and our object properties.
- It's cleaner.

### **Inheritance using `extends`**

"Vehicle" describes lots of different forms of transportation. If we needed to make a few other classes that were more specific than just "Vehicle" (such as "Car" or "Motorcycle"), we *could* create a new class that redefines all the same properties from "Vehicle" again:

```jsx
class MotorCycle {
    constructor (make, model, hasSideCar){
        this.make = make;
        this.model = model;
        this.hasSideCar = hasSideCar;
    }

    drive() {
        console.log("vroom");
    }
}

```

There's a few issues with this code though:

1. It repeats all the same constructor process as we had in the `Vehicle` class.
2. It repeats the `drive()` method. If we wanted to change the `drive` method for all vehicles (including motorcycles), we'd need to change it in multiple places.
3. It has no connection with the `Vehicle` class. If we add methods to `Vehicle` they won't be accessible to `Motorcycle`.

Enter inheritance using `extends`! The general syntax is

```jsx
class Child extends Parent {...

```

This essentially sets up a prototype chain between the `Child` constructor and the `Parent` constructor. There's a bit more to keep track of, but to start, this is what we're looking at:

```jsx
// There is a problem with this code! See below.
class MotorCycle extends Vehicle {
    constructor (hasSideCar){
        this.hasSideCar = hasSideCar;
    }
}

```

If we tried to use this MotorCycle constructor, we would get `ReferenceError: this is not defined`. Any class that `extends` another class needs to call a built-in `super()` function. The `super()` function calls the parent class's `constructor` method and adds all the properties to the child class's `this`, and then takes what's being built and continues building it in the child class. When we call `super()`, we need to pass all the properties the parent class's constructor method expects to it.

```jsx
class MotorCycle extends Vehicle {

    // Motorcycles need to have make, model, and hasSideCar properties, so we pass them into the constructor
    constructor(make, model, hasSideCar) {

        // We call the Vehicle's constructor method and pass the make and model, since that's what a Vehicle expects
        super(make, model);

        // We add an additional property to the object we're creating.
        this.hasSideCar = hasSideCar;

        // We don't need to define drive() again because it's already part of the parent class.
        // The motorcycle object will look to the Vehicle prototype for the drive() method if it
        // ever needs it.
    }
}

```

We pass all three properties into the constructor method, then call `.super()`, passing the two properties that the parent class's constructor needs.

You might be thinking to yourself, "Maaaaaaan, I don't want to have to remember which order all my properties are in."

If you pass your properties in as an object, you don't! Let's re-write everything we have using this technique:

```jsx
class Vehicle {
  constructor(args) {
    this.make = args.make;
    this.model = args.model;
  }

  drive(){
    console.log("vroom");
  }
}

class MotorCycle extends Vehicle {
  constructor (args){
    super(args);
    this.hasSideCar = args.hasSideCar;
  }
}

var motorCycle = new MotorCycle({make:"Honda", model:"Shadow", hasSideCar:false});

console.log(motorCycle.hasSideCar);  // false
console.log(motorCycle.make);        // Honda
console.log(motorCycle.model)        // Shadow
motorCycle.drive()                   // vroom

```

One last improvement using ES6 destructuring:

```jsx
class Vehicle {
  constructor({make, model}) {
    this.make = make;
    this.model = model;
  }

  drive(){
    console.log("vroom");
  }
}

```

# **Conclusion**

JavaScript's `class` keyword can be both a blessing and a curse. Its simplified (and familiar, for those used to OOP) syntax makes setting up prototype chains with object instantiation a much more pleasant experience. On the other hand, it does obfuscate the underlying principles of prototypal inheritance and could make certain principles in JavaScript more difficult to understand.

That being said, you'll continue to use the `class` keyword constantly while learning to develop React applications, so spend some time familiarizing yourself with this awesome, fun new syntax!