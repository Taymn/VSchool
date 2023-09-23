## Event Listeners

In React, event listeners are used to handle user interactions, such as mouse clicks, keyboard input, or form submissions. Event listeners allow you to respond to these actions and update the state or trigger specific behavior in your React components.

React provides a straightforward and declarative way to add event listeners to your components. You can attach event listeners to JSX elements using camel-cased event names, similar to how you would add event listeners in regular HTML. However, in React, event listeners are typically specified as props with callback functions.

Let's walk through an example to understand how event listeners work in React:

```jsx
import React from 'react';

const ButtonComponent = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <button onClick={handleClick}>Click me</button>
  );
};

export default ButtonComponent;

```

In this example, we have a `ButtonComponent` that renders a button. To add an event listener to the button, we specify the `onClick` prop and assign it a callback function `handleClick`. The `onClick` prop indicates that we want to listen for a click event on the button.

Inside the `handleClick` function, we define the behavior we want to execute when the button is clicked. In this case, we simply log a message to the console.

When the button is clicked, React will automatically invoke the `handleClick` function. It's important to note that the event listeners in React follow the synthetic event system, which provides a unified interface for handling events across different browsers.