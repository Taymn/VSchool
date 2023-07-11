# Selecting element(s)

`document.getElementById(<id string>)` - Returns a single element by its ID. If you (erroneously) have two elements with the same id, it will pick the first one it finds

`document.querySelector(<CSS selector string>)` - Returns a single element based on the CSS selector provided as a string. If multiple items match the CSS selector, this will only return the first one that matches.

`document.getElementsByClassName(<class name string>)` - Returns an array-like HTML collection of all elements that have the provided class name. If 0 elements match, returns an empty HTML collection (like an empty array). If 1 element matches, returns an HTML collection with a single item in it (like an array with only 1 item).

`document.getElementsByTagName(<tag name string>)` - Returns a collection of elements (array-like) with the provided tag name (e.g. "h1", "div", "li", etc.)

`document.querySelectorAll(<CSS selector string>)` - Returns a collection of elements (array-like) that match the CSS selector.

-------------------

# Modifying elements

(For descriptions below, imagine we've selected and saved an element to a variable called `element`)

`element.textContent` - the plain text inside the element. Can be set equal to something new with the assignment operator (`=`)

`element.innerHTML` - the string version of the HTML elements that are children of the selected element. If you add new HTML tags to the `innerHTML` of an element, they'll be turned into new elements on the page.

`element.style` - an object whose properties match all available CSS properties of the element, but camelCased instead of separated with dashes. (E.g. `backgroundColor` instead of `background-color`)

-------------------

*Pro tip:* many attributes in the HTML of an element are accessible with JavaScript. E.g., an image element with a `src` attribute (<img id="logo" src="someImage.jpg" />) can be accessed or modified from the selected element in JS:

```
var myImage = document.getElementById("logo")
myImage.src = "newImage.jpg"
```

Same goes for `href`, `id`, etc.