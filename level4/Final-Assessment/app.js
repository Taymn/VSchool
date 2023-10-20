/*
Write a function called findLongestWord that takes in a string and returns the length of the longest word in the string. Assume that the input string consists of lowercase letters and spaces only. Use the provided code to test your solution.
*/

/* PSEUDOCODE */

 function findLongestWord(str) {
  var split = str.split(" ")
console.log(split)
  var length = 0

  for (let i = 0; i < split.length; i++){
    if(split[i].length > length){
      length = split[i].length
    }
  }
  return length
} 

// longestWord = []
// function findLongestWord(str) {
//     // Your code here
//     for(var i = 0; i < str.length; i++) {
//         if(str > str.length  ){
//             longestWord.push(str)
//         }
//     }
//     return longestWord

//   }
  
//   console.log(findLongestWord("I love programming")); // Expected Output: 11
  console.log(findLongestWord("JavaScript is awesome")); // Expected Output: 10