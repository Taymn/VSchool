You are going to build an React app that allows a user to post things that they think are ugly. The data of ugly things should be managed by React Context. You will be using the [Ugly Things API](https://coursework.vschool.io/ugly-things-api-documentation/) created by the wonderful yet calculated Bob.

## Requirements

- Must have 3 input fields:
    - Img url field (A url to an image of an ugly thing)
    - Title field (The title of the image that the user wants to give)
    - Description field (why the user thinks it is ugly)
- Must have *Submit* button that submits the data
- Must display a list of posted images with their associated titles and descriptions
- Must store the array of ugly thing objects in the Context store
- Must be able to delete an ugly thing
- Must be able to edit an ugly thing
- Must make all requests via the [Ugly Things API](https://coursework.vschool.io/ugly-things-api-documentation/)

## Note

Only the array of ugly things, and functions for manipulating it, needs to be managed in context

## Approach

This assignment is for practicing context. In the real world, if you wanted to build this, you probably would not use context. For that reason, it may feel a bit contrived.

Think of your component tree. You need to have a form for submission, and a list of ugly things. These two components would probably be siblings. Usually, it would be easy enough to lift state to their parent, so that the form can add to an array of ugly things in the state of the parent, and the parent can pass that array down as props to a component to display that list. For this project, we'll have our context provider manage the state of our array.

Context is tough, so be prepared to spend some time on this project.

# Notes

You can choose to implement this assignment using all hooks or with class components

## Plan

SP 309.75
Ugly Things

    1.  Create a Form with 3 inputs & submit button
    2.  Capture inputs and display from an array of objects
    3.  Add delete and edit functionality to each object
    4.  Pull data from Ugly Things API

10/09/23 I have completed step 1. I was using Name Badge as a guide.
Step 2 broke my App.
