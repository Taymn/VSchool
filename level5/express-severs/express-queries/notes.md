# URL Queries

## Lesson
    ```js
    code: './express-router/server.js'
    ```
Query String - (typically to filter results)
    * Begins with the "?"
    * Built of key=value pairs
    * Multiple queries separated by the "&". 

## Document

!https://coursework.vschool.io/content/images/size/w2000/2015/12/banner4.jpg

When you're first learning about the Request/Response cycle, there's a fairly confusing topic that you'll run into frequently: **URL parameters** and **query parameters** (also called query strings).

The reason these can be confusing is because people frequently interchange the two terms. So we're going to clarify what they are and how to handle them in Express.

### **URL Parameters**

URL Parameters are parameters whose values are set dynamically in a page's URL. They are part of the URL route that is being called by the client. When practicing REST in your API structure, you'll usually structure your routes like this:

- `GET` to `/noun` returns a list of ALL "noun" items in the database.
- `GET` to `/noun/<idNumber>` (e.g.: `/noun/12`) returns the ONE object of type "noun" with the id of `<idNumber>`.
- `POST` to `/noun` adds a new "noun" to the list of all nouns.
- `PUT` to `/noun/<idNumber>` UPDATES the instance of "noun" with the id of `<idNumber>`.
- `DELETE` to `/noun/<idNumber>` REMOVES the specified "noun" from the list of all "noun"s.

Example:

- `GET` to `/car/make` returns a list of ALL makes in the database.
- `GET` to `/car/make/12` returns ONE car make with the ID of 12 (let's say it's "Toyota").
- `POST` to `/car/make` will add a new car make to the list of all makes. You don't make a `POST` to `/make/12`.
- `PUT` to `/car/make/12` will UPDATE the info on the "Toyota" car make.
- `DELETE` to `/car/make/12` will REMOVE "Toyota" from the list of car makes.

In the above example, you won't see a `PUT` request made to `/car/make` because you need to update only a single instance. You won't see a `POST` request to `/car/make/12` because that object already exists. (If you want to change it, make a `PUT` request instead.) You also *usually* won't see a `DELETE` request to `/car/make` because that implies you want to remove ALL car makes from the database, which seems too dangerous to allow. However this is still a possibility if you want to do that.

The problem with the above structure is that we need a way to handle dynamically-changing `idNumber`s. We don't want to write routes in Express to handle `/car/make/1`, `/car/make/2`, etc. for every car make.

**Enter `req.params`!**

When you're defining the routes that have a dynamically changing piece, you simply put a placeholder variable name (beginning with a `:`), and Express will put that variable on the `req.params` object from the incoming request:

```jsx
const express = require("express");
const app = express();

app.get("/car/make/:makeId", (req, res) => {
    console.log(req.params);
    // Look up the car make with the id of req.params.makeId in the database
    // res.send(that car make);
})

```

So a GET request to `/car/make/12` would print `{ makeId: 12 }` to the console. Now we have a way to handle dynamic URL parameters in a RESTful best-practices way!

### **Query Strings**

These are frequently (and confusingly) referred to as url parameters, but they're not the same thing! Query strings should be used for any kind of filtering you're planning on doing on the specified resource. To continue the car make example above, you might have something like this:

- `GET` request to `/car/make/12/model` returns a list of Toyota car models
- `GET` request to `/car/make/12/model?color=mintgreen&doors=4` returns a list of Toyota car models, but filtered so only models with 4 doors and an stock color of mint green are returned.

It doesn't make sense to add those filters into the URL parameters (`/car/make/12/model/color/mintgreen`) because according to REST, that would imply that *we want to get a bunch of information about the color "mint green".* Since what we really want is a filtered list of Toyota models, we use query strings to filter down the results that get returned.

Notice that the query strings are really just `{ key: value }` pairs in a slightly different format: `?key1=value1&key2=value2&key3=value3`.

- `?` initiates the query string key/value pairs
- `=` assignes the key to the value
- `&` separates each key/value pair

Fortunately for us, Express handles the incoming query string in a very similar way to the URL paramters: It separates them back out into a JavaScript object with the specified key/value pairs, and puts it on `req.query`!

```jsx
app.get("/car/make", (req, res) => {
    console.log(req.query);
    // GET a list of all car makes from the database,
    // filtering by the key/value pairs in req.query
});

```

So a GET request to `/car/make?color=mintgreen&doors=4` would print `{ color: "mintgreen", doors: 4 }` to the console. Now we have a way to handle dynamic query strings!

### **Conclusion**

Spend some time playing with these in a simple Express app and using Postman. The structure of HTTP requests is complex and can be confusing, and the more time you spend playing around with it and reading up on it, the more it'll start to make sense.