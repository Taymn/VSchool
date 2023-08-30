# Document Part 1

# Notes

!https://images.unsplash.com/photo-1439754389055-9f0855aa82c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ

# **Synchronous vs. Asynchronous**

Imagine you're at the checkout of a grocery store that has only one lane with a single cashier, but also has a number of self-checkout kiosks.

We're going to use these two options to illustrate the difference between *synchronous* and *asynchronous* code.

Code that runs *synchronously* stops any other code from running, no matter how long it takes. This is like waiting in line for a real cashier. If the person in front of you has a lot of items, it doesn't matter if you just have one thing you want to buy, you're going to have to wait for the cashier to finish with the person in front of you before it's your turn.

Code that runs *asynchronously* will begin its operations, but then won't block other code from running. This is like using the self-checkout kiosks (assuming there are multiple to choose from). Someone may begin checking out at one kiosk, but that doesn't stop you from using another kiosk. And even if you start your checkout process much later than someone else, that doesn't mean you'll necessarily finish after them.

### **Synchronous code examples**

The following are examples of synchronous code. Each statement will wait to complete before moving to the next line of code. This is called **"blocking code"**

```jsx
// Example 1
var firstName = "Joe"

// Example 2
function addExcitementToString(str) {
    return str + "!!1!"
}

console.log(addExcitementToString("Hi"))

// Example 3 (recursive function)
function factorial(n) {
    if (n === 1) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(5))

```

### **Asynchronous code examples**

The following are examples of asynchronous code. Each statement will allow other (later) code to execute first if the statement will take a while to complete. This is called **"non-blocking code"**.

```jsx
// Example 1
setTimeout(function() {
    console.log("Inside the setTimeout")
}, 500)

console.log("Outside the setTimeout")

// Example 2
document.getElementById("thing").addEventListener("click", function() {
    // Only runs WHEN the element is clicked
    console.log("Clicked!")
})

// Example 3 (using a promise)
fetch("https://some.url")
    .then(response => response.json())
    .then(response => {
        console.log(response.data) // Runs SECOND
    })
console.log("Outside the fetch's GET request")  // Runs FIRST

```

In general, any code that may potentially take awhile to complete (waiting for an HTTP call to come back with a response, waiting for user input, etc.) should be written as non-blocking, asynchronous code. Otherwise, the users of your website may sit and wait for some background code to complete, which may make your website look broken.

---

# **Writing asynchronous code**

There are multiple ways to write your code so that it is asynchronous. Fortunately, many pre-written libraries already have asynchronous methods built-in for you to use.

The three main ways to write asynchronous code are:

1. Using callbacks
2. Using promises
3. Using `async/await` (ES2017, a.k.a. ES8)

---

# **Callbacks**

Callback functions are functions you pass as a parameter to another function. The parent function can then execute the callback function whenever it determines is best, which oftentimes may be after some kind of delay. It's called a "callback function" because it will be called/executed sometime *in the future*.

!https://images.unsplash.com/photo-1515853191710-4db39aa5fe54?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ

