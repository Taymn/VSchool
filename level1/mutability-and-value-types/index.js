// Mutability and Types


// Immutable - Cannot be changed => Passed by value
    // String
    // Numbers
    // Booleans
    var age = 10
    var otherAge = age
    otherAge = 12
    
    console.log(age)
    

// Mutable - Containers => Passed by Reference
    // Array
    // Object
    
    // var arr = [1, 2, 3, 4, 5]
    
    var person = {
        name: "harry",
        age: 12
    }

    // var newPerson = person
    // newPerson.hasWand = true 
    // console.log(person)  
    
    
// typeof - returns the type of the data immediately to its right
    console.log( typeof [1, 2, 3, 4] )