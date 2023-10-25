# Lesson
  * client folder create Vite
  * packagejson of client folder to   create local proxy
  * frontend npm run dev
  * backend nodemon server.jsx

# Documentation
****VITE****

When connecting your backend to your frontend using VITE, you will need to add the proxy manually to the vite.config file instead of the package.json like Create-React-App in the video above.  Use the below vite.config file as a reference to do this and use /api for all routing.  Please do not hesitate to ask for help or clarification on this as needed.

vite.Config file

```jsx
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
```

vite front end -  any request to the backend will begin with “/api”   (from the vite.config file) see below example

```jsx
axios.get("/api/chores")
```

backend request routing using Vite - any request from the front end will use the “/api” endpoint for routing - see below example

```jsx
app.use("/api/chores", require("./routes/choresRouter.js"))
```

## IMPORTANT NOTE // HEADS UP

In level 6, the “/api” endpoint is also used for authorization.  We can change “/api” to “/protected” or whatever we want as the endpoint or add an additional “/api”  like this

```jsx
app.use("/api/api/chores", require("./routes/choresRouter.js"))
or
app.use("/api/protected/chores", require("./routes/choresRouter.js"))
```

Just stay consistent between frontend and backend.  Do not stress this at this point.  This is merely a HEADS UP!