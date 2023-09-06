/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

## POP QUIZ ##

1. Why do we need to import React from “react” in our files?

React is what defines jsx

2. If I were to console.log(page) in index.js, what would show up?

A JavaScript object. React elements that describe what React should eventually add to the real DOM for us.

3. What’s wrong with this code:
    
    ```jsx
    const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
    )
    ```
We need our JSX to be nested under a single parent element
    
4. What does it mean for something to be “declarative” instead of “imperative”?

telling WHAT to do vs HOW to do each step.
make a sandwich vs how to make a sandwich step by step

5. What does it mean for something to be “composable”?

We have small peices that we can put together to make something larger/greater than the individual pieces.