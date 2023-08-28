# JSON
    - Javascript Object Notation
    - JSON is a data format for transfering data that shares a strong resemblance to a Javascript object.
    - JSON can be used to transfer:
        - strings
        - numbers
        - booleans
        - arrays
        - objects
    - JSON can be coverted to javascript using the JSON.parse() method.
    - Javascript can be converted to JSON using the JSON.stringify() method.
    
    Rules:
        - Must use double quotes
        - No trailing comma on the last entry in a JSON object
        
    - jsonlint.com - validate your json
      
      JSON stands for JavaScript Object Notation. 

# Notes

# **Document**

JSON is a syntax for storing and exchanging data. It will be what we use for storing data in a data base, and using the data from other websites in our own applications.

Because we are dealing with objects, you will see many key:value pairs.

If we received some data from Instagram that we wanted for our site, the data might look like this.

```jsx
{
    "userName": "johndoe",
    "images": ["smile.img", "frown.img"]
}

```

What are the keys and what are the values in this example?

`userName` and `images` are the keys, and the stuff on the right side of the colon are the values. Notice `images` has an array as its value, just like JavaScript. The value could also be an object.

It is very similar to regular JavaScript objects with a few exceptions. The keys always need quotation marks. The quotation marks always need to be double (`"` <-- correct VS. `'` <-- incorrect).

Unlike a regular JavaScript object, the value will never be a method/function. It will only ever be an object, string, number, or array.

JSON is an easy way for computers to look at data. To make it easier for us to look at, use a formatter. There are cool websites and chrome extensions that will do it for you.

If you need to know if you've written JSON correctly, you can use [this](http://jsonlint.com/#).

Practice writing more and more complicated JSON.