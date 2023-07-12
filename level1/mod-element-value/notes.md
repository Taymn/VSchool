Sometimes you want the style to still live in CSS and just programmatically apply a CSS class to the element using JS. This is where `className` and `classList` come in!

----------

## `className`
This is a slightly outdated way to deal with adding a CSS class to an element in JavaScript. An element's `className` property is simply a string of the class added to the element. Seems simple enough, but when the time comes to add a _second_ class or remove one of many classes, it's tricky. (Since the value is a simple string with spaces delimiting each class name, you'd need to parse that string and remove the part that has the class you want - not TOO hard but pretty ugly)

https://developer.mozilla.org/en-US/docs/Web/API/Element/classname

----------

## `classList`
This is a much better way to handle the adding and removing of CSS classes in JS. `classList` is an object with some methods that are easy to use when adding or removing classes from an element. See the MDN docs for full description and examples:

https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
