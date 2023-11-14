These are instructions for deploying with [Render](https://render.com/). 

## Part 1

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

```jsx
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

```jsx
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

### Add, commit and push to Github, and proceed to the next step.

## Part 2: MongoDB Atlas

*You can skip this if you already use Atlas*

Atlas is MongoDB's cloud database service. It lets you host your databases for free up to a certain amount, and what's great about it is you don't need to input any credit card details at all to get started.

### **Creating a MongoDB Atlas Account**

Head over to https://www.mongodb.com/try to create your account. You'll then be taken to a page where you can enter your project details and your preferred language (JavaScript).

Next you'll be prompted to choose your cluster (a cluster is MongoDB's term to mean several servers working together to carry your data). Select the **free, Shared cluster** option. After, you can choose your settings for your starter cluster. Atlas provides 3 cloud platforms, all of which have free tiers. Choose **AWS** and select the recommended region, **N. Virginia (us-east-1)**.

Under Cluster Tier, select the **free, M0 Sandbox** tier. In the Additional Settings box, you can choose either **MongoDB 4.4** or **4.2**. Then choose a name for your cluster or leave it as is, then create your cluster.

### **Creating a User**

It will take a few minutes to create your cluster, so in the meantime let's create a user. On the left-hand side navigation menu, click on **Database Access** then **Add New Database User**. Create a username and password, and remember to **note the password somewhere**, as you'll be needing it later to connect your database in your app.

Below that set your **Database User Privileges** to **Atlas Admin**, and finish creating your user.

### **Access**

Next, you'll need to whitelist your IP address so that you can access your cluster. Go to **Network Access** on the navigation menu, and **Add IP Address**. You can either **Add Your Current IP Address** or **Allow Access from Anywhere**. **Confirm** your choice.

For any projects deployed through Heroku, you'll have to select **Allow Access from Anywhere**. This is because Heroku uses Dynamic IPs. While this isn't the most secure option, it is fine for now.

### **Connecting Your Cluster to Your App**

Go to **Clusters** to view your newly-created cluster. Click on **Connect,** then **Connect Your Application**. Select **Node.js** as the driver and the version as **3.6 or later**. Copy the connection string and replace `<username>` and `<password>` with the user details you created earlier and `<dbname>` with a database name. It will look something like this:

`mongodb+srv://<username>:<password>@cluster0.mdy4n.mongodb.net/<dbname>?retryWrites=true&w=majority`

Add the connection string to your app like below, assuming you're using Mongoose:

```jsx
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
```

Once connected, you can proceed with deploying your app.

## Part 3: Render

### Create an account on Render

### Click on “New Web Service”

There’s also a “+” button on the top right.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cb32ba26-3b32-4dc6-94b9-b6e2a6401952/Untitled.png)

### Connect to your Github account

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/56a294f1-d816-4e16-98b6-58e7ca253a42/Untitled.png)

### You’ll be directed to Github and prompted to select a few repositories. You can select the one you want to deploy, as well as any others you plan to deploy in the future (you can add more later). Once connected, select the app you want to deploy. Then enter a name for your app (this will be the name of your app). Set the following:

**********************************Build Command:********************************** `npm install && cd client && npm install && npm run build`

**********************************Start Command:********************************** `npm start`

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/beab86fa-4915-41fc-a284-c60e613c7a7d/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8456ba78-499d-4580-9b64-4cd9ca6fc762/Untitled.png)

### Go to the Environment Variables section and copy over all the environment variables for your app.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/666d6042-615b-4158-a9d1-54b34f694f41/Untitled.png)

Then save your changes.

### Click on “Connect” on the top right corner, then the “Outbound” tab. Copy the IP addresses below

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4cdc3127-e92a-4fb1-b119-e2970956663e/Untitled.png)

### Go back to Atlas and go to the Network Access tab. Click on “Add IP Addresses” and add those IP addresses.

### Scroll to the top, and you should see a “Manual Deploy” button on the right. Click on that, and then click on “Deploy Latest Commit”.

### This should then start the deployment process. It may take a few minutes, but once it successfully completes, you’ll be able to access it at the link given to you.

### 

## If the “build” command doesn’t work, try this:

*Note:*  If you deploy this way, you will have to re-build and push your changes each time you update your app

### Go to your project folder in VS Code. Then navigate to client/.gitignore and comment out the “/build” section.

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

### Go back to render and try re-deploying. After a few minutes, you should be able to navigate to your app.

If this doesn’t work, please post error messages and any relevant information on Slack.