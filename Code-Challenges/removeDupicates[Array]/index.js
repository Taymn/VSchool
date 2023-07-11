var arr = [1, 2, 3, 4, 4, 5, 6, 2, 3]
var inst = [1,2,3,4,5,6]

function removeDuplicates(arr) {
    // Your code 
    arr.forEach(element => {
        if (!inst.includes(element)) {
            inst.push(element);
        }
    });
  }
  
  console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 6, 2, 3])); // Expected Output: [1, 2, 3, 4, 5, 6]
  console.log(removeDuplicates([10, 20, 30, 20, 40, 10])); // Expected Output: [10, 20, 30, 40]