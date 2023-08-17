// Higher order array methods
// .map()

// const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// const result = arr.map(function(num){ // arr[i]
//     return num + 10
// })

// const result = arr.map(num => num + 10)

const users = [
    { name: "joe" },
    { name: "steve" },
    { name: "lisa" }
]

const result = users.map(function(user){
    return user.name
})

console.log(result)