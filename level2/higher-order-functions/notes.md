<!-- Lecture -->
A Higher Order Function/Method is a function that:
    1. Takes a function as a parameter
         or/and
    2. Returns a function
    
<!-- Document -->
Higher Order array methods follow that first criteria as they require a function as a parameter.  They do not return a function.

A higher order function either:

- takes one or more functions as an argument
    
    or
    
- outputs a function

Functions in JavaScript are just values, so they can be easily passed into and returned by functions.

**The Bare Bones**

Higher Order Functions are typically methods.

*Methods* - Methods are functions that are part of a bigger object. They can only be used when attached to an array, string, object, etc...

EX: item.function() or Array.map()

*Functions* = Functions are written to perform specific tasks but can be called whenever, they do not need to be attached to anything.

E.g.: `function()` or `setInterval()`

The bare bones of a Higher Order Function is this:

`item.function(function(){})` if it is a method

or

`function(function(){})` if it is just a regular function

Notice that the argument that a Higher Order Function takes is always another function. If you wanted to you could save that function to a variable beforehand and then just pass in that variable. That would look like this:

```jsx
var myFunc = function(){};

function(myFunc);

```

### **Common Higher Order Functions**

### **Methods**

- .map()
    - Returns a new array with a change made to every item from the original array
    - Whatever you return from the inner function is inserted into the same index as the original array
- .filter()
    - Returns a new array that only includes some of the items from the original array
    - If inner function returns `true` (or something "truthy"), that item is included in the new array. If it returns `false` (or something "falsey"), it doesn't include it in the new array.
- .reduce()
    - Returns any kind of value you want (number, string, boolean, array, etc.)
    - Inner function used to combine the values from the original array into a single value of some kind. E.g.: adding all the values together from an array of numbers.
- .sort()
    - Modifies/mutates the original array by re-ordering the items therein.
    - Inner function compares 2 items and determines how they should be reordered.
