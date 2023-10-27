# Lesson
    ./express-servers/express-router
# Document

## **Introduction**

Express is a very lightweight framework that allows you to do things however you want. This makes it very flexible, but also means you could write a less-than-optimal server without knowing it.

Error handling is an important task for your server to accomplish. If you don't gracefully handle errors, it could lead to a bad user experience at best and could crash your server or compromise data at worst.

Fortunately, Express makes handling errors a cinch! Let's dive in.

## **Setup**

For the sake of brevity and clarity, we'll be doing everything in a single server file (`index.js`) and bypassing a lot of the unrelated setup steps you should take. Normally you'll have routes, possibly with further nested routes, but the process for handling errors will be exactly the same no matter what your setup is.

Here's our starter code:

```jsx
const express = require("express")
const app = express()

app.get("/puppies", (req, res) => {
    // some synchronous operation will go here
})

app.post("/puppies", (req, res) => {
    // some async operation will go here
})

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});

```

We've created 2 endpoints - a `GET` to `/puppies` (presumably to get a list of puppies) and a `POST` to `/puppies` for creating a new instance of a puppy.

## **Handling errors**

Express has a built-in error handling function. The problem is that it's built to send an HTML document back to the client with the error written in the document. If you're using Express to build a REST API that should just be sending JSON back, this won't do.

So Express has made it very easy to create a custom error handling function of your own. All you need to do is create a middleware function *directly* before your final lines of code in the `app.listen`. Putting it right above that last part of your server ensures that it only runs as a last resort, if all other routes have failed to send a response back.

### **Custom error handling middleware**

Let's see what this error handling function could look like and then we'll talk about it:

```jsx
...

app.use((err, req, res, next) => {
    console.error(err);
    return res.send("There was an error")
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});

```

This error handling function *must* have exactly 4 parameters: `err`, `req`, `res`, and `next`. (Express checks the number of parameters of its middleware functions. If it has 4 arguments it assumes it is an error handling middleware.) So whether you're planning on using them all or not, make sure to include all 4.

We'll come back briefly to improve this, but for now let's see how you can forward errors on to this middleware

### **Passing errors to the error handling middleware**

From any route, you can easily pass errors along to the error handling middleware by using the `next` parameter. In our starter code, we didn't include the `next` parameter, so let's add it now:

```jsx
app.get("/puppies", (req, res, next) => {...

app.post("/puppies", (req, res, next) => {...

```

### **Handling synchronous errors**

Notice we made a distinction between a synchronous operation and an asynchronous operation in the route. That's because Express can handle errors in sync operations in an even more simple way - just `throw` the error! If an error is thrown, Express will catch it and pass it along to your error handling middleware for you.

```jsx
app.get("/puppies", (req, res, next) => {
    if (req.query.someRequiredQuery === undefined) {
        throw new Error("You must include a query called `someRequiredQuery` in your request!")
    }
})

```

In the above example, we can synchronously check if the incoming request has a `query` called `someRequiredQuery`. If not, `throw` a new error with a helpful message. **This message will often end up being the one that is displayed to the user to let them know what went wrong**.

If you try running a `GET` in postman to `localhost:8000/puppies`. It's working! Our error handling function is sending back the text "There was an error".

!https://coursework.vschool.io/content/images/2018/09/Screen-Shot-2018-09-27-at-2.11.58-PM.png

But you'll also see a couple of issues: First of all, our response has a `200` status, which it shouldn't (because *everything is NOT "OK"*!). Second, we're not responding with the message from our error. As we said earlier, we'll be revisiting the error handling function to improve it later.

### **Handling asynchronous errors**

If you're performing some kind of async operation and run in to an error, you won't be able to just `throw` an error. Instead, you'll simple pass the error forward using the `next` parameter. It's very simple:

```jsx
app.post("/puppies", (req, res, next) => {
    SomeAsyncOperation
        .then(response => {console.log("Everything worked out fine")})
        .catch(err => {
            // pass the error forward. If it's an instance
            // of a native js Error, it will be forwarded
            // to your error handler automatically!
            next(err);
        })
})

```

If Express determines the thing you're passing forward with `next()` is an instance of an `Error`, it will bypass any other middleware and send it directly to your error handling middleware.

> In the above example, be aware that you'll want to make sure to check the err object's message property if it will be sent to the client. We'll talk more about that later.
> 

### **Setting an appropriate response status**

Let's quickly fix the problem where we're sending `200` statuses back. Because the `res` object is a singleton (it's the same object everywhere you come across it in Express), we can set the status before passing our error forward to the error handling middleware:

```jsx
app.get("/puppies", (req, res, next) => {
    if (req.query.someRequiredQuery === undefined) {
        res.status(400)
        throw new Error("You must include a query called `someRequiredQuery` in your request!")
    }
})

app.post("/puppies", (req, res, next) => {
    SomeAsyncOperation
        .then(response => {console.log("Everything worked out fine")})
        .catch(err => {
            res.status(500)
            next(err);
        })
})

```

This way, our error handling function doesn't need to try and determine what status code should be sent.

### **Sending the right error message to the client**

If you ensure that you're sending an actual `Error` object to the error handling middleware (could be any of [JavaScript's native error types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types)), it will have a property called `message`. That message is the text you (or the 3rd party library that had an error) set on the error when creating it:

```jsx
const myErr = new Error("This is my message");
console.log(myErr.message);  // "This is my message"

```

Let's make all error responses we send back from the server have the same "shape":

```jsx
app.use((err, req, res, next) => {
    console.error(err);
    return res.send({error: err.message})
});

```

> The property of the object you're sending back doesn't have to be called error, you can choose anything you want. However, the actual error object has a built-in property called message so you can't change that part.
> 

Now when we make our `GET` request without including the `someRequiredQuery` query, we get this:

!https://coursework.vschool.io/content/images/2018/09/Screen-Shot-2018-09-27-at-2.33.39-PM.png

The status is set to `400` and the error message is what we expected it to be.

## **Conclusion**

Make sure to include these practices in your Express apps so you can gracefully handle errors that may pop up in your application.

If you're using a 3rd-party library that passes errors down, you may want to format the messages from those errors yourself so they're more helpful to the client. E.g. Mongoose gives you the ability to do this in a [post-save hook](https://mongoosejs.com/docs/middleware.html#error-handling)