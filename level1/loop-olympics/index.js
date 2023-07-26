//Preliminaries

let arr = [0,1,2,3,4,5,6,7,8,9]
for (var i = 0; i < arr.length; i++) {
    console.log(i)
};

for ( var i = arr.length - 1; i > -1; i--) {
    console.log(i)
};

const fruit = ["banana", "orange", "apple", "kiwi"]

for ( var i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
};

// Bronze

function retArr(arr){

    var newArr = []

    for (var i = 0; i < 10; i++) {
        if (arr[i] < 10 && arr[i] > -1){
            newArr.push(arr[i])}
    }
    return newArr;
}
  console.log(retArr([0,1,2,13,4,6,7,8,9,15]));

  function findEvenNum(arr){ 
    var even = []
  for (var i = 0; i < 101; i++){
    if (arr[i] % 2 === 0 ){
        even.push(arr[i])
    }
  }
    return even
}

console.log(findEvenNum([11, 22, 33, 44, 55, 66, 77, 88, 99, 100]));

const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

function otherFruit(fruits){
    var oddFruit = [];
    for ( var i = 0; i < fruits.length; i++) {
        // if(fruits.indexOf(fruits[i]) % 2 !== 0){
        //     oddFruit.push(fruits[i]);
            if(i % 2 !== 0){
                oddFruit.push(fruits[i]);
        }
    }
    return oddFruit
}

console.log(otherFruit(["banana", "orange", "apple", "kiwi", "pear", "peach"]));
