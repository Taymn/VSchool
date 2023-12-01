function isAnagram(arr, target){
let newArry = []
let newTgt = target.split('').sort().join('')
console.log(newTgt)
    //if string = target, push new array
    // loop through array to find length equal target
    //string.sort()
    for(var i = 0; i < arr.length; i++){
        let currTgt = arr[i].split('').sort().join('')
        console.log(currTgt)
        if (currTgt === newTgt){
          newArry.push(arr[i])
        }
    }
    return newArry
}

const words = ["listen", "silent", "pizza", "dpg", "ajdkdl"]
const targetWord = "enlist"

console.log(isAnagram(words, targetWord))

//write a function that takes an array of words and returns a new array of all the words that are 
// anagrams of the target