## Code Challenges

Challenge 1:  Constructor Functions

Create a constructor function called **`Book`** that takes in parameters for **`title`**, **`author`**, and **`year`**. The constructor function should have a method called **`getDetails`** that returns a string with the book's title, author, and year.  Instantiate two new Books using the below code to test your solution.  

```jsx
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
console.log(book1.getDetails()); // Expected output: Title: The Great Gatsby, Author: F. Scott Fitzgerald, Year: 1925
```

```jsx
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
console.log(book2.getDetails()); // Expected output: Title: To Kill a Mockingbird, Author: Harper Lee, Year: 1960
```

Challenge 2: Arrays and Loops

Write a function called **`removeDuplicates`** that takes an array of numbers as input and returns a new array with duplicate values removed.  Use the below code to test your solution.

```jsx
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected output: [1, 2, 3, 4, 5]
console.log(removeDuplicates([5, 5, 5, 5, 5])); // Expected output: [5]
```