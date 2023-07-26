// JS Array Methods

// Full list can be found here: https://www.w3schools.com/jsref/jsref_obj_array.asp


// push - adds item(s) to the end of the array
    // arrOfFoods.push("cereal")
    // console.log(arrOfFoods)

// pop - removes item from the end of the array
    // arrOfFoods.pop()
    // console.log(arrOfFoods)

// unshift - adds item(s) to the beginning of the array
    // arrOfFoods.unshift("cereal")
    
// shift - removes item from the beginning of the array
    // arrOfFoods.shift()
    // console.log(arrOfFoods)

// concat
    // var colors1 = ["blue", "green"]
    // var colors2 = ["purple", "red"]
    // var newArr = colors1.concat(colors2)
    // console.log(newArr)
    
// indexOf
    // var pizzaIndex = arrOfFoods.indexOf("popcicle")
    // console.log(pizzaIndex)

// slice
    // var newArr = arrOfFoods.slice(1, 3)
    // console.log(arrOfFoods)

// join - Turns an array into a string
    // var name = "steve"
    // var splitName = name.split("")
    // var joinedName = splitName.join("")
    // console.log(joinedName)

// reverse
    // var name = "rick" // kcir
    // var splitName = name.split("")
    // var reversedArr = splitName.reverse()
    // var reversedName = reversedArr.join("")
    
    // var allAtOnce = name.split("").reverse().join("")
    // console.log(allAtOnce)
    
// splice - change the orignal array
var arrOfFoods = ["pancake", "egg", "ice cream", "pizza", "hamburger"]
    
arrOfFoods.splice(2, 2, "bacon", "ice cream")
console.log(arrOfFoods)
