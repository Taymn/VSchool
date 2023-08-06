
var num = []

function fizzbuzz() {


    for (var i = 1; i <= 100; i++) {
        if (i % 3 !== 0)
            if (i % 5 !== 0) {
                num.push(i)
            }

        if (i % 15 === 0) {
            num.push("fizzbuzz")
        }
        else if (i % 3 === 0) {
            num.push("fizz")
        }
        else if (i % 5 === 0) {
            num.push("buzz")
        }

    }
    return num
}

console.log(fizzbuzz(num))


var counts = {};

for (var i = 0; i < num.length; i++ ) 
counts[num[i]] = (counts[num[i]] + 1) || 1;

console.log("fizzbuzz: "+counts['fizzbuzz']);
console.log("fizz: "+counts['fizz']);
console.log("buzz: "+counts['buzz']);