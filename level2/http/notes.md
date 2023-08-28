In this article we will be going over the basics of HTTP, along with how information is passed around the web between web servers and web browsers. This is important because a program or website's ability to maintain information is due to it being able to request and save information through a server.

# **HTTP & Protocols**

HTTP stands for **Hypertext Transfer Protocol**. Protocols are rules, so HTTP is the set of rules used to govern how web browsers and web servers communicate and exchange information on the web.

> Whenever you make a request on the web, it always begins with http as that is the protocol being used to request the website you are visiting.
> 

# **IP Address**

If HTTP defines the protocols for transferring data across the web, how does a web server know which computer to send information to once it receives a request?

IP addresses are the unique identifier that each computer has. Since the IP address is specific and unique on each computer, servers sending data across the web know where to send information when a request comes in. This is how you are able to go to www.google.com, and google knows to send it's homepage to you on your specific system.

> An IP address is specified by 4 numbers separated by 3 periods. The numbers can range from 0 - 255. Ex: 192.5.48.102
> 

# **Servers and APIs**

### **Servers**

When you are developing an application, you will frequently be interacting with servers to retrieve and save data. These servers would be referred to as **remote servers**, as they may be thousands of miles away or just in the other room.**Local servers** on the other hand refers to when you are running a server on your personal computer. When you are developing an application with a server, you will have to run that server locally on your system in order to get data from your database.

Whenever you visit a website, you are making a request to a server (such as typing in amazon.com and pressing `enter`). That request is saying, "Hey server, I'd like to checkout some new boots on amazon.com, could you load their homepage for me please?". Alright so maybe it's not so formal, but this is the essence of what is happening.

The server's job is to *listen* for requests (such as a request to visit amazon.com), and eventually send back the data for the user to view. With certain node modules, building a basic server is almost as easy as typing `server.listen()`.

So ask yourself, "if it's the server's job to *listen* for requests and then send that information back once it has it, what code handles taking the request from the user and actually getting the appropriate data?"

### **API**

When a server receives a request (such as to load amazon.com's homepage to find some fancy new boots), there is code written in that server that handles the specific type of request. The code that handles all the different types of requests coming into the server is called an API (Application Programming Interface).

Using the example of visiting amazon to buy boots, the server would receive the *request* to load the home page, and the API would then handle getting the data for that home page. The server would then send the information back to the user in the form of a *response*.

This process is often referred to as the `request` - `response` cycle. A diagram of this is shown below:

!https://d186loudes4jlv.cloudfront.net/http/images/http_client_server.png

In this image, the request is coming from the client (your PC), and the response is going to the client from the web server. The initial *request* would be for the homepage, but when you click on 'boots', you are sending a request to now load the page that has all them fancy boots on it. This would follow the same *request* - *response* cycle to go get the data for boots, and send it back so you can view it on your system.

When we make requests to a server, we will be receiving the response in the form of JSON data so that you can use it in your applications. We will go deeper into servers and APIs later in the course when you will learn how to build your own, but having a high level understanding of these terms will help you grasp concepts as we begin interacting with servers!