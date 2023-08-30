# Lessons
# Intro to Axios
    - Axios can be downloaded as a node_module, or attained through a CDN
    - A CDN, or Content Deliver Network, is loaded into your application through a script tag on your html page.
        - The axios CDN can be found on cdnjs.com's website: https://cdnjs.com/libraries/axios
        
    - Axios is a promise based HTTP client.
    - This means it allows us to make HTTP requests, and the handling of those requests and the subsequent responses on the front end is handled with promises.
    
# GET request
    - A Get request as we recall is for 'getting' data
    - This can be requesting an entire webpage, or requesting data that we can manipulate for our webpage.
    
    - In the context of this course, we will always be using axios to get and manipulate data rather than receiving an entire webpage.
    
    
    - For these lessons we will be using the V school Todo API as it will allow us to practice all four of the HTTP methods we are learning.  The documentation can be found here:
        - https://coursework.vschool.io/v-schools-todo-api-documentation/
    
# Post Request

    - Allows you to send data to a Database to have saved.
    - The post request requires you send the object along with the request as the request 'body'.
    
    - V School API documentation: https://coursework.vschool.io/v-schools-todo-api-documentation/

# Delete Request

    - The delete request is for removing an item that currently exists in the database.
    
    - Delete requests will typically require the id or identifier of the specific resource so that the database knows which item to remove.
    
    
    - V School API documentation: https://coursework.vschool.io/v-schools-todo-api-documentation/

 # PUT request

    - The put request is for updating an existing item in a database
    - The method will need both the id of the item to update, and the data in which it will be updated with.
    
    
    - V School API documentation: https://coursework.vschool.io/v-schools-todo-api-documentation/

# Document

# Notes

!https://coursework.vschool.io/content/images/size/w2000/2017/08/http-banner.jpg

Axios is a JavaScript library that helps us make AJAX calls to APIs.

We will being using to make requests for data in the form of JSON.

