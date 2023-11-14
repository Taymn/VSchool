These are instructions for deploying with [Cyclic](https://render.com/). 

### 1**. Ensure you have (or create) a git repo for this project**

For the deployment to work, you'll need to make sure the project you're deploying is in its own git repo. (It *shouldn't* be inside your V School `assignments` folder. If it is, open finder and drag it outside to be a sibling of the `assignments` folder.)

Note: Here is a [Sample Repo](https://github.com/VSchool/deploy-demo) if you'd like to follow along

Check if this project has its own git repo:

```
$ cd path/to/your/project
$ ls -al

```

If the root folder of your project has a `.git` folder show up after the `ls -al` command, that means this project has its own git repo and you should be set to move forward.

If it doesn't, we'll need to create one. Run `git init` in the project root folder to initialize a new git repository for your project.

### **Move files around as necessary**

Your project should have a structure where the root project folder houses all your server-side related stuff (`models` folder, `routes` folder, `package.json` for the server-side dependencies, `.gitignore`, etc.) One of the folders inside your root project should be called `client`. This `client` folder should be your entire React application.

NOTE: You may have already integrated some of the following information into your current project, but all of these are necessary for your app to work once deployed so make changes as needed.

More visually, the structure should look something like this:

```
|__client/  ** THIS IS EVERYTHING FROM THE REACT SIDE **
    |__ node_modules/
        |__ tons of stuff...
    |__ public/
        |__ index.html
        |__ favicon.ico
        |__ etc.
    |__ src/
        |__ index.js
        |__ main/
            |__ App.js
            |__ etc.
|__ models/
    |__ user.js
    |__ todo.js
    |__ etc.
|__ node_modules/
    |__ stuff...
|__ routes
    |__ userRoutes.js
    |__ todoRoutes.js
    |__ etc.
|__ .gitignore
|__ package.json
|__ server.js
|__ etc.

```

Obviously if this is how you set up your project from the beginning, you shouldn't need to rearrange anything. If it isn't, move files around so it is.

For example, maybe you used to have a `client` folder with everything React related in it and a `server` folder with all your server code in it, both of which were inside the same parent project folder. If so, you would move all the files from your `server` folder up one directory (so they were the first files/folders inside the main project folder) and delete your now-empty `server` folder. Assuming you now had a client folder with everything related to React in it, you would be set to go.

If you make changes to the folder structure, **make sure to run your app and test it out to see if everything is still working.** As needed, fix any broken paths you might have created by moving files around.

### **Get your Express app to serve up your React app**

In the development environment, you've likely been running your React app on port 3000 (by running `npm start` or `yarn start`) and your server on whatever port you chose by running `node server.js`. However, we're going to set up Express to do double duty - it will handle API calls like before, but it will also serve up your React app when someone first visits your main site. This just takes a few additions to your main `server.js` file. Add the following:

```
// ... other imports
const path = require("path")

// ... other app.use middleware
app.use(express.static(path.join(__dirname, "client", "build")))

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(...)

```

`express.static` is in charge of sending static files requests to the client. So when the browser requests `logo.png` from your site, it knows to look in the build folder for that.

`app.get("*")` is a "catchall" route handler. It needs to be near the bottom of your server file so that it will only be enacted if the API routes above it don't handle the request. It's in charge of sending the main index.html file back to the client if it didn't receive a request it recognized otherwise.

### Go to client/.gitignore and comment out the “/build” section.

```jsx
cd client
```

You want to make sure the build folder is included in git.

```jsx
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
# build # COMMENT THIS OUT

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

### Run “npm run build” to build the app, ensure that a build has been successfully created and works. Now add, commit and push the whole repository up to Github:

```jsx
git add .
git commit -m "added build folder"
git push
```

### Create an account on Cyclic (continue with Github)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/969ba545-653d-4600-9a61-b52516fac50a/Untitled.png)

### Connect to your Github account

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/56a294f1-d816-4e16-98b6-58e7ca253a42/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a9438748-2a46-43b7-89f9-3e9155da451e/Untitled.png)

### Once you’re connected and ready to deploy, click on “Link Your Own” and search for the repo you want to deploy.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c201dcf3-b6f2-46a9-a771-13027b68df3a/Untitled.png)

### Click on “connect”

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c30e3989-c84d-4075-89f5-5c74499920ee/Untitled.png)

If you see a window pop up prompting you to check which repositories to allow Cyclic to connect to, for now approve the one you plan on deploying

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b3205333-403a-47c4-8388-c12d48537e70/Untitled.png)

### Cyclic will now attempt to deploy. You haven’t added your environment variables yet, but you will get a chance to.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cace9912-1851-4ecd-a268-ef077dc40169/Untitled.png)

### Once done, scroll to the bottom and you’ll see the following:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/282b5e0c-a8c5-4769-b3e7-5c990abfd09f/Untitled.png)

Click on “Go to REPO dashboard” 

### Go to “Variables” and enter all the environment variables for your app. Copy them from your app’s .env file

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b719abca-e816-4334-bd6f-a2788818aa67/Untitled.png)

### Save your changes and it should try deploying again. You should be able to see your app live after a few minutes.

## Re-deploying after making changes to your app

Because your app’s frontend is deployed through the ‘Build’ folder that you manually updated, you will have to re-build and push your changes each time you update your app

If this doesn’t work, please post your error messages (available in the “Logs” tab) and any relevant information on Slack.