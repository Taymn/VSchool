# Code Challenges:

### **Extract Unique Characters:**

Write a function called **`extractUniqueCharacters`** that takes an array of strings and returns a new array containing only the unique characters from all the strings.

```jsx
function extractUniqueCharacters(strings) {
  
}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']
```

### **Sort by Property:**

Write a function called **`sortByProperty`** that takes an array of objects and a property name as input. The function should return a new array containing the objects sorted in ascending order based on the specified property.

```jsx
function sortByProperty(objects, propertyName) {
  
}

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 28 },
];

const sortedByAge = sortByProperty(people, 'age');
console.log(sortedByAge);
```