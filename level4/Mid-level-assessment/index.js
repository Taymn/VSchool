/*
Write a function called filterAnagrams that filters an array of words to find and return an array containing only the words that are anagrams of a given target word.
*/

function areAnagrams(word1, word2) {
    return word1.split('').sort().join('')
        === word2.split('').sort().join('');
}

function filterAnagrams(arr, target) {
    return arr.filter(word => areAnagrams(word, target));
}
/*
ck if two words are angrms by srtg chars & compg srtd strs.
filter through words arr to id angrms of tgt
filtered angrms are strd in var => logged
*/

const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
const target = 'enlist';

const anagrams = filterAnagrams(words, target);
console.log(anagrams); // Output: ['listen', 'silent']

/*
Write a function called sortByMultipleCriteria that takes an array of objects representing people, each with a name (string) and age (number) property. The function should return a new array with the people sorted first by age in ascending order, and then by name in alphabetical order.
*/ 


function sortByMultipleCriteria(people) {
    return people.sort((a,b) => { 
        if (a.age !== b.age){
            return a.age - b.age;
        }
        return a.name.localeCompare(b.name);
    })
}
    
/* 
check age
srt by ascend ages if !=, 
srt by name alpha age=age
*/

const people = [
{ name: 'Alice', age: 30 },
{ name: 'Bob', age: 25 },
{ name: 'Charlie', age: 35 },
{ name: 'David', age: 25 },
];

const sortedPeople = sortByMultipleCriteria(people);
console.log(sortedPeople);

// Expected outcome: [
//  { name: 'David', age: 25 },
//  { name: 'Bob', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]

/*
Write a function called calculateTotalPrice that calculates the total price for each product in an array of objects representing products, where each object has a name (string), price (number), and quantity (number) property. The function should return a new array containing objects with the name and totalPrice properties, where totalPrice is the result of multiplying the price with the quantity for each product. 
 */

function calculateTotalPrice(products) {
  return products.map(product =>{
    return {
        name: product.name, totalPrice: product.price * product.quantity
    }
  })
}

const products = [
  { name: 'Apple', price: 1.5, quantity: 3 },
  { name: 'Banana', price: 0.75, quantity: 5 },
  { name: 'Orange', price: 1.25, quantity: 2 },
];

const totalPriceArray = calculateTotalPrice(products);
console.log(totalPriceArray);

// Output: [
//  { name: 'Apple', totalPrice: 4.5 },
//  { name: 'Banana', totalPrice: 3.75 },
//  { name: 'Orange', totalPrice: 2.5 }
// ]