- .forEach()
    - Returns `undefined` (don't expect to receive anything in return)
    - Runs the inner function once for every item in the original array
- .find()
    - Returns one of the items from the array
    - If inner function returns `true`, the `.find()` finishes and returns that current value in the original array. If it returns `false`, it continues to search through the array until it returns `true`. If it never returns `true` (no items match the condition), it returns `undefined`
- .findIndex()
    - Same as `.find()` but instead of returning the item in the array, it returns the index where it found the matching item
- .some()
    - Returns either `true` or `false`
    - If inner function returns `true`, the `.some()` immediately returns `true` (because at least one of the items matches your condition). If the inner function returns `false` for every item in the array, the `.some()` returns `false` (no items matches your condition)
- .every()
    - Returns `true` or `false`
    - Opposite of `.some()`, in that if the inner function ever returns `false` for any item, `.every()` immediately returns `false` (because NOT every item matched the condition). If the inner function returns `true` for every item in the array, the `.every()` returns `true`

### **Functions**

- setInterval()
- setTimeout()
- clearInterval()

In this write up we are only going to be looking at the Methods. If you want to learn more or review your knowledge regarding `setInterval`, `setTimeout`, or `clearInterval`, you can do so here:

- [setInterval](https://www.w3schools.com/jsref/met_win_setinterval.asp)
- [setTimeout](https://www.w3schools.com/jsref/met_win_settimeout.asp)
- [clearInterval](https://www.w3schools.com/jsref/met_win_clearinterval.asp)

### **Examples**

Let's begin with one of the more popular Methods.

**.map()** - Runs a for loop on an array and returns a new array with the changes indicated.

```jsx
var arr = [1,2,3,4];

arr.map(function(item){
    return item + 1;
})

// => [2,3,4,5]

```

Let's compare this to a normal for loop

```jsx
var arr = [1,2,3,4];

for ( var i = 0; i < arr.length; i++){
   arr[i] += 1;
}

// => [2,3,4,5]

```

They do virtually the exact same thing. One important thing to take note of is that rather than writing `arr[i]` to access each item in the array, we use `item`. The word `item` is not a saved word. Best practice is to name `item` the singular version of whatever your array holds, for example:

```jsx
var dogs = ['lab', 'poodle', 'shih-tzu'];

dogs.map(function(dog){
    return dog + 's are quite fancy';
})

// => ['labs are quite fancy', 'poodles are quite fancy', 'shit-tzus are quite fancy']

```

So if you had an array called `numbers` then the item would be `number` or if you had an array called `names` then the item would be `name`.

**.filter()** - Runs a loop on an array and returns a new array with only the items that meet the given condition.

```jsx
var numbers = [12,4,56,27];

numbers.filter(function(number){
    return number >= 25;
})

// => [56, 27]

```

Basically, whatever you return inside the callback function is the condition that it will check for each item in the array. In the example above it went through each number in the `numbers` array and checked if it was greater than 25. If it was greater then it pushed it into the new array, if it was not, it did not include it in the new array.

Let's look at an example of this in the old way of writing for loops

```jsx
var numbers = [12,4,56,27];
var newArr = [];

for (var i = 0; i < numbers.length; i++){
    if (numbers[i] >= 25){
        newArr.push(numbers[i]);
    }
}

// newArr => [56,27]

```

Comparing the two we see how much simpler and more concise the `.filter` is compared to the old way. Hopefully this demonstrates how useful Higher Order Functions can be!

**.reduce()** - Returns the sum of an array of numbers

```jsx
var numbers = [1,2,3,4,5];

numbers.reduce(function(a,b){
    return a + b
})

// => 15

```

**.sort()** - Modifies original array sorted either alphabetically or of numbers (low to high) or (high to low)

```jsx
var scores = [12,98,34,85];

scores.sort(function(a,b){
    return a - b
})

// => [12,34,85,98]

```

or if you want to sort it from High to Low

```jsx
var scores = [12,98,34,85];

scores.sort(function(a,b){
    return b - a
})

// => [98,85,34,12]

```

or if you want to sort words alphabetically

```jsx
var words = ['bat', 'pineapple', 'drugs', 'zebra', 'ghost'];

words.sort()

// => ['bat', 'drugs', 'ghost', 'pineapple', 'zebra']

```

Notice the last one didn't take a function as an argument, you don't need it if you are alphabetizing words, only if you are ordering numbers.

**.forEach()** - Runs a loop on an array but does not create a new array. (basically the same as .map() but no new array is created)

```jsx
var numbers = [1,2,3,4]

numbers.forEach(function(number){
    return number * 2
})

// => [1,2,3,4]

```

Notice that no changes occurred. If we wanted to do the above code and have actual changes occur then we would have to do the following.

```jsx
var numbers = [1,2,3,4]

numbers.forEach(function(number, i){
    return numbers[i] = number * 2
})

// => [2,4,6,8]

```

There are some important things that happened here that we need to address.

- We added `i` as the second parameter. Anytime a second parameter is given to `.map`, `.filter`, or `.forEach`, it becomes the index of that array.
- Take note of the `s` at the end of `numbers` in the return statement. We are grabbing the index of the original array and we are not using the `number` parameter that we created in the callback function.
- `numbers[i] = number * 2` **correct**
- `number[i] = number * 2` **incorrect**

So what is the point of having forEach() if it doesn't save anything? Well it could be used for testing purposes if you wanted to see what happened without actually making any changes. Or it could be used to to run a function on each item. However, 9 times out of ten you will use `.map` over `.forEach`.

**.find()** - Returns the value of the first item in the array that meets the given condition.

```jsx
var numbers = [12,30,5,62,18,53]

numbers.find(function(number){
    return number > 50
})

// => 62

```

Remember this only returns the FIRST item that meets the given condition

**.findIndex()** - Returns the index of the first item in the array that meets the given condition.(exact same as .find() but it gets the index instead of the actual item)

```jsx
var numbers = [12,30,5,62,18,53]

numbers.findIndex(function(number){
    return number > 50
})

// => 3

```

**.some()** - Checks if ANY items in an array meet a given condition and return True or False.

```jsx
var numbers = [12,30,5,62,18,53]

numbers.some(function(number){
    return number > 50
})

// => true

```

or

```jsx
var numbers = [1,5,19,49,23]

numbers.some(function(number){
    return number > 50
})

// => false

```

**.every()** - Checks if ALL items in an array meet a given condition and returns True or False.

```jsx
var numbers = [12,30,5,62,18,53]

numbers.every(function(number){
    return number > 50
})

// => false

```

or

```jsx
var numbers = [1,5,19,49,23]

numbers.every(function(number){
    return number < 50
})

// => true

```

These are not all of the available Higher Order Functions, but these are the most common. I encourage you to familiarize yourself with these because they will be EXTREMELY useful throughout your coding career.