There are a few acronyms in those two statements that should be understood before getting too deep in how to use Axios. If those two statements made sense to you, click [here](https://coursework.vschool.io/axios/#axios)

### **AJAX**

AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

Asynchronously means that it's happening at the same time as your app is loading or doing other tasks.

The steps an AJAX call makes are the following:

1. An event occurs in a web page (the page is loaded, a button is clicked)
2. An XMLHttpRequest object is created by JavaScript
3. The XMLHttpRequest object sends a request to a web server
4. The server processes the request
5. The server sends a response back to the web page
6. The response is read by JavaScript
7. Proper action (like page update) is performed by JavaScript

Previously, there was a lot of code required to make these requests. Many library's created solutions to preform the common functions needed. jQuery had a `.get()` method, and a `.ajax()` method. We will learn how to use Axios and Axios's methods. Axios's whole job is to help us with these calls. It is what we will use in React. Angular has a $http service that does this same thing. If jQuery and Angular both have their own, why doesn't React?

In the creators words, "In general we resist adding features that can be implemented in userland. We don't want to bloat your apps with useless library code."

### **APIs**

API is a very general term used to describe applications talking with each other. Within the context of this class, it will be servers communicating with our stuff.

For example, we can have our app ask for weather data from a weather API.

In the past, data was sent in XML (The X in AJAX). Modern web developers use JSON.

### **JSON**

JSON is JavaScript Object Notation. It's pretty much a JavaScript object with a few key differences. Axios will take care of turning JSON in JavaScript for us. It's not too difficult because the two are structured the same.

# **Axios**

Axios is an NPM package, so we will need to install it into whatever project we are working on. For now, set up a node environment with the following commands.

```jsx
mkdir axios-practice
cd axios-practice
npm init -y

```

Now install axios.

```jsx
npm install axios

```

Create an `app.js`

We will be using Star Wars API for a bit because it's free and easy. We can request information for all sorts of Star Wars stuff.

Go to swapi.co

Often times you will need to read some documentation to understand how an api works. In this one, different urls will give you different data. The data you wish to request will be specified by the parameters given in the url. `https://swapi.co/api/people/` would suggest that you want a list of the people. If you go to that url, you will see an array of people. You can also request data on just one person at a time like this: `https://swapi.co/api/people/1`

We want that information to be available to our apps, and we'll use the axios library to do that. First, import axios using `require`.

```jsx
//app.js

const axios = require("axios");

```

** if the above is throwing errors, you can try directly adding the axios script to your index.html as shown below.

```jsx
To use Axios on the front-end vs with node, just use the cdn.
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

We can then use Axios's `.get()` method to request the data. `.get()` only requires a string that is the url. axios.get('the url') We might be tempted to do something like this:

```jsx
//app.js

const axios = require("axios");

const lukeSkywalker = axios.get('https://swapi.co/api/people/1');

console.log(lukeSkywalker);

```

If we do this, however, we will see `Promise { <pending> }`

This is because Axios is utilizing AJAX's synchronous abilities. Your JavaScript file and the request for the data are happening AT THE SAME TIME!!! Instead of `.get()` assigning our `lukeSkywalker` variable the actual data, it returns a `promise`. A promise that it will give us data eventually.

It's like asking your friend, "What's the weather like outside?" and she says, "I don't know right now, but I PROMISE I will get that information for you" She goes out side, comes back, and **THEN** tells you what the weather is.

This promise is an object. It has a `.then()` method on it. `.then()` takes a callback function that will run when the data comes back.

1. We will write a function that will run when the data comes back.
2. Then we will use axios's `.get()`
3. We will then use our first function in the promises `.then()`

```jsx
function assignResponseToVariable(response){
    console.log(response.data);
}

axios.get('https://swapi.co/api/people/1').then(assignResponseToVariable)

```

To simplify this, we will usually see the function as an anonymous function like this:

```jsx
axios.get('https://swapi.co/api/people/1').then(response => {
    console.log(response.data);
})

```

What's up with that `response` you ask? Our callback function takes one argument. There, we are just defining how we will refer to the response object that comes back from the API. All the data is in `response.data`.

### **errors**

Using our previous example of our friend checking the weather for us, imagine she's gets distracted, breaks her leg, or for some other reason isn't able to see what the weather is doing. She would come back and say, "I'm sorry, I promised you I would tell you what the weather was like, but the front door is stuck shut."

We can **catch** these errors with the `.catch()` method.

```jsx
axios.get('https://swapi.co/api/people/1').then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log(error)
  });

```

We can make posts with the `.post()` method. This method takes two arguments. The url, and the object to be posted. If you aren't familiar with making posts, this might be a good stopping place for now. Consider learning about the tool [Postman](https://coursework.vschool.io/postman/) and then coming back.

We will be using the VSchool todo API. The creator of this API (our beloved Bob) made it so that when a new object was submitted using a POST request and the following URL, it would add a new todo item.

The todo API is great for practicing your get, post, put, and delete mehtods. Read the documentation [here](https://coursework.vschool.io/v-schools-todo-api-documentation/).

```jsx
https://api.vschool.io/[your name]/todo/

```

You can then "get" a list of your current todos using the same url.

The code to post something would look like this:

```jsx
axios.post('https://api.vschool.io/suzan/todo/', newTodo).then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log(error)
  });

```

The only difference is switching out `get` with `post`, and throwing in a `newTodo` object as a second arguments. Notice that we still receive a response back. That is because a `POST` returns a response. In the case of this API, it would give us our new todo. This is nice because there are a few default properties like `"completed": false` or on other APIs maybe a date and time of creation.

If you ran this code, you'd get an error complaining about `newTodo` not being defined. Define it earlier in your code.

It needs to be an object and at least have a "title" property. If you give it properties that API does take, it will ignore them.

The last argument of any either of these is what's called a `config` object. We use this to set headers or other things we might need to change about our requests.

Examples of a `put` and a `delete`. Both require the `_id` of the single todo after `todo/`:

```jsx
axios.put('https://api.vschool.io/suzan/todo/5d0d36055723f72a73236f26', editedTodo).then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log(error)
  });

```

```jsx
axios.delete('https://api.vschool.io/suzan/todo/5d0d36055723f72a73236f26').then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log(error)
  });

```