# Intro to REST API architexture

## Documentation

As you begin to develop your own backend API for accessing data, you'll find that things can get complex *very* quickly. There's a principle called **REST** (short for **Re**presentational **S**tate **T**ransfer) which is a widely used design principle when creating APIs. There are a lot of specific, nuanced rules in the REST specifications, but we're going to just focus on those that are the most important - and most helpful to you as a beginner - when it comes to creating your own RESTful API. Following these rules will help you stay organized as an API designer, and will make your API much more understandable and useable by anybody you eventually want to open parts of your API to.

### **Example:**

To help us be more specific, we'll be using an example of a website that sells outdoor equipment, such as snowboards, skis, bikes, etc. It's important to note that there isn't any one *right* way to structure an API, so the solution we come up with won't necessarily be the only solution possible.

### **Terminology**

A list of terms we'll be using throughout this lesson:

- **Resource**: A single instance of an object. For example, a specific brand/model of snowboard.
- **Collection**: A collection of similar objects, e.g.: all the mountain bikes (any brand, any model) that our store sells.
- **Base (or Root) URL**: The beginning part of the URL used for all requests against our API. Usually looks something like `http://api.equipment.com/v1` or `http://equipment.com/api/v1`. The `v1` indicates that this is the first version of your API, which eventually you may decide to refactor/change and create a second, more updated version. This doesn't mean you can't make changes to your API once you've created it, but rather allows you to distinguish your different APIs if you decide to do a major overhaul of the entire API.
- **API Endpoint**: The part that comes after the Base URL. Usually looks something like `/ski` or `/ski/:skiId`.
- **`:nounId`**: The colon (:) before the word indicates that we don't mean the literal string *"nounId"* as part of the endpoint, but rather that we are expecting some dynamic data to be inside there. From the above example of `/ski/:skiId`, one actual endpoint might be something like `/ski/1234` (where `1234` is the unique ID number of one of the skis in our database.
- **Client**: The person/machine that is consuming the information from your API. In our course, this will usually be a browser application (like an Angular app running in a Chrome browser), but could also be an iOS or Android app, or even another server reaching out to our API for data.
- **Server**: The machine your API is running on.
- **Request method**: The kind of operation we want to perform on the database. Available options are GET, POST, PUT, and DELETE. GET is for retrieving (reading) data, POST is for creating (writing) new data, PUT is for updating data, and DELETE is for removing data.

### **Nouns > Verbs**

One of the top priorities in adhering to RESTful principles is that your API endpoints should be easy to understand and make a lot of sense in terms of the resource you're providing to the client. For instance, a common practice pre-REST was to have endpoints like `/get-tents`, which sent back a list of tents from your database.

Because the request method already includes the type of command you want to do (GET, POST, PUT, DELETE), there's no need to have that information also in the endpoint itself. According to RESTful design, your endpoint should just contain the noun of the resource you're trying to perform an operation on. So instead of making a GET request to `/get-tents`, you'd instead create your endpoint to handle GET requests to `/tent` or `/tents`. (You can decide if you want your nouns to be plural or not. There isn't a definitive rule about which is better. Just be consistent. We'll be sticking to the singular for this lesson.)

Using nouns allows us to re-use endpoints and simply perform different actions based on the request method we're handling. Which brings us to the next section...

### **`GET` list, `GET` one, `POST`, `PUT`, `DELETE`**

### **GET list of resources**

A developer familiar with REST would understand that a GET request to `/bike` should return an array (list) of bikes from your API. In our outdoor equipment store, this would be a list of bikes we sell, which our client-side application would like display in a list page, where there are lots of bikes, their images, the brand names, and maybe the prices being displayed. Sometimes people will design their APIs so that a "GET list" endpoint such as `/bike` will limit some of the information of the resource being sent so as to not bog down the request with lots of information that probably won't get used. That, however, is up to you as an API designer.

**Examples:**

- `GET /tent` - returns a list of tents our store offers
- `GET /glove` - returns a list of gloves our store offers
- etc.

The `GET /tent` may return a JSON array like this:

```json
[
  {
    "brand": "Coleman",
    "model": "Sundome",
    "type": "dome tent",
    "shortDescription": "4-person dome tent",
    "itemNumber": 2000024582,
    "capacity": 4,
    ... etc ...
  },
  {
    "brand": "Marmot",
    "model": "Catalyst",
    "type": "backpacking",
    "shortDescription": "2-person Tent with Footprint",
    "itemNumber": 2000024583,
    "capacity": 2,
    ... etc ...
  },
  {... etc ...}
]

```

