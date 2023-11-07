
# Documentation

Authentication is the process of allowing a user of your application to create an account, sign in, have specific user permissions, get data that only concerns them as a user, etc. Authentication includes a security concern (we don't want people to be able to see or manipulate each other's data) as well as a usability concern (a todo app that doesn't let me have my *own* todo list is pretty pointless, unless I'm the only user of the application).

These days, there are three main different authentication types you really need to concern yourself with - 1) Session/cookie-based auth, 2) Token-based auth, and 3) OAuth. For simplicity's sake, we're only going to talk about token-based authentication for now. In later posts we'll cover OAuth, and we'll probably be skipping over session-based authentication because it is generally considered to be inferior to token-based authentication these days. That being said, it is still worth researching on your own because there are TONS of applications that are still using session-based auth, so as a programmer in the field, you may find yourself in a position to need to deal with it.

### **Understanding Token-based Auth**

Token-authentication is conceptually pretty easy to understand. A user fills in a login form containing, typically, a username and password which is then sent to the server for checking. The server looks up a user with the given username in the database and checks if the password is correct. If not, it returns an authentication error telling the person they put in the wrong username and/or password.

Otherwise, if everything checks out, the server creates a **token**, which is just a long string of seemingly-random text that gets sent back to the user. This token is like an access card to a building - that user now has a certain level of privilege to move about the app accessing certain data, making changes to the data, accessing certain parts of the website, etc. Oftentimes we save this token in sessionStorage or localStorage for easy access by the client app.

!https://coursework.vschool.io/content/images/2015/12/proxhand2.jpg

Every single time the client app makes an HTTP request to the server, it sends that token along with it. And with every protected resource on the server (any API endpoint that requires special access rights, like that of a logged-in user), the server checks the token that it received from the client to make sure this user is authorized to access this content. If so, it returns the requested content. Otherwise it sends some kind of authorization error indicating that the user isn't authorized to see that information.

In order to log a user out, you simply need to remove the token from wherever you saved it (session or local storage) and it stops being sent with every request, meaning the server stops giving the user access to the protected data. This is akin to taking away the access card from the employee of a building until they come in the next time and prove again they're allowed to be there.

Here are some great resources for better understanding how token-based authentication works, and specifically how JSON Web Tokens (a.k.a JWTs, pronounced "jots") work.

- [The Ins and Outs of Token-based auth](https://scotch.io/tutorials/the-ins-and-outs-of-token-based-authentication)
- [Getting to know JSON Web Tokens](https://scotch.io/tutorials/the-anatomy-of-a-json-web-token)
- [Tutorial on authenticating a Node.js app with JWTs](https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens)