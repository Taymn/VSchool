function filterAnagrams(arr, target) {
  
}

/*
filter through words array
create anagrams function to identify target word
anagrams are same letters in a different order
*/

const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
const target = 'enlist';

const anagrams = filterAnagrams(words, target);
console.log(anagrams); // Output: ['listen', 'silent']