Photo by [Franck V.](https://unsplash.com/@franckinjapan?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit) / [Unsplash](https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit)

A standard example of callbacks is with the built-in `setTimeout` and `setInterval` functions. If you're feeling rusty on those, check out our post on those functions here: [setTimeout and setInterval](https://coursework.vschool.io/settimeout-setinterval/)

### **`setTimeout` uses callbacks**

`setTimeout` is a perfect example of asynchronous code that uses a callback. If it were synchronous (blocking), it would potentially stall the execution of the rest of your code for a very long time, depending on how long you set your timeout to be.

So instead what happens is `setTimeout` expects you to pass a callback function to it. This function tells the program what code to execute *after* the waiting period is over.

Let's take another look at the `setTimeout` example from above:

```jsx
setTimeout(function() {
    console.log("Inside the setTimeout")
}, 500)

console.log("Outside the setTimeout")

```

Because `setTimeout` is non-blocking, the second `console.log()` statement will execute **first**, even though it's written after the "first" `console.log()` statement inside the callback function passed to `setTimeout`.

### **`addEventListener` uses callbacks**

Another illustrative example of callbacks is the callback function you must provide to the `.addEventListener()` method. The first parameter is the event type you're listening for (e.g. "click"), and the second parameter is a *callback function* you provide to tell the program *what* to do *when* that event occurs on that element (at some point in the future). Giving the programmer the ability to add a callback function here allows `addEventListener` the flexibility to be used not only to handle multiple events (which the first parameter is for) but also to do whatever they want in reaction to that event occuring.

### **Custom Callbacks Example**

Let's see how we could use callbacks in a function of our own creation!

We'll use the [Star Wars API](https://swapi.co/) to get information about Luke Skywalker. The problem is, we also want to get the **name** of Luke's homeworld, which comes back as the URL `"https://swapi.co/api/planets/1/"` when we make our API call to `swapi.co/api/people/1`

```jsx
{
	"name": "Luke Skywalker",
    ...
	"homeworld": "https://swapi.co/api/planets/1/",

```

So, it looks like we'll need to make a second API call to that URL in order to get more information about that planet, including its name.

Using callbacks, we'd end up with something like the following (be sure to read all the comments):

```jsx
// Helper function that will get data from a given URL parameter
// and passes the data to a callback function so the programmer
// can do whatever they want with that data
function getData(url, callback) {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const jsonData = xhr.responseText
            const data = JSON.parse(jsonData)
            return callback(data)
        }
    }

    xhr.open("GET", url, true)
    xhr.send()
}

// Use our helper function to get the Luke Skywalker resource from the API
// Notice we need to nest a second `getData` inside the first one's callback function
// because we didn't get all the data we needed from just the first URL call alone
getData("https://swapi.co/api/people/1", function(lukeData) {
    console.log(lukeData.homeworld) // logs "https://swapi.co/api/planets/1" instead of "Tatooine"
    // Here we need to make the second call to the homeworld URL so we can get its name
    getData(lukeData.homeworld, function(planetData) {
        lukeData.homeworld = planetData.name // replace the URL with the actual name in the lukeData object
        console.log(lukeData.homeworld) // now logs "Tatooine"! Yay!
        // Now while we're inside this double-nested function we can do stuff with the data we got.
    })
})

```

### **Problem with callbacks**

Implementing callbacks are a great tool for writing both non-blocking and reusable code. However, as a developer they can become a bit cumbersome. Check out [callback hell](http://callbackhell.com/) for some reasoning and examples of this. And although our above Star Wars example isn't quite that bad, you can start to see how many levels of nested callbacks can be hard to follow as a developer.

As a response to this issue, the concept of a "Promise" was introduced, and has eventually made its way into JavaScript as a permanent resident in ES2015 (a.k.a. ES6), so let's spend some time understanding promises.

---

# **Promises**

Under the hood, promises are just a wrapper (sometimes referred to as "syntactic sugar") around callbacks. This means that they are *using* callbacks in their source code, but allow the developer to use a nicer syntax to avoid things like "callback hell."

Think of a promise as an "I.O.U." When you make some kind of request to an API, the response may take quite awhile to come back. Even then, you don't know for sure if you'll receive a successful response, or if perhaps there is some kind of issue with the server that stops it from successfully returning a response.

Since a call to a server can't *immediately* return a response, one solution is to return a **promise** instead. A promise is literally just a JavaScript object, and essentially says "I'm not the value you're looking for yet, but I will be soon!"

A promise object can be in one of 3 states:

- pending: this is the state of a promise immediately after it is created, and it stays in this state until it is either **"resolved"** or **"rejected"**.
- resolved (a.k.a. "fulfilled"): a promise becomes "resolved" when the operation completes successfully. Usually a resolved promise returns some kind of data along with it.
- rejected: a promise becomes "rejected" when the operation fails. Usually a rejected promise returns some kind of error along with it.

Promise objects come built-in with a method called `.then()`, which (surpise!) takes a callback function as a parameter. The callback function you pass to `.then()` receives whatever data the promise resolved with, and will only run after the promise is completely resolved. This means you can do whatever you need to do with the data at this point.

However, since we know that a promise could potentially be rejected as well, there's another built-in method called `.catch()`, which will run whenever a promise is rejected. The `.then()` and `.catch()` sections of a promise can be chained together, giving a promise more or less the look of a `try...catch` block of code. In fact, let's spend some time talking about promise chaining now.

### **Promise chaining**

A main benefit of promises is that they allow us to do away with the nested callback hell that can happen with callback functions. The way this is possible is because of something called "promise chaining."

Promise chaining is the ability to perform asynchronous operations in an order as if they were synchronous. Did you notice in the above example that there are actually 2 `.then()` blocks? They are chained together in a promise chain.

> Note: The reason this is possible is because .then() actually returns another promise, and therefore makes it possible to add another .then() to the end.
> 

Here's the key to understanding promise chaining: **whatever you `return` from one `.then()` block is what will be put into the next `.then()` block's callback function parameter.** (It's okay if you have to read that a couple times for it to sink in.) Above, this wasn't quite as apparent because the example uses arrow functions, so let's take a look at the same code refactored using function declarations:

```jsx
fetch("https://some.url")
    .then(function(responseFromFetch) => {

        // By returning this value, it gets passed
        // to the next .then() which calls it
        // "responseAfterJsonParse"
        return responseFromFetch.json())
    })
    .then(function(responseAfterJsonParse) => {
        console.log(responseAfterJsonParse.data)
    })

```

Or here's an even more contrived example that may drive the point home:

```jsx
fetch("https://some.url")
    .then(function(resFromUrl) {
        console.log("First .then block")
        return "Hi there!"  // Return an arbitrary string for demonstration purposes
    })
    .then(function(valueFrom1stThenBlock) {
        console.log(valueFrom1stThenBlock)  // Logs "Hi there!"
        return "Goodbye."
    })
    .then(function(valueFrom2ndThenBlock) {
        console.log(valueFrom2ndThenBlock)  // Logs "Goodbye."
    })

```

Sometimes what you return from one `.then()` block may be a promise instead of a synchronous value. For example, the `.json()` method in this code:

```jsx
.then(response => response.json())

```

actually returns a promise instead of something immediate like a string or number. In these cases, the promise chain waits for that promise to resolve, and then passes the resolved *value* (which IS a regular data type like a string, number, boolean, object, etc.) along to the next `.then()`.

### **Star Wars API refactor**

Let's take our Star Wars example and refactor it to use promises! Again, make sure to read the comments in the code closely:

```jsx
// This helper function is naturally shorter because it uses the built-in `fetch`
// function, which reduces the amount of code we have to write from scratch.

// Another important thing to note about this function that can be tricky to grasp
// is that it is returning the promise that fetch returns. Because `fetch` uses
// promises, when you call `fetch` it returns a promise immediately. Our function
// simply takes that promise and returns it, but not before chaining a .then()s on
// to parse the actual JSON data first.
function getData(url) {
    return fetch(url)
        .then(function(response) {
            return response.json()
        })
}

// Because our helper function returned the promise from fetch, we can use .then() to do stuff
// instead of having to use nested callbacks. We can also chain together the promises to keep
// them from nesting down into a "pyramid of doom."
getData("https://swapi.co/api/people/1")
    .then(function(lukeData) {
        console.log(lukeData.homeworld)  // Logs "https://swapi.co/api/planets/1/"

        // We make another call to our function and return the promise forward for
        // the next .then() in the chain
        return getData(lukeData.homeworld)
    })
    .then(function(planetData) {
        console.log(planetData.name)  // Logs "Tatooine"!
    })

```

To see how amazing this is, let's see the same code without the comments and using arrow functions instead:

```jsx
function getData(url) {
    return fetch(url)
        .then(response => response.json()
}

getData("https://swapi.co/api/people/1")
    .then(lukeData => {
        console.log(lukeData.homeworld)
        return getData(lukeData.homeworld)
    })
    .then(planetData => {
        console.log(planetData.name)
    })

```

If this is still confusing, that's okay. It often takes students multiple practices and readings for it to click. While you're working on that, let's chat about the most modern method of writing asynchronous code: `async/await`.

# **`async/await`**

Just like promises are syntactic sugar around callbacks, async/await is syntactic sugar around promises! Which means... `async/await` is *really sweet* 😉😘

Async functions make use of an earlier-released JavaScript feature called **generator functions**. We won't go into the details of generators in this article, but it's enough to know that Async functions are just a little different than the functions you're used to.

### **`async` keyword**

The first difference in an async function is that is uses the `async` keyword right before the regular function definition. All of the below are async functions because of the use of the `async` keyword:

```jsx
async function myFunc1() {
    // async function declaration
}

const myFunc2 = async function() {
    // async function expression
}

const myFunc3 = async () => {
    // async arrow function expression
}

```

Adding the `async` keyword before a function does 2 major things to the function:

1. It enables your ability to use the `await` keyword inside the function. The `await` keyword in JavaScript can **only** be used inside an async function.
2. When your async function is called, it automatically returns a pending promise. When your function `return`s a value, it resolves the promise with that value. If your function `throw`s an error, it rejects the promise with the thrown error.

First let's talk about the `await` keyword

### **`await` keyword**

This keyword is a way to make normally asynchronous operations synchronous. In other words, anytime there's a function that normally would return a promise, it allows you to treat that function as if it were a synchronous function, and it pauses the execution of the remainder of your async function until that asynchronous function call completes.

This way, we can actually set variables to the values of asynchronous functions inline instead of having to use the promise's `.then` and a callback function.

### **Star Wars API example refactor**

Let's modernize our Star Wars function! Again, read the comments carefully:

```jsx
// Changed up this function because it's so simplified due to async/await that we
// don't necessarily need to create a helper function at all!
async function getData() {
    // Every time you see the `await` keyword, the function will pause and wait
    // for the next asynchronous call (like fetch) to finish before moving on
    const lukeResponse = await fetch("https://swapi.co/api/people/1")
    const lukeData = await lukeResponse.json()
    console.log(lukeData.homeworld)  // Logs "https://swapi.co/api/planets/1"

    const planetResponse = await fetch(lukeData.homeworld)
    const planetData = await planetResponse.json()
    console.log(planetData.name)  // Logs "Tatooine"!

    // Reset the lukeData.homeworld to be the planet name instead of just the URL
    lukeData.homeworld = planetData.name

    // Resolve the automatically-created promise with the lukeData we've built
    return lukeData
}

// async functions automatically return promises and resolve with whatever
// got returned from that function. So eventually we'll need to use a .then()
// to get the value, unless we're inside another async function.
getData()
    .then(lukeData => console.log(lukeData))

```

You can see that `async/await` can dramatically simplify the look and flow of asynchronous operations. Being able to read through async code as if it were synchronous can really make life nicer as a developer.

# **Conclusion**

There's probably a million other things that could be said about writing asynchronous code. Hopefully this introduction has given you a sense of curiosity and some tools to start playing with writing (and understanding) your own asynchronous code. For me, it took a lot of practice and messing around before I finally started to really understand the syntax and power behind callbacks, promises, and async functions.

# Lesson Part 1
# Promise
    * Promises are for handling asynchronous code
    * A Javascript Constructor:   new Promise()
    * Promises are eager
    
    * 3 states of a promise:
        * 1:  <Pending>
        * 2:  Resolved    .then()
        * 3:  Rejected    .catch()