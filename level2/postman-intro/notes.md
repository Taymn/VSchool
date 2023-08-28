# Notes

Postman is an important tool we will use for the rest of class.

We will use to for creating requests to help us explore APIs and for testing our own API endpoints.

### **Installation**

There is a Chrome extension for Postman, but for this class we will use the MacOS version.

Go to https://www.getpostman.com/ and download Postman for MacOS.

### **Tutorial**

Postman has a tutorial of how to use it. Follow along in this tutorial to become aware of what it can do.

### **Endpoints**

API endpoints are unique URLs that deliver data. The APIs we will work with and create will deliver [JSON](https://coursework.vschool.io/json/)

Some examples are:

- http://pokeapi.co/api/v2/pokemon/1
- http://swapi.co/api/people/2
- https://api.vschool.io/ericnatejones/todo/
- https://waterservices.usgs.gov/nwis/iv/?format=json&sites=13246000&parameterCd=00060

If you go to any of these URLs, you will find data in the form of JSON. We will use go through how to use Postman to do this data next.

### **GET**

Open Postman. There is a dropdown that probably has GET selected. This dropdown will have many different kinds of requests. Don't be overwhelmed by these, we will probably only use GET, POST, PUT and DELETE in this class.

The drop down should have GET selected. Now paste a URL. Try this one to compare: http://swapi.dev/api/people/2

Click Send.

You should have gotten this block of data:

```jsx
{
  "name": "C-3PO",
  "height": "167",
  "mass": "75",
  "hair_color": "n/a",
  "skin_color": "gold",
  "eye_color": "yellow",
  "birth_year": "112BBY",
  "gender": "n/a",
  "homeworld": "http://swapi.co/api/planets/1/",
  "films": [
    "http://swapi.co/api/films/5/",
    "http://swapi.co/api/films/4/",
    "http://swapi.co/api/films/6/",
    "http://swapi.co/api/films/3/",
    "http://swapi.co/api/films/2/",
    "http://swapi.co/api/films/1/"
  ],
  "species": [
    "http://swapi.co/api/species/2/"
  ],
  "vehicles": [],
  "starships": [],
  "created": "2014-12-10T15:10:51.357000Z",
  "edited": "2014-12-20T21:17:50.309000Z",
  "url": "http://swapi.co/api/people/2/"
}

```

It should hopefully look pretty like this too. If it doesn't, open a new tab. That should restore the defaults. Make sure it's a GET request.

You may say, "But we could have gotten that data by just putting that URL in the browser!"

That's true. For most GET requests, Postman is nice, but not necessary. Some GET requests, however, require headers.

Click on the Headers tab. You can see that headers are a key/value pair. An example of a header you will likely see is authorization. The key might be "AuthToken" and the value might be "e8234ghg8"

### **POST**

POST requests is where Postman becomes really useful.

While GET requests retrieve information, POST requests can save new information in the form of a new object in the APIs database.

GET - Retrieve dataPOST - Save new data

There are a few settings we will change for the purposes of the course.

Change the dropdown from `GET` to `POST`. Enter the URL `https://api.vschool.io/[your name]/todo/` and replace the name section in the URL with your name. If your name is Fred, you can use `https://api.vschool.io/fred/todo/`

The creator of this API (our beloved Bob) made it so that when a new object was submitted using a POST request and this URL, it would add a new todo item.

If the user (in this case fred) already exists, it would add to the list of todos.

If the user doesn't exist, it would start a new list belonging to the new user.

Next thing we need to change is in the `body` tab. Change `form-data` to `raw`.

There is now an orange dropdown that probably says `text`. Change that to `JSON (application/JSON)`

In our text field, we can now submit a JSON object. The object must follow this pattern:

```jsx
{
    "title": "Title here", // this one is the only thing that is actually required
    "description": "Description here",
    "price": 20, // Must be a number of some kind (integer or float)
    "imgUrl": "http://www.example.com/some-link-to-a-cool-photo.jpg",
    "completed": false // must be a boolean (true or false). If nothing provided, defaults to false.
}

```

Like the example says, `title` is the only key/value pair that's required. Go ahead and send a new item!!

If your item didn't follow the pattern above, you will receive an error in the response.

If your item did follow the pattern above, you will receive back your newly created item!!

### **PUT**

We are going to do one more get to show how to use this api to get one specific todo item.

If you post several todo items, and do a GET to the URL, you will get a list of all the todo items. But to get one todo item, we add one more part to the URL.

`https://api.vschool.io/fred/todo/[_id-of-the-specific-item]`

So, find the `_id`, and make a get request to make sure you are getting the todo item you intended to.

We need to be able to select just one to be able to edit or delete (PUT or DELETE) specific todo items.

Change the dropdown from GET to PUT.

You may need to scroll up to get to the body that you can submit. This will be similar to setting up a POST request. Select the same options as when we did the POST.

A PUT updates or edits an already existing item.

This API is written to only update the fields (key value pairs) that are submitted, but if it receives all the fields, it will just update the ones that are different.

Go ahead and edit one or more of the appropriate fields.

Appropriate fields for this API are:

- title
- description
- price
- imgUrl
- completed

You can add new fields to this item, but be sure that is [valid JSON](http://jsonlint.com/)

Submit your PUT and hopefully the response is your new item. If the JSON you sent wasn't valid JSON or didn't follow the pattern we went over, the response will be the old item.

### **DELETE**

Let's end on an easy one! Don't change the URL, it will still be the normal URL with the items _id that you want to delete.

Change the dropdown to DELETE and click send.

You should get a:

```jsx
{
  "msg": "Successfully deleted record"
}

```

Hooray!!

Be sure to practice using Postman every chance you get. It will soon become an invaluable tool.