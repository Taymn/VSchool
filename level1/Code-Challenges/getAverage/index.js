function getAverage(arr) {
    // Your code here
    
    let sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length

}
  console.log(getAverage([1, 2, 3, 4, 5]))// Expected Output: 3
  console.log(getAverage([10, 20, 30, 40, 50]))// Expected Output: 30
