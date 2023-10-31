function extractUniqueCharacters(strings) {
    // use Set to store unique chars
    // var uniqueCharacters = new Set()
    var uniqueCharacters = []
    // Iterate through each word in the array
    for (let word of strings){
        console.log(uniqueCharacters)
        // Split the word into chars and add to set
        for (let char of word) {
            if(!uniqueCharacters.includes(char))
            // uniqueCharacters.add(char)
            uniqueCharacters.push(char)
        }
    }

    //Convert the set back to an array
    // let uniqueCharsArray = Array.from(uniqueCharacters)

    // return uniqueCharsArray
    return uniqueCharacters
}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars)

function sortByProperty(objects, propertyName) {
    return objects.sort((a,b) => (a[propertyName] - b[propertyName]))
}

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 28 },
];

const sortedByAge = sortByProperty(people, 'age');
console.log(sortedByAge);

function table(num){
    let table = []
    for(let i = 1; i < 11; i++ ){
        console.log(`${num} * ${i} = ${num * i}`)
    }
    return
}
console.log(table(7))