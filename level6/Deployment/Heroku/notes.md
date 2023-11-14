**As of November 28, Heroku is shutting down its free tier. You should be able to continue deploying by subscribing to its next paid tier, but if you are looking for free options you can try Render (https://render.com/) or Cyclic (https://www.cyclic.sh/) . Tutorials are coming soon.**

**As of November 10, 2020,** mLab will be shutting down its services. If you need to migrate your database to use Atlas from mLab, you are strongly recommended to use their tool to migrate to Atlas. [Click here for instructions](https://docs.mlab.com/how-to-migrate-to-atlas/).

**The rest of the tutorial has been updated to integrate MongoDB Atlas to host your database.**

---

Heroku is an excellent service that specializes in making deployment of your web application quick and painless. Fortunately for us, it also has a free tier that will be perfect for our needs. There will only be a little bit of setup needed to get your web app up and running online. Let's get started.

Note: Heroku only allows you to deploy backend or full-stack projects. You can't use Heroku for deploying frontend-only projects without creating a small web server to serve it up. If you want to deploy a frontend-only site, we recommend looking at the insanely simple tool [Surge](http://surge.sh/). Check out our writeup on [deploying a frontend site with Surge](https://coursework.vschool.io/deploying-with-surge/)

---

# **Creating your Heroku app**

### **1. Create a free Heroku account**

Visit [heroku.com](https://www.heroku.com/) and sign up for an account. Choose "Node.js" under the "Primary development language" section and click "Create Free Account."

!https://coursework.vschool.io/content/images/2016/09/Screen-Shot-2016-09-14-at-11-56-49-PM.png

---

### **2. Download and install Heroku CLI**

Heroku CLI is a command-line tool that can be used to generate and update/manage heroku applications in a variety of ways.

Visit the [Heroku CLI download page](https://devcenter.heroku.com/articles/heroku-command-line#download-and-install) and follow the instructions to install it and get it set up. (If you have Homebrew installed, installing the Heroku CLI with Homebrew is easiest/quickest.) It'll ask you to log in to the Heroku account you just created, and then create a new git repository for your app and link that repo up with your newly-created Heroku app

```
$ heroku login
Enter your Heroku credentials.
Email: adam@example.com
Password (typing will be hidden):
Logged in as adam@example.com

```

---

### **3. Ensure you have (or create) a git repo for this project**

For the deployment to work, you'll need to make sure the project you're deploying is in its own git repo. (It *shouldn't* be inside your V School `assignments` folder. If it is, open finder and drag it outside to be a sibling of the `assignments` folder.)

Note: Here is a [Sample Repo](https://github.com/VSchool/deploy-demo) if you'd like to follow along

Check if this project has its own git repo:

```
$ cd path/to/your/project
$ ls -al

```

If the root folder of your project has a `.git` folder show up after the `ls -al` command, that means this project has its own git repo and you should be set to move forward.

If it doesn't, we'll need to create one. Run `git init` in the project root folder to initialize a new git repository for your project.

Note:  Heroku provides a few ways to deploy your application.  The main two options are to:

1. Have heroku create a remote respository to serve your application.
2. You can point your heroku app to your personal git repository to have it deploy directly from your own git repo.

We will be doing the latter as it is good practice to treat your `master` branch as the live version of your App.

---

### **4. Create a new application**

Creating a Heroku application is like creating a space online for your content to live.  Since we will be having the Heroku App use our git repository for all of the code, we simple need to create the application on heroku by visiting their website.  Later we will tell our heroku app which repository and branch to look at for the code.

Heroku allows you to do most of the configuration for any of your applications either:

```
   Through the dashboard on their website, or

```

```
   Through the Heroku CLI you just installed. It's helpful to know that whenever you make a change from one place, it's changed everywhere. The CLI is just a nice way to make these changes without having to leave the Terminal.

```

### **Create**

Now create your new App on Heroku.  To do this:1. Go to Heroku.com2. Click on your "Dashboard"3. Click "New"4. Click "Create New App"- Give the app a name and click "Create App".  This name is the default url to this app when you're done (ex: myappname.herokuapp.com)

---

# **Modify the project to prepare it for deployment**

This guide takes a lot of excellent suggestions from [Dave Ceddia's article "Create React App with Express in Production"](https://daveceddia.com/create-react-app-express-production/). As you can see from the intro of that article, it mentions 3 possible ways (among many others) of arranging the files in your app:

1. **Keep them together** – Express and React files sit on the same machine (with all the React files inside a specific `client` folder), and Express does double duty: serving the React files and also serving API requests.
- e.g., a DigitalOcean VPS running Express on port 80
1. **Split them apart** – Host the Express API on one machine, and the React app on another.
- e.g., React app served by Amazon S3, API server running on a DigitalOcean VPS
1. **Put the API behind a proxy** – Express and React app files sit on the same machine, but served by different servers
- e.g., NGINX webserver proxies API requests to the API server, andalso serves React static files

All of these are legitimate ways to deploy your app. We're choosing method 1 for this tutorial.

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

### **Add a proxy to the client's `package.json`**

When you make the above change, however, your development approach of running the React app on port 3000 and your server on port 8000 will be broken. We can fix it very easily by adding a line to the React app's `package.json` (the one in the `client` folder):

```
"proxy": "http://localhost:8000"

```

So your whole `package.json` should look something like this:

```
{
    "name": "client",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "axios": "^0.17.1",
        "react": "^16.2.0",
        "react-dom": "^16.2.0",
        "react-scripts": "1.0.17"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test --env=jsdom",
        "eject": "react-scripts eject"
    },
    "proxy": "http://localhost:8000"
}

```

Now when you make a request to `"/api/todos"` (or whatever other endpoint), React will notice that the request wouldn't work if it made it to `"http://localhost:3000/api/todos"`, so it'll instead use `"http://localhost:8000"` as the proxy URL and make API requests to that endpoint instead. Note that this only happens in a development environment from your local machine. When deployed, we'll access both the site and the API from the same host URL.

---

### **Set up environment variables**

Environment variables are things you can set in the whole environment (your computer, the server's computer, etc.) rather than specifically in your code. In other words, they're variables that are accessible to your whole machine, not just any one file.

Environment variables are useful for storing sensitive information, since they only live on your machine instead of having the values stored in the code. For example, if you created a JWT secret and hard-coded it into your JavaScript file, anyone looking at your code on Github would know the secret and could grab information they shouldn't be able to. Same with database username/password combinations, etc.

In Node, environment variables can be accessed on the `process.env` object. (You may have seen something like `process.env.PORT || 8000` somewhere.). They conventionally are created in [SCREAMING_SNAKE_CASE](https://en.wikipedia.org/wiki/Snake_case).

With Heroku, you need to set the environment variables on your newly created Heroku app so it knows which values to use when the project is deployed. You can do this two ways, either online on Heroku's website, or through the command line using the heroku CLI.  Since we are not creating a new Heroku remote repository, all environment variables will need to be added using Heroku.com.

### **Setting environment variables on the website:**

1. Open your app in Heroku
2. Go to "Settings"
3. Click "Reveal Config Vars"
4. Add a new variable and click "Add". Done!

We'll need to do this when adding our MongoDB Atlas database to our app--we don't want the connection string exposed!

---

### **Implement environment variables in your code**

Anywhere in your code you've set something sensitive or something you need to change from one environment to the next (such as a base URL which changes depending on whether the code is running on a server or locally). Some examples of things that should be set in environment variables include:

- Port numbers
- JWT Secrets
- Database connection strings that include username and password
- Base URLs (if you're serving your client and server completely separately)

In fact, if you currently have your port hardcoded to a number right now, you should go change it to an environment variable. Say you had it originally like this:

`app.listen(5000)`

You should create a variable near the top of your file like this:

`const port = process.env.PORT || 5000;`

and then change your `app.listen` to use the `port` variable instead. This is important for Heroku to work when you deploy. You don't need to set this PORT variable up with Heroku yourself - it will do it for you.

Up to now, you've probably been using `"mongodb://localhost:27017/db-name"` for your database connection string. But when deploying to Heroku, you'll need to use an online database service like MongoDB Atlas to store your information, since Heroku doesn't have the capability to house/maintain a database for you.

We'll address the MongoDB situation next, but for now, go through your code and add an environment variable anywhere it makes sense. For this class, if your app has authentication with JWTs, you'll want to change your `secret` to be something like:

```
const secret = process.env.SECRET || "some secret passphrase here for local development"

```

This says to set a local variable called `secret`, whose value will either be whatever the environment variable for `SECRET` is set to, or (if that's `undefined`), a regular string for local development. **Make sure not to use the same secret phrase in both places!**

You'll also want the `dotenv` package. Make sure to require it in your `server.js` and use it.

`npm install --save dotenv`

`require("dotenv").config()`

---

# **Set up MongoDB Atlas**

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

We don't want this exposed in our code, so add this as a Config Var to Heroku.

!https://coursework.vschool.io/content/images/2020/10/Config.PNG

Add the connection string to your app like below, assuming you're using Mongoose:

```
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

```

Once connected, you can proceed with deploying your app.

### **View Your Databases**

Go back to **Clusters** and click on **Collections**.  You can create or view your databases here. To add a new database, click on **Add My Own Data**. Choose a name for your database and create a collection. Once your database is created, click on **Insert Document** if you want to add a document.

---

### **Add a `.gitignore` to your main project**

`create-react-app` automatically created a `.gitignore` file for us and added a bunch of useful things to it. However, we want to make sure all our server stuff isn't cluttered with things too.

In your main project root, create a file called `.gitignore` and add a few things we want to make sure don't end up in our repository (assuming you haven't already done this):

```
.DS_Store
node_modules/
.env
*.orig
.idea/
.vscode/

```

Most of those probably won't be necessary for you, but it doesn't hurt to add them now anyway.

---

### **Teach Heroku to run a build and run your app after deploying**

You might have noticed in the React app's `.gitignore` file that we're ignoring the `build` folder. That's the folder that compiles everything together into one place, static assets, all JavaScript, etc. It gets created by running `npm run build`. However, we don't want to commit the `build` folder, which is why it's in our `.gitignore` by default.

Fortunately, Heroku will look in `package.json` for a script to run after we finish uploading the code there. In your *server's* `package.json`, add the following `scripts` section:

```
"scripts": {
    "heroku-postbuild": "cd client && npm install --only=dev && npm install && npm run build"
}

```

Another thing we want Heroku to be able to do is run our server file with node once it's built. Heroku will look for a Heroku-specific file called a `Procfile` to tell it how to do that. If no Procfile is found, it will just run `npm start`. So we need to add the `start` script to our scripts as well. The whole scripts section should now look like this:

```
"scripts": {
    "start": "node server.js",
    "heroku-postbuild": "cd client && npm install --only=dev && npm install && npm run build"
}

```

One last thing that sometimes will cause issues has to do with your version of node.js. We'll also teach Heroku which version of node to use for the project.

In terminal, type `node -v`. It should spit out the version of Node.js you're using.

If that version were, for example, `8.9.2`, you'd add the following to your **server's** `package.json` file:

```
"engines": {
    "node": "8.9.2"
}

```

After all this, your server's `package.json` should look something like this:

```
{
    "name": "mern-to-heroku",
    "version": "1.0.0",
    "main": "index.js",
    "license": "MIT",
    "dependencies": {
        "body-parser": "^1.18.2",
        "express": "^4.16.2",
        "mongoose": "^4.13.6",
        "morgan": "^1.9.0"
    },
    "scripts": {
        "start": "node server.js",
        "heroku-postbuild": "cd client && npm install --only=dev && npm install && npm run build"
    },
    "engines": {
        "node": "8.9.2"
    }
}

```

You should now be all set up to deploy your site through Heroku!

---

# **Deploy!**

### **Teach Heroku which Git Repo to deploy from.**

In order for heroku to use your git repository as the source, you will need to go configure your github account on heroku's website.

To do this, go to heroku.com and:

1. Go to your Dashboard
2. Select the newly created App.
3. Click the 'Deploy' tab
4. In 'Deployment Method', click 'GitHub'. If you have not connected your github to heroku yet, it will have you authenticate this connect request.
5. Connect your Git Repo to the Heroku app. Put the name of your git repo in the "Search for repository to connect to", then click "Connect".

!https://coursework.vschool.io/content/images/2018/10/repo-connect-1.png

---

### **Teach Heroku which branch of your Git Repo to deploy from**

Once you've got everything above completed, your deployment and updating of your site *should* go through seamlessly. First, you will need to specify which branch of your selected repository to deploy:

IMPORTANT: Before doing this, make sure the branch you are using to deploy the application is fully updated on github and working locally when you try to start it up. It is good practice to use the `master` branch as the live version of your application.

!https://coursework.vschool.io/content/images/2018/10/new-deploy-branch.png

Once you have selected a Branch, you can click 'deploy branch' and you should see some scripts running below for a minute or two.

!https://coursework.vschool.io/content/images/2018/10/deploy-branch-1.png

Once finished and provided successful, a link is provided to then go visit your live website!

---

# **Updating your Heroku app**

Since you are using your own Git Repo for the application, there are two simple options for updating the live version:

### **Option 1: Manual**

1. Make changes locally to your application, then `git add -A`, git commit -m `, and` git push`to update the deployed`master`branch (a pull request is then needed if this is a separate branch from the`master`).
2. Go to your application on Heroku.com, go to your app, click deploy, and then click 'deploy branch' for the selected branch

### **Option 2: Automatic**

- On Heroku.com in the 'deploy' section of your application next to 'Automatic Deploys', select your deployment branch (master), and click 'enable automatic deploys'. With this enabled, your website will automatically redeploy anytime the deployment branch has any new changes via a push or pull request!

---

# **Exporting your local database to Atlas**

MongoDB has a few ways you can import/export databases, and we'll use their `mongodump` and `mongorestore` commands to accomplish this.

First you need to know your database name. You can find this by either:

Go into Mongo shell by typing `mongo` into your terminal. Then type `show dbs` and you'll get a list of all local database names.

**Create Export directory using `mongodump`**

Make sure you are in the top level of your project directory.  Use the following command to make a copy of your local database and put it in a directory.

`mongodump --db=<dbname>  --archive=<dbname>.archive`

**Importing to Atlas using `mongorestore`**Mongorestore can create a new database or add data to an existing database.  It does only perform `inserts`, not `updates`, meaning you can add new information but cannot change existing information.

Back in your Atlas dashboard, go to **Clusters** and click on the `...` button next to collections, then **Command Line Tools**. Under the **Binary Import and Export Tools** copy the `mongorestore` command provided to you into your shell. Replace `<username>` and `<password>` with your details and include the archive file you created using mongodump. It will look something like this:

```
mongorestore --uri=mongodb+srv://<username>:<password>@cluster0.mdy4n.mongodb.net --archive=<dbname>.archive
```

If successful, you should see the imported database in the **Collections** page of your cluster.

---

# **Custom Domains**

If you have purchased a domain name for your site then here is [how to make your custom domain accessible via Heroku!](https://devcenter.heroku.com/articles/custom-domains)