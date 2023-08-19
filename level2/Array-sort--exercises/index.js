// 1) Sort an array from smallest number to largest

function leastToGreatest(arr) {
    // let leastToGreatest = arr.sort(function(a, b){
    //     return a - b
    // })
    // return leastToGreatest
    return arr.sort((a, b) => a - b)
}

console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

//   2) Sort an array from largest number to smallest

function greatestToLeast(arr) {
    // let greatestToLeast = arr.sort(function(b, a){
    //     return a - b
    // })
    // return greatestToLeast
    return arr.sort((b,a) => a - b )
}

console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

// 3) Sort an array from shortest string to longest

function lengthSort(arr) {
// let lengthSort = arr.sort(function(a, b){
//      return(a.length - b.length)
//   })
//   return lengthSort
return arr.sort((a, b) => (a.length - b.length))
}

console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

// 4) Sort an array alphabetically

function alphabetical(arr) {
//     let alphabetical = arr.sort(function(a, b){
//         return (a.localeCompare(b))
//     })
//     return alphabetical
return arr.sort((a, b) => (a.localeCompare(b)))
}

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));

// 5) Sort the objects in the array by age

function byAge(arr){
//     let byAge = arr.sort(function(a, b){
//        return a.age - b.age
//     })
//     return byAge
return arr.sort((a, b) => (a.age - b.age))
  }
  
  console.log(byAge([
      { name: "Quiet Samurai", age: 22 },
      { name: "Arrogant Ambassador", age: 100 },
      { name: "Misunderstood Observer", age: 2 },
      { name: "Unlucky Swami", age: 77 }
    ]));