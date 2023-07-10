Sometimes you want the style to still live in CSS and just programmatically apply a CSS class to the element using JS. This is where `className` and `classList` come in!

----------

## `className`
This is a slightly outdated way to deal with adding a CSS class to an element in JavaScript. An element's `className` property is simply a string of the class added to the element. Seems simple enough, but when the time comes to add a _second_ class or remove one of many classes, it's tricky. (Since the value is a simple string with spaces delimiting each class name, you'd need to parse that string and remove the part that has the class you want - not TOO hard but pretty ugly)

https://developer.mozilla.org/en-US/docs/Web/API/Element/classname

const el = document.getElementById("item");
el.className = el.className === "active" ? "inactive" : "active";

Note: The class is an HTML Attribute, while the className is a DOM Property.

----------

## `classList`
This is a much better way to handle the adding and removing of CSS classes in JS. `classList` is an object with some methods that are easy to use when adding or removing classes from an element. See the MDN docs for full description and examples:

https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

const div = document.createElement("div");
div.className = "foo";

// our starting state: <div class="foo"></div>
console.log(div.outerHTML);

// use the classList API to remove and add classes
div.classList.remove("foo");
div.classList.add("anotherclass");

// <div class="anotherclass"></div>
console.log(div.outerHTML);

// if visible is set remove it, otherwise add it
div.classList.toggle("visible");

// add/remove visible, depending on test conditional, i less than 10
div.classList.toggle("visible", i < 10);

// false
console.log(div.classList.contains("foo"));

// add or remove multiple classes
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// add or remove multiple classes using spread syntax
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// replace class "foo" with class "bar"
div.classList.replace("foo", "bar");