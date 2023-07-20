function removeDuplicates(arr) {
    let num = [];
    for (i = 0; i < arr.length; i++) {
    if (num.indexOf(arr[i]) === -1) {
       num.push(arr[i]); 
    }
    }
    return num;
}



console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected output: [1, 2, 3, 4, 5]
console.log(removeDuplicates([5, 5, 5, 5, 5])); // Expected output: [5]