# Web Storage

# Local Storage 
    - Persists on page refresh and closing of the browser

# Session Storage
    - Does not persist on refresh or closing of the browser
    
## Both Session and Local storage are saved as JSON in the browser

In just about any *useful* application you'll make, you'll need a way to persist (keep) data. Otherwise, every time you refresh the page, close the browser, etc. you will lose everything you put into the application. Which obviously makes for a pretty terrible application...

There are a number of options you have when it comes to persisting data:

- **Cookies**: Cookies are stored in your browser, and are typically meant to store some kind of information about any of your HTTP requests. They are sent in the headers of every single HTTP request your browser makes. They are also very limited in size (4 KB!). One thing that can be useful about cookies that you don't get with localStorage is the ability to set an expiration on the cookie, so it simply "dies" on the specified expiration date/time.

You won’t use these at V School, but may be quizzed about them in an assessment

- **Database**: This is a very robust option, in that it can definitely store any information you need it to store. The downside here is that it will require a lengthy database and server setup process. You'll likely need a database to do any kind of real web application development, but for small and simple data storage tasks, it may be overkill
- **Local Storage**: Your browser is able to actually store basic key: value pairs with data in them to your hard drive. This storage, called local storage because it is only stored locally on your machine, can hold basically as much data as you want to put into it, and it will not go away unless you specifically clear it out manually. Oftentimes this is good for things like saving a user's customized settings, for example.
- **Session Storage**: Pretty much identical to Local Storage, except that it only persists while the browser session is active. If you close the browser or the tab you're saving things to Session Storage on, it will clear out and your data will be removed. This is nice because it won't take up hard drive space, as long as you're not saving any information you need to persist between sessions. An example of how this might be useful is if the user has more than one window of your application open and they need to have data shared between the windows.

### **How to use Web Storage (localStorage and sessionStorage)**

*Note: We'll be referring to Local Storage only from here on out, but if you want to use Session Storage instead, just replace any instances of `localStorage` with `sessionStorage`.*

If you think of Local Storage simply as a key: value paired object, it should be easy to grasp. `localStorage` is built into JavaScript, and doesn't necessarily need any other dependencies for it to work.

There are two ways to add, access, and remove data from localStorage and sessionStorage.

# **1. Using the built-in methods `setItem`, `getItem`, and `removeItem`**

In just about any *useful* application you'll make, you'll need a way to persist (keep) data. Otherwise, every time you refresh the page, close the browser, etc. you will lose everything you put into the application. Which obviously makes for a pretty terrible application...

There are a number of options you have when it comes to persisting data:

- **Cookies**: Cookies are stored in your browser, and are typically meant to store some kind of information about any of your HTTP requests. They are sent in the headers of every single HTTP request your browser makes. They are also very limited in size (4 KB!). One thing that can be useful about cookies that you don't get with localStorage is the ability to set an expiration on the cookie, so it simply "dies" on the specified expiration date/time.

You won’t use these at V School, but may be quizzed about them in an assessment

- **Database**: This is a very robust option, in that it can definitely store any information you need it to store. The downside here is that it will require a lengthy database and server setup process. You'll likely need a database to do any kind of real web application development, but for small and simple data storage tasks, it may be overkill
- **Local Storage**: Your browser is able to actually store basic key: value pairs with data in them to your hard drive. This storage, called local storage because it is only stored locally on your machine, can hold basically as much data as you want to put into it, and it will not go away unless you specifically clear it out manually. Oftentimes this is good for things like saving a user's customized settings, for example.
- **Session Storage**: Pretty much identical to Local Storage, except that it only persists while the browser session is active. If you close the browser or the tab you're saving things to Session Storage on, it will clear out and your data will be removed. This is nice because it won't take up hard drive space, as long as you're not saving any information you need to persist between sessions. An example of how this might be useful is if the user has more than one window of your application open and they need to have data shared between the windows.

### **How to use Web Storage (localStorage and sessionStorage)**

*Note: We'll be referring to Local Storage only from here on out, but if you want to use Session Storage instead, just replace any instances of `localStorage` with `sessionStorage`.*

If you think of Local Storage simply as a key: value paired object, it should be easy to grasp. `localStorage` is built into JavaScript, and doesn't necessarily need any other dependencies for it to work.

There are two ways to add, access, and remove data from localStorage and sessionStorage.

# **1. Using the built-in methods `setItem`, `getItem`, and `removeItem`**

```jsx
// Save something to web storage:
localStorage.setItem("keyName", "value");

// Get something from web storage that  was previously saved:
var myValue = localStorage.getItem("keyName");

// Remove an key/value pair from localStorage:
localStorage.removeItem("keyName");

```

# **2. Treating `localStorage` and `sessionStorage` like objects**

```jsx
// Save something to web storage:
localStorage.keyName = "value";

// Get something from web storage that  was previously saved:
var myValue = localStorage.keyName;

// Remove an key/value pair from localStorage:
delete localStorage.keyName;

```

It's important to keep in mind that web storage only stores strings of data. So if you need to store or retrieve more complex data types, you can use `JSON.stringify()` to turn complex data into a string before saving it to web storage or `JSON.parse()` to turn something back into a complex data type before trying to display or manipulate it.

```jsx
var obj = {
    name: "Billy",
    age: 45,
    cars: [
        {
            year: 2002,
            make: "Toyota",
            model: "Camry"
        },
        {
            year: 2018,
            make: "Tesla",
            model: "Roadster"
        }
    ]
}

// To save this object to web storage:
localStorage.user = JSON.stringify(obj);

// To retrieve this object from web storage:
var user = JSON.parse(localStorage.user);

```

One final thing to note: you'll oftentimes see `window.localStorage` while searching around on the web. Just know that `localStorage` is basically set up like a shortcut for saying `window.localStorage`, so unless you set your own variable called `localStorage` (probably not a good idea anyway), you're fine just using `localStorage`. Same goes with `sessionStorage` vs. `windows.sessionStorage`. Here's a [stackoverflow.com post](http://stackoverflow.com/questions/12660088/is-there-any-difference-between-window-localstorage-and-localstorage) for reference.And that's it! You're all set with everything you need in order to start using web storage. This can be a great solution to use while you're testing front-end applications before having the chance to build up a database for storing data.

### Images missing from Scrimba

![Screen Shot 2021-09-14 at 9.12.43 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/11e38a97-d524-4627-a4dd-66b1fa8d96f6/Screen_Shot_2021-09-14_at_9.12.43_AM.png)

![Screen Shot 2021-09-14 at 9.12.09 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4d2cb6fc-50ac-4b82-8824-87b1d64c83a3/Screen_Shot_2021-09-14_at_9.12.09_AM.png)

https://www.notion.so/vschooldesign/Web-Storage-393c7c8127654179af661b27046a9b7f?pvs=4#95c0757e1c7348ab82ab98ee2811caa3

https://www.notion.so/vschooldesign/Web-Storage-393c7c8127654179af661b27046a9b7f?pvs=4#5a696dc23b7c4c299fc2ead30da3518e