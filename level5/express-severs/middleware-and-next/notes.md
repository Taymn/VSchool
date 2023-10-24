# Middleware

## Lesson

    ## What is it?
        * app.use()
            1. (optinal) - Mount Path ( endpoint )
            2. Callback function - receives the request, response objects, also the 'next' function

    ## The 'next' function
        * Moves on to the middleware in line on our server

## Documentation

Before continuing with this post, make sure to check out the Express docs on [writing middleware](http://expressjs.com/guide/writing-middleware.html) and [using middleware](http://expressjs.com/guide/using-middleware.html). They're pretty straightforward and fully-documented.

 **What is Express middleware?**

Middleware is code (soft**ware**) that sits in between (in the **middle** of) the incoming request to the server and the outgoing response back to the client. It's basically a bunch of worker code that does a majority of the server's work in preparing a legitimate response back to the client. According to the Express docs:

> An Express application is essentially a series of middleware calls.
> 

In fact, by this point you've probably already used middleware perhaps without realizing it. For example:

```jsx
app.get("/", (req, res) => {
    res.send("Hey there, client machine! Here's that response you asked for!");
});

```

In that code, we set what's called the *mount path* in the first argument to `app.get()`, (`"/"`) and then we write what is essentially a middleware function that actually does something on that "mount path". In other words, anytime a request comes in to the specified mount path (in the above code to a url like `"http://localhost:5000"`, without any further specified path), the middleware function will run.

 **use()**

While the code you write in functions like `app.get('mountPath', middlewareFunction)` is essentially middleware, you'll frequently see middleware defined separately in an `app.use()` method. This method specifies to the application that it should "use the following code on any request that matches the specified mount path, or if no mount path is specified, use the following code on *every* request that comes in to the app."

```jsx
const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("This line is called for every single request into this server, no matter to which endpoint");
    next();
});

app.use("/", (req, res, next) => {
    console.log("This also gets called on every request. There's no reason to specify a mount path of '/' in a .use() block, just omit it entirely.");
    next();
});

app.use("/hot-cross-buns", (req, res, next) => {
    console.log("This will only get called to a request to /hot-cross-buns. The other middleware with no mount path and '/' mount path will also run, since they run on every request");
    next();
});

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Express app is listening on port ${port}`);
});

```

The more specific the mount path, the more specific of code you can run on requests to that url endpoint. This is extremely helpful to use when it comes to modularizing our code. For example, if there is code that we know we will want to run on every request, we might as well write it as middleware in an `app.use()` block with no mount path, and force every request to go through that code before it comes to any more specific code that needs to run it.

 **next()**

Middleware executes sequentially, in the order you put it in the application's code. Each middleware block needs to end in one of 2 ways: **1)** By sending the response back to the client that made the request, or **2)** By calling the next middleware in the queue. (At some point or another, the response has to be sent back to the client.)

This is where `next()` comes in. If you're not quite ready to send the response back yet, simply call `next()` at the end of the middleware function and it will continue on to the next one in line.

Notice that you *will* need to include `next` as a third parameter in the middleware callback function in order to call `next()`.

If I were to leave `next()` out of the code written above, the request would get hung up in the server and eventually time out. So it's important to keep `next()` in mind whenever you're planning on writing middleware.

 **Pre-built middleware**

Since Express is so bare-bones, it has abstracted out the main functionality that people almost always use to external middleware dependencies. In other words, if you want to do pretty much anything beyond handling GET requests that send back plain text, you're going to need to install/plug in some middleware that has already been written for you! Check out the [Express Third-party middleware](http://expressjs.com/resources/middleware.html) page for a partial list of some very common third-party middlewares.

Here is one of the most common middlewares you'll see in Express apps:

```jsx
const express = require("express");
const app = express();

// body-parser helps Express interpret different kinds of Content-Types that come in the body of a request object. So if you ever need to POST or PUT, you'll likely need to use the "body-parser" middleware
const bodyParser = require("body-parser");

// bodyParser.json() parses request bodies with a Content-Type header set to "application/json", meaning it can now read and interpret JSON.
app.use(bodyParser.json());

// bodyParser.urlencoded() parses data that comes in with a Content-Type of application/x-www-form-urlencoded, which is what data comes in as when you use an HTML <form> to submit data. For now, don't worry about the extended option, just plan on always including it here.
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Express app is listening on port ${port}`);
});

```

The concept of middleware can take a little time to get used to, but once you understand what's going on and can begin thinking like the server that's running this code, you'll be much more equipped to create a clean, well-organized, and powerful codebase for your server.