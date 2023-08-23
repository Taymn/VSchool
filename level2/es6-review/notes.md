### **Document**

### **Part 1**

### **Rest Operator**

Often times we want all our arguments to be an array of arguments. We don't know how many arguments will be passed into our function, but we want them to be an array in our function. We do that using the **rest** operator. `...whatWeWillNameOurArray`

```jsx
function addNumbers(...numbers) {
  // numbers is now an array that we can use .reduce() on
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1, 2, 3, 4, 5, 6, 7, 8);

```

### **Spread Operator**

In this example, we will have two arrays that we want to be joined into one. Before, we would have had to use `.concat()`.

```jsx
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];

defaultColors.concat(userFavoriteColors);

```

Now we can do this.

```jsx
[ ...defaultColors, ...userFavoriteColors ];

```

The ES6 way is much easier to read and identify quickly what is being done.

Not only that, but now we can add more that two arrays.

```jsx
[ ...defaultColors, ...userFavoriteColors, ...fallColors ];

```

We aren't done yet! We can also just add values!

```jsx
[ "blue", "green", ...defaultColors, ...userFavoriteColors, ...fallColors ];

```

Let's write a shopping list validator that always includes milk. We will check for milk, and add it to our array if it's not there.

```jsx
function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0) {
    return [ 'milk', ...items ];
  }

  return items;
}

validateShoppingList('oranges', 'bread', 'eggs');

```

### **Practical example of Rest and Spread.**

Let's assume we have a library with a depreciated method. We would like users of our library to use a better method, but don't what to break the code of people still using the old method.

```jsx
const MathLibrary = {
  calculateProduct(...rest) {
    console.log('Please use the multiply method instead');
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
   }
};

```

We just pass on all of the arguments straight into the call of the new method. The arguments do get turned into an array, but then "spread" out and dumped into the new method and individual parameters.

Try to make the following function more ES6xy:

```jsx
function product(a, b, c, d, e) {
  const numbers = [a,b,c,d,e];

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

```

Do this one too. Use at least **both** the **rest and spread** operators:

```jsx
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}
```

### **Part 2.**

There are times we want to write a function with a default argument. For example, you have a function that returns the square inches of a piece of wood. Most of our boards are an inch think, but occasionally they are more. Thickness in this function would default to `1`. To write this function in a way that sets thickness to `1`, we used to need to say:

```jsx
function calculateSquareInches(width, length, thickness){
    if (thickness === undefined){
        thickness = 1;
    }
    return width * length * thickness;
}

```

In this example, we have an entire `if` block to see if a value for thickness was passed through and to assign it to it's default if it wasn't.

But now we can write:

```jsx
function calculateSquareInches(width, length, thickness = 1){
    return width * length * thickness;
}

```
### **Lesson **

It only assigns thickness to 1 if a third parameter wasn't passed through. Be sure to write all defaults as the last arguments when defining your functions.

https://coursework.vschool.io/es6-practice-let-const-fat-arrow-functions-default-arguments-template-literals/
https://coursework.vschool.io/es6-practice-object-literals-destructuring-rest-and-spread-operators/

For this review, follow the directions in the JS file to make the code more ES6y. Comment and uncomment code as you work down the file. Run it to make these funcitons work or just more readable practicing ES6.

You'll be using:

arrow functions
rest
spread
destructuring in a parameter
default parameters