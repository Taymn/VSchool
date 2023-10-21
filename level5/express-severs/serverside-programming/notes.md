
# **Server side programming in Node with Express**

##  Lesson 

 **Frontend**
    What the user sees and interacts with

 **Backend**
    The Server and the Database that the Client interacts with.

 **Servers**
    Receives requests from a Client or other server, and sends back a response

    Remote: Anything that is not your device
    Local: Running a server on your local machine

 **API**
    The program interface that takes and fulfills the server's request so the server can send a response

 **Database**
    Stores data for the application

 **Node**

## **Document**

Node is a powerful tool that allows Javascript to be interpreted *outside* of the browser - most importantly, it allows Javascript to be used as a server-side language.

What does this mean?

Traditionally we used a backend language (like Python, Ruby, C#, Go, etc.) to retrieve and control the data from the database. It was then passed to the *front end* where JavaScript (and the browser) would take over displaying the information to the end user. Thus nearly every *back end* programmer had to know JavaScript *and* some other language.

Javascript was made to use in the browser, but Node changed that. A programmer could use Javascript on the *front end* to display the information **AND** use Javascript, with Node, on the *back end* to get and manipulate data from the data base.

Node has a vast community of contributors and a large amount of packages available via the Node Package Manager (NPM). Node is one of the most contributed to programs in the world.

 **Background**

Node was built on top of the JavaScript V8 Engine, which was developed by Google to run JavaScript code in the Google Chrome browser. The V8 Engine is widely considered the best JavaScript engine available out there.

Through an initiative in the open source community, the power of the V8 engine was brought to the command line by the creation of Node.js. Node.js is free and open-source, comes with its own extensive API for interacting with your machine (instead of just a browser window), and thus allows developers to build a server entirely in JavaScript. Before node.js, servers needed to be written in languages that were already built to interact with machine code such as C#, Java, Python, or Ruby (amongst many others). Now a developer can write both server-side and client-side code entirely in JavaScript!

There are certain requirements we need in a system in order to create a web server:

- Better ways to organize our code into reusable pieces
- Ways to deal with files
- Ways to deal with databases
- Ability to communicate over the internet
- Ability to accept requests and send responses (in a consistent and standard way)
- Way to deal with work that takes a long time

The creators of Node.js added APIs that allow it to accomplish all of the above requirements. The full API documentation can be found at [nodejs.org/api/](https://nodejs.org/api/). Any aspiring Node.js developer should read through the Node.js documentation extensively to become familiar with the tools that are available at your disposal.

# **HTTP Review**

## Lesson

### CRUD
 **Get Request**
    fetches data (json)

 **Post Request**
    saves data

 **Put Request**
 updates data

 **Delete Request**
 deletes data

### **FE//BE**
```js
    axios.get('/item') '//' app.get('/item')
        .then(res)     '//'    code
```

## Documentation
 **Objectives**

Understand the HTTP and the Request/Response Cycle
Learn CRUD and the different Request Types


# **Node Module Basics**

## Lesson

**Node**

**Node Module**
    A Module is a file

**require**
    import function
**module.exports**
    exprot

## Documentation

### **Supplementary Content**

!https://coursework.vschool.io/content/images/size/w2000/2017/12/Image-result-for-node-modules-photo-banner.png

If you recall from the [Intro to Node](https://coursework.vschool.io/intro-to-node/) post, one of the main requirements of having JavaScript be able to work on a server is to have code that can be more easily organized. Thus far in JavaScript, we're used to having each JavaScript file be completely on its own, where it can't rely on any code written in any other JavaScript file. (AngularJS is excluded from this, because it has its own solution to allow referencing code written in other files - dependency injection).

The way Node.js deals with allowing for code separation is through modularization, or creating separated *modules*.

> Note: the specific syntax for how this is done in JavaScript is about to change in ES2015 (A.K.A. ECMAScript 6), but the principles will be very similar. Also, because adoption of language updates is so slow, you will see this method of modularization for quite a while longer.
> 

 **require()**

By this point in the course you've likely used the global `require()` function in some of your JavaScript exercises. For example, in the [JavaScript Calculator](https://coursework.vschool.io/javascript-calculator/) exercise, you had to install the `readline-sync` package using NPM and use the `require()` method to pull the awesomeness from the module into your own code. That looked something like this:

```jsx
var readline = require("readline-sync");

var name = readline.question("Please type your name: ");

```

By simply `require`-ing the `readline-sync` module, we were able to use all the goodness it had built in!

So we've already seen how to `require()` other people's modules, let's see how to create and `require()` our very own modules!

---

### **Creating a module**

The most important thing to understand when it comes to creating your own modules is `module.exports`.

`module` is a global Node.js object that contains properties with some information about any given JavaScript file. It has properties like `__dirname`, which is a path to the directory that the file is in, and `__filename` which is the filename itself.

One of the properties on the `module` object is called `exports`. `exports` begins as an empty object, and is just sitting there waiting for us to put our code on it so that it can be pulled in by a `require()` function call somewhere else. This is how that looks in code:

```jsx
// greeting.js

function greeting() {
    console.log("Hello there!");
}

module.exports = greeting;

```

We set the module.exports object on this file to be a function expression (the code of the function itself, without actually calling it). Now we can `require` this simple module from anywhere we want! Assuming we have another file (let's call it `app.js`) that's in the same directory as `greeting.js`, we can now do:

```jsx
// app.js

var greeting = require("./greeting.js");
greeting(); // "Hello there!" prints to the console.

```

Because you'll almost exclusively be using modules that come from JavaScript files, you can actually leave out the `.js` on the module name:

```jsx
var greeting = require("./greeting");

```

**However**, you **MUST** keep the path to the module there (in the above case, `./`) if you are `require`-ing a module of your own. The only time you can remove it is if you are requiring a Node.js built-in module, or something you've installed with NPM that is inside the `node_modules` folder.

---

### **Conclusion**

That pretty much covers the very basics of using Node modules in your projects. Remember that you'll need to `require()` the module in *every* JavaScript file you wish to use that module in.

There's still a lot to learn about modules, so when you feel you've got a grasp on the basics, head over to [Module Patterns](https://coursework.vschool.io/node-module-patterns/) to learn more about the most common ways to structure your modules!