### **GET single resource**

Where a GET request to `/bike` should return an array of bikes from the database, a GET request to `/bike/:bikeId` returns a single resource object for the bike with the unique ID of `:bikeId`, whatever gets put into that part of the URL (e.g.: `/bike/123`). When a new resource gets saved to the database, it automatically gives the new item a unique ID. Because it is unique, it can be used to access the single "bike" instance later on with a GET request to `/bike/<whatever the id was of the bike>`. This GET request would return *a single bike object* rather than an array of objects, like so:

```json
{
    "brand": "Cannondale",
    "model": "CAAD12 Disc Dura Ace",
    "price": "$3,999",
    "type": "Road Bike",
    ...etc...
}

```

### **POST a new resource**

Considering the two endpoints we've talked about already, `/noun` and `/noun/:nounId`, which endpoint do you think we would submit a POST request to? Remember, a POST request is how you would create a new item in the server's database...

Since the endpoint `/noun/:nounId` refers to a specific, *already existing* resource in the database, it wouldn't make a lot of sense to submit a POST request to that endpoint. Therefore, you'll usually see the endpoint `/noun` for POST requests. It may help you to think of it as adding a new "noun" to the array of already-existing "nouns".

### **PUT (update) an existing resource**

PUT requests modify an existing resource, and therefore the endpoint would have to include the ID of the thing you're trying to update. Say you wanted to change the price of a helmet you sell, which has the ID of `42`. You would submit:

1. A PUT request to the `/helmet/42` endpoint
2. An object (or partial object) including the new price of the helmet. Something like:

```json
{
    "price": "$39"
}

```

> A note about PUT vs. PATCH: The above example of a PUT request that only updates a part of the full resource (assume the helmet also has a brand, model, size, color, etc. properties). Strictly speaking, if you're not submitting a new document that is intended to completely overwrite the original document, you should use a PATCH request instead of a PUT request. However, for the sake of simplicity and to avoid lengthy discussions on idempotency and the exact REST spec, we'll stick to using PUT requests in this class during our learning process. If you're interested in reading up on this, check out this post on the limitations of PATCH, this post from the REST cookbook, and this page on the REST API Tutorial
> 

### **DELETE**

DELETE is intended as a way to remove a single resource from the database. As such, the endpoint will be `/noun/:nounId`, as this is how you would indicate which item should be removed. (Think - sending DELETE to just `/noun/` would imply that you're removing *the whole collection of resources*, which is not usually an operation you'll want to allow.

### **Nesting API design**

Since resources are oftentimes connected to other resources, your APIs will usually end up being more complex than just `/noun[/:nounId]`. Let's assume you're writing your endpoints for the bicycles you sell at your outdoor equipment shop, and you decide you want to create an endpoint to look at all the components of a specific bike (frame, brakes, wheel size, etc.). If you want to look at the list of all components belonging to a specific bike, you may decide to create a new endpoint `/bike/:bikeId/components`. Since the last part of the endpoint is "components", that indicates it should be an array of all components from the bike with the specified ID earlier in the URL.

**Nesting the components resource in the bike endpoint like this doesn't necessarily mean that the data is nested in the database setup.** It may be nested inside the bike's data, but it may also be a completely separate collection which may have its own endpoint. For example, you may also write some endpoints, `/components` and `/components/:componentId`, to interact with *all* components, whether they belong to a bike, or a snowboard, or anything else.

### **Conclusion**

There's a lot of information out there, (and subsequently a lot of strong opinions) about what makes an API perfectly RESTful. Adhering fairly close to the principles of REST API design will help make your API logical and conventional, easy to use and follow for other developers, and well organized as your code grows.

To learn more about the specifics of REST API design, check out the [REST API Tutorial](http://www.restapitutorial.com/).

## Lesson

### Rest
    Representational State Transfer

### Resource
    Single item (object) in a database - /user

### Collection
    collection of similar items in a database - /users

### Base (root) URL
    homepage - http://amazon.com/

### API Endpoint
    grouping in a database = http://amazon.com/movies
    item(id) in a database - http://amazon.com/movies/(id)

### Paramaters
    /movies/:movieId

### Query (query string)
    /movies?genre=action&year=1999

### Client
    FE

### Server
    Intermediary

### Request Method
    CRUD: Get, Post, Put, Delete