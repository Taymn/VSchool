function extractUniqueCharacters(strings) {
    // use Set to store unique chars
    var uniqueCharacters = new Set()

    // Iterate through each word in the array
    for (let word of strings){
        // Split the word into chars and add to set
        for (let char of word) {
            uniqueCharacters.add(char)
        }
    }

    //Convert the set back to an array
    let uniqueCharsArray = Array.from(uniqueCharacters)

    return uniqueCharsArray
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