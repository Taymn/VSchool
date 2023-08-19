const arr = [1, 2, 3, 4, 5, 6, 7, 8]



// .forEach
// const newArr = []

// arr.forEach(num => num % 2 === 0 && newArr.push(num))

// console.log(newArr)


// .find()
// const result = users.find(function(user){
//     if(user.name === "julie"){
//         return user
//     }
// })

// console.log(result)


const users = [
    { name: "joe" },
    { name: "julie" },
    { name: "rick" }
]

// .findIndex()
const userIndex = users.findIndex(function(user){
    if(user.name === "julie"){
        return true
    }
})

console.log(userIndex)
