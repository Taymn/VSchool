# Notes

****Introducing AJAX****
In the past, web pages required reloading the whole page every time you wanted to update the content. For example, in web-based email (like gmail.com) this meant that users had to manually reload their inbox to check and see if they had any new email. This had huge drawbacks: it was slow and it required user input (they had to know that they needed to refresh the page to re-check their email). When the user reloaded their inbox, the server had to reconstruct the entire web page and resend all of the HTML, CSS, JavaScript, as well as the data containing the user's email. This was hugely inefficient. Ideally, the server should only have to send the user's new messages, not the entire page. By 2003, all the major browsers solved this issue by adopting JavaScript's `XMLHttpRequest` (XHR) object, allowing browsers to communicate with the server without requiring a page reload.
The `XMLHttpRequest` object is part of a technology called AJAX (**A**synchronous **J**avaScript **a**nd **X**ML). With Ajax, data can now be passed between the browser and the server, using the `XMLHttpRequest` API, without having to reload the web page! With the widespread adoption of the `XMLHttpRequest` object it quickly became possible to build web applications like Google Maps and Gmail that used `XMLHttpRequest` to get new map tiles, or new email without having to reload the entire page.
****Working with AJAX****
Below is an example of how to create a new XMLHttpRequest object and how to use it to get data and use that data without having to refresh the page. We'll walk through each piece below.

`const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText;
        const data = JSON.parse(jsonData);
        const name = data.name;
        document.getElementById("demo1").textContent = "JSON results: " + jsonData;
        document.getElementById("demo2").textContent = "Parsed JSON's 'name' property: " + data.name;
        spaceshipurl = data.starships[0];
        console.log(spaceshipurl);
    }
};

xhr.open("GET", "http://swapi.co/api/people/1/", true);
xhr.send();`

Let's walk through each piece:
****Creating the xhr object****

`const xhr = new XMLHttpRequest();`

We oftentimes simplify the name "XMLHttpRequest" to just "XHR". In the first line of our XHR code, we use the built-in JavaScript `XMLHttpRequest` constructor to create a new object that we can use to perform an AJAX request.
Next, we're going to skip ahead to the last couple of lines before we talk about the whole middle section with the `onreadystatechange`. Understanding the `open` and `send` methods will give us more insight into the `onreadystatechange` event handler.
**`xhr.open()`**

`xhr.open("GET", "http://swapi.co/api/people/1/", true);`

The `open` method on the XHR object allows us to specify a few bits of additional information dealing with the AJAX request. In the first parameter, we tell it we want this request to be a "GET" request. If you don't know what that means yet, the short answer is that it's our way of telling the server we want to receive (GET) information rather than submit (POST) information.
The second parameter is the URL address of where this data resides. In the example above, the URL `http://swapi.co/api/people/1/` is a location on the web where JSON data about an individual Star Wars character (in this instance, Luke Skywalker who has an ID of 1 in their database) can be found. If you go to that url in a browser, you'll see a page with a bunch of JSON data on it. When you make an XHR request to that URL, the data that comes back is that JSON, which can then be turned into a JavaScript object and used in your web app!
The third parameter is a boolean of whether or not we want the request to be asynchronous. One of the biggest benefits of AJAX is that it is asynchronous, so we'll typically want this to be set to `true`.
**`xhr.send()`**

`xhr.send();`

The next line with the `send` method is what kicks off the whole process. It simply sends the request to the specified address.
**`readyState` and `onreadystatechange`**
Every XHR object has a property called `readyState`. The `readyState` property give us updates on how far along in the process the request is before, during, and after executing the `send` method. For example, when you first create the XHR object, it starts at 0, which means "unsent". Once you call the `open` method, it changes the `readyState` property to 1, which means "opened". Every time the `readyState` property changes, the XHR object also fires a `readystatechange` event so that we can do things throughout the AJAX process if we want. The XHR object has a method it runs every time there is a `readystatechange` event, called `onreadystatechange`.
Here's the relevant code from above again:

`xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText;
        const data = JSON.parse(jsonData);
        const name = data.name;
        document.getElementById("demo1").textContent = "JSON results: " + jsonData;
        document.getElementById("demo2").textContent = "Parsed JSON's 'name' property: " + data.name;
        spaceshipurl = data.starships[0];
        console.log(spaceshipurl);
    }
};`

In the above code, we set the `onreadystatechange` method to our own function, so any time there is a `readystatechange` event, it will now run our code.
The first things we're doing in this code is checking what the `readyState` and `status` properties are. We do this because we need to know for sure that we have successfully received some response data from our request before we can start doing anything with that data. When the `readyState` property is 4, that means the server has sent back a response. The response **status** that comes back from a GET request will be `200` if the request was successful. So in our if statement, we need to check that the `readyState` is 4 and the `status` is 200.
Once that is true, we can find the data inside the `responseText` property of the XHR object (`xhr.responseText`).
The data that we got back from the server is in JSON format, which alone doesn't help us access or change anything with plain JavaScript. We need to use `JSON.parse()` to change the JSON data into a useable JavaScript object. This is what `var data = JSON.parse(jsonData);` is doing. Now we have the `data` variable which contains the JavaScript object version of the JSON data we received back from the server.
****Using the data****
The rest of the code inside the `if` block is all about using the data we got back to display the results to the user. While the result on the page may seem trivial (the page goes from being a blank page to having some text on it), it's actually a very revolutionary thing in the history of web development! Users no longer have to submit a form to the server, wait for the server to render a brand new HTML page with all the data the user asked for and wait for the browser to re-load all the same HTML, CSS, and JavaScript that it had already loaded, now with just a few small changes. Instead, the user can now interact with the web page and let all the data exchanges with the server happen in the background while they continue to use the application.
****Conclusion****
For most of the web applications you write, you probably won't be writing manual XMLHttpRequest objects and checking for readyState changes. Libraries like Axios and jQuery make this process *much* more developer-friendly. However, understanding what is happening underneath all the magic of libraries that make this easier is helpful and could help you understand problems you may face when using other people's code.

# ** Documentation**
# Part 1
# XMLHttpRequest constructor

    - The Javascript XMLHttpRequest constructor is used to make asynchronous HTTP requests from a javascript application.
    
    - This constructor uses callbacks to track the progress of a server requests and handle the response sent back.

# Part 2

# XMLHttpRequest
    
    - Two methods are used to set up and send the HTTP request, these methods are:
        - xhr.open() - to set up the request
        - xhr.send() - to send the request
        
    - The xhr object will also store the data received from the server as the xhr.responseText
        - For the servers we will be using, the responseText will be in JSON format.