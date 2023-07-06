A key capability of the DOM API is to select specific elements. Using `document` gets us access to the _entire_ HTML document, but we usually only care to make changes to a small part of the DOM like a paragraph, a list item, or a button, e.g.

There are lots of ways to do selection, but they can be generally divided into 2 categories:
    1. Selecting a single element (returns an object)
    2. Selecting multiple elements (returns an array of objects)
    
In this lesson we'll focus on one of the most-used selectors, `getElementById`.

The `id` attribute added to any HTML element is a very common way to single out elements so they're easy to select using JavaScript. `id` attributes should be unique - no two elements should have the same `id` as each other. This way, you can pick out the exact element you want access to.

To select an element, you first need to use the `.getElementById` method that exists on the `document` object and provide it one argument - the string id name of the element you're looking for.