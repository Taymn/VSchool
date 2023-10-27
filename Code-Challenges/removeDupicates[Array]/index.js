
// function removeDuplicates(arr) {
//     // Your code 
//     let num = [];
//     for ( i = 0; i < arr.length; i++) {
//     if (num.indexOf(arr[i]) === -1) {
//         num.push(arr[i]);
//    }
//  }
//  return num;
// }

// function removeDuplicates(arr){
//     const result = []
//     for (i = 0; i < arr.length; i++){
//         if(!result.includes(arr[i])){
//             result.push(arr[i])
//         }
//     }
//     return result
// }

function removeDuplicates(arr){
    return [...new Set( arr) ]
}
  
console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 6, 2, 3])); /*Expected Output: [1, 2, 3, 4, 5, 6]*/
console.log(removeDuplicates([10, 20, 30, 20, 40, 10]));    /* Expected Output: [10, 20, 30, 40]*/