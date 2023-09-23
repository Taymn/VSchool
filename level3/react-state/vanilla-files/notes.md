## Exercisies are done in Scrimba

## **Props vs State**

In React, both state and props are used to manage and pass data within components, but they have different purposes and characteristics. Understanding the distinction between state and props is crucial for effective component design and data management.

**State**:

1. **Definition**: State refers to the internal data managed by a component. It represents the mutable values that can change over time and affect the component's behavior and rendering.
2. **Declaration**: State is typically declared and managed within the component itself, using the **`useState`** hook (in functional components) or the **`this.state`** object (in class components).
3. **Mutable**: State values can be modified using the state update functions (**`setState`** in class components or the returned setter function from **`useState`** hook in functional components).
4. **Local**: State is specific to a particular component and is not accessible by other components unless explicitly passed down as props.
5. **Private**: State is encapsulated within the component and is not meant to be modified or accessed directly by external entities.
6. **Re-rendering**: Updating the state triggers a re-render of the component, causing it to reflect the updated state values in the UI.

**Props**:

1. **Definition**: Props (short for properties) are data passed from a parent component to its child components. They represent the configuration and data required by child components to render properly.
2. **Declaration**: Props are declared and defined by the parent component when rendering the child component(s). They are passed as attributes to the child component tag in JSX.
3. **Immutable**: Props are read-only and cannot be modified directly within the child component. They are meant to be received and used for rendering or passed further down to other child components.
4. **Inter-component communication**: Props enable communication and data flow between components, allowing parent components to control and influence the behavior and appearance of child components.
5. **Derived from state or parent props**: Props can be derived from the state of the parent component or passed down from higher-level parent components.
6. **Re-rendering**: Changes in props trigger re-rendering of the child components, allowing them to update and reflect the new data received.

To summarize, state represents internal mutable data specific to a component, while props represent external data passed from parent to child components. State is managed and updated within a component, triggering re-renders, while props are used for inter-component communication and influence rendering of child components.

It's important to note that state and props are both integral parts of component-based development in React, and effective management of these data flows is key to building robust and reusable components.

I hope this explanation clarifies the distinction between state and props in React. If you have any further questions, feel free to ask!

**Example using Props**:

```jsx
// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
const name = 'John Doe';
const age = 30;

return (
<div>
<h1>Parent Component</h1>
<ChildComponent name={name} age={age} />
</div>
);
}

export default ParentComponent;
```

```jsx
// ChildComponent.js
import React from 'react';

function ChildComponent(props) {
const { name, age } = props;

return (
<div>
<h2>Child Component</h2>
<p>Name: {name}</p>
<p>Age: {age}</p>
</div>
);
}

export default ChildComponent;
```

In this example, the **`ParentComponent`** renders the **`ChildComponent`** and passes the **`name`** and **`age`** as props. The **`ChildComponent`** receives the props through its function argument (**`props`**) and extracts the values using object destructuring. The props are then used to render the name and age in the UI.

**Example using State**:

```jsx
// Counter.js
import React, { useState } from 'react';

function Counter() {
const [count, setCount] = useState(0);

const increment = () => {
setCount(count + 1);
};

return (
<div>
<h1>Counter</h1>
<p>Count: {count}</p>
<button onClick={increment}>Increment</button>
</div>
);
}

export default Counter;
```

In this example, the **`Counter`** component uses the **`useState`** hook to manage the **`count`** state. The initial value of **`count`** is set to 0 using destructuring assignment. The **`increment`** function updates the **`count`** state by calling the **`setCount`** function. The current value of **`count`** is displayed in the UI, and when the button is clicked, the **`count`** state is updated and triggers a re-render.

In the first example, props are used to pass data from the parent component (**`ParentComponent`**) to the child component (**`ChildComponent`**). The parent component controls the data and provides it to the child component as props.

In the second example, state is used to manage internal data within the **`Counter`** component itself. The state value (**`count`**) is controlled and updated by the component, triggering re-renders to reflect the updated state in the UI.

These examples demonstrate the distinction between props and state in React. Props enable data flow from parent to child components, while state manages internal data within a component.

## Part 1
## useState

In React, managing state is essential for building dynamic and interactive user interfaces. The `useState` hook is a fundamental feature that enables state management within functional components. In this guide, we'll explore the power and versatility of `useState`, its syntax, and practical examples to help you grasp its concepts effectively.

### 1. Introduction to `useState`:

The `useState` hook is a built-in function in React that allows functional components to have state variables. It provides a simple and intuitive way to store and update state within a component. By using `useState`, you can handle changes to state and trigger re-renders efficiently.

### 2. Syntax and Usage:

The `useState` hook follows a specific syntax and returns an array with two elements: the current state value and a function to update that value. Here's the general syntax of `useState`:

```jsx
const [state, setState] = useState(initialState);
```

- `state`: The current value of the state variable.

- `setState`: A function used to update the state variable.

The `initialState` parameter represents the initial value of the state variable. It can be a primitive type (like a number or string) or an object.

### 3. Example: Managing a Counter:

Let's explore a simple example to understand how `useState` works. Consider a counter component that increments or decrements a value when buttons are clicked. Here's how you can implement it using `useState`:

```jsx
import React, { useState } from 'react';

function Counter() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrement = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <span>{count}</span>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
```

In this example, we define a `Counter` component that uses the `useState` hook. We initialize the `count` state variable to 0 and provide it as the initial state value to `useState`. When the `increment` button is clicked, the `setCount` function is called with a function as an argument. This function takes the `prevState` as a parameter and returns the updated state by incrementing the `prevState` by 1. Similarly, the `decrement` button utilizes the `prevState` to decrement the state value.

By using `prevState` in this way, you ensure that the state updates correctly, even in scenarios where multiple state updates are happening in quick succession. This helps prevent potential issues like race conditions or stale state values.

### 4. Updating State:

When using `useState`, it's important to remember that updating state is not done directly but through the provided setter function. React will handle the state updates and trigger re-renders automatically. When using the setter function, you have two options:

- Pass a new value: `setState(newValue)`

- Pass a function: `setState((prevState) => newValue)`

Passing a function to `setState` is particularly useful when the new state depends on the previous state. By using the function form and accessing `prevState`, you can ensure that the state updates are performed correctly, even in asynchronous scenarios.

### 5. Multiple State Variables:

You can use `useState` multiple times within a component to manage multiple state variables independently. Each call to `useState` creates a separate state variable and its associated setter function. This allows you to keep your code organized and manage different aspects of your component's state separately.

Conclusion:

The `useState` hook is a powerful tool in React for managing state within functional components. By leveraging its syntax and functionality, you can create dynamic and interactive user interfaces. With the ability to use `prevState` when updating state, you ensure accurate and reliable state management, even in complex scenarios. With practice and experimentation, you'll become proficient in utilizing `useState` to build robust React applications.

Link to React documentation on `useState`:  https://react.dev/reference/react/useState

## Part 2
## **useState array destructuring**

In React, when using the **`useState`** hook to manage state, you can utilize array destructuring to extract the state value and its corresponding update function in a concise and readable manner.

Array destructuring is a feature in JavaScript that allows you to unpack values from arrays or objects into distinct variables. In the case of **`useState`**, the hook returns an array with two elements: the current state value and the state update function. By using array destructuring, you can assign these elements to separate variables for easier access and manipulation.

Here's an example of using array destructuring with **`useState`**:

```jsx
import React, { useState } from 'react';

function MyComponent() {
const [count, setCount] = useState(0);

// You can now directly use 'count' and 'setCount' variables

const increment = () => {
setCount(count + 1);
};

return (
<div>
<p>Count: {count}</p>
<button onClick={increment}>Increment</button>
</div>
);
}
```

In this example, the **`useState`** hook is used to manage the **`count`** state. By destructuring the returned array into **`[count, setCount]`**, the **`count`** variable represents the current value of the state, and **`setCount`** is the function used to update the state.

Using array destructuring allows you to directly use **`count`** and **`setCount`** variables within the component, making the code cleaner and more readable. You can use the **`count`** variable to display the current count value and call **`setCount`** to update the state when the button is clicked.

It's worth noting that you can name the variables according to your preference. For example, you could write it as **`[myState, setMyState] = useState(initialValue)`** if that provides better clarity in your code.

Array destructuring with **`useState`** is a helpful technique to easily access and update state values in React functional components. It simplifies the process of working with state, allowing you to write more concise and expressive code.

## Part 3
## **Changing State**

In React, you can change the state by calling the state update function provided by the **`useState`** hook. This function is typically named with a prefix "set" followed by the state variable name. It allows you to modify the current state value and trigger a re-render of the component with the updated state.

Here's an example of how to change the state using the state update function:

```jsx
import React, { useState } from 'react';

function Counter() {
const [count, setCount] = useState(0);

const increment = () => {
setCount(count + 1);
};

const decrement = () => {
setCount(count - 1);
};

return (
<div>
<h1>Counter</h1>
<p>Count: {count}</p>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
</div>
);
}
```

In this example, the **`Counter`** component manages the state using the **`useState`** hook. It initializes the **`count`** state with an initial value of 0.

The **`increment`** and **`decrement`** functions are event handlers that update the **`count`** state. When the **`increment`** button is clicked, the **`setCount`** function is called with the new value of **`count + 1`**, and the component re-renders with the updated state. Similarly, when the **`decrement`** button is clicked, the **`setCount`** function is called with **`count - 1`**.

Calling the state update function with a new value will update the state and trigger a re-render of the component, reflecting the updated state in the rendered output.

## Part 4
## Changing state with a callback function

In React, state is an essential concept for managing and updating data within a component. When updating state, it's important to be mindful of React's asynchronous nature, as state updates may not always happen immediately. To ensure you're working with the latest state value, React provides a way to update state using a callback function.

Using a callback function to update state guarantees that you are working with the most up-to-date state value. It is especially useful when the new state depends on the previous state or when you have multiple state updates that need to be applied together.

Let's walk through an example to understand how to change state with a callback function in React:

```jsx
import React, { useState } from 'react';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterComponent;

```

In this example, we have a `CounterComponent` that manages a count state using the `useState` hook. The initial value of the state is set to 0.

To increment or decrement the count, we define two separate functions, `increment` and `decrement`. These functions use the `setCount` function, provided by the `useState` hook, to update the state.

Instead of directly passing a new value to `setCount`, we pass a callback function that receives the previous state value as an argument. In this case, the `prevCount` argument represents the previous count value.

Inside the callback function, we can perform any operations necessary to compute the new state based on the previous state. In the `increment` function, we add 1 to the previous count, and in the `decrement` function, we subtract 1.

By using a callback function, React guarantees that we're working with the latest state value, even if multiple state updates are queued or if the state value has changed by the time the update is processed.

Changing state with a callback function is a recommended practice in React when you need to update state based on the previous state or when you have multiple state updates that need to be applied together. By ensuring you have the most up-to-date state value, you can avoid potential issues caused by stale or incorrect state updates.

→ In React, **complex state** refers to a state that consists of multiple values or data structures. It goes beyond simple primitive values like strings or numbers and encompasses more complex data structures such as arrays or objects. Complex state is typically used when you need to manage and update multiple related pieces of data within a component.

## **Complex state: arrays**

In React, managing complex state often involves working with arrays that hold multiple values. Whether it's a list of items, a collection of user inputs, or dynamic data, arrays are frequently used to represent and update complex state in React components. React provides various approaches to handle arrays as state. This allows you to add, remove, update, and iterate over array elements. Here's an overview of common operations on array state in React:

1. Initializing Array State:
To initialize an array as state, you can use the **`useState`** hook. Provide an initial value of an empty array or an array with some initial values.

```jsx
import React, { useState } from 'react';

function MyComponent() {
const [items, setItems] = useState([]);

// ...
}
```

2. Adding Elements to Array State:
To add elements to the array state, you can use the state update function to create a new array that includes the new element(s).

```jsx
const addItem = () => {
setItems([...items, newItem]);
};
```

3. Removing Elements from Array State:
To remove elements from the array state, you can use the state update function to create a new array that excludes the element(s) you want to remove.

```jsx
const removeItem = (itemId) => {
setItems(items.filter((item) => item.id !== itemId));
};
```

4. Updating Elements in Array State:
To update elements in the array state, you can use the state update function to map over the array and modify specific elements.

```jsx
const updateItem = (itemId, updatedItem) => {
setItems(
items.map((item) => (item.id === itemId ? updatedItem : item))
);
};
```

5. Rendering Array State:
To render the array state, you can use JavaScript's ‘map’ method to iterate over the array and generate JSX for each item.

```jsx
return (
<div>
{items.map((item) => (
<div key={item.id}>{item.name}</div>
))}
</div>
);
```

It's important to assign a unique **`key`** prop to each rendered element in the array to optimize rendering performance and avoid errors. In the examples above, **`item.id`** is used as the key assuming each item has a unique identifier.

By using these techniques, you can manage complex state represented as arrays in React components. Keep in mind that when modifying array state, it's essential to create new array instances instead of mutating the existing array directly, as React relies on immutability to efficiently update components and trigger re-renders when necessary.

→ In React, **complex state** refers to a state that consists of multiple values or data structures. It goes beyond simple primitive values like strings or numbers and encompasses more complex data structures such as arrays or objects. Complex state is typically used when you need to manage and update multiple related pieces of data within a component.

## **Complex state: objects**

In React, managing complex state often involves working with objects that hold multiple key-value pairs. Objects are commonly used to represent and update complex state in React components. React provides various approaches to handle object state, allowing you to add, remove, update, and access specific properties. Here's an overview of common operations on object state in React:

1. Initializing Object State:
To initialize an object as state, you can use the ‘useState’ hook. Provide an initial value of an empty object or an object with some initial properties.

```jsx
import React, { useState } from 'react';

function MyComponent() {
const [user, setUser] = useState({});
// ...
}
```

2. Updating Object State:
To update the object state, you can use the state update function to create a new object that merges the updated properties with the existing object.

```jsx
const updateName = (newName) => {
setUser({ ...user, name: newName });
};
```

3. Accessing Object Properties:
To access specific properties of the object state, you can directly reference them using dot notation or square brackets.

```jsx
return (
<div>
<p>Name: {user.name}</p>
<p>Email: {user.email}</p>
</div>
);
```

4. Removing Properties from Object State:
To remove properties from the object state, you can use the state update function to create a new object that excludes the properties you want to remove.

```jsx
const removeEmail = () => {
const { email, ...newUser } = user;
setUser(newUser);
};
```

5. Rendering Object State:
Rendering object state can be similar to rendering arrays. You can access the object properties and use them to display relevant data in your component's JSX.

```jsx
return (
<div>
<p>Name: {user.name}</p>
<p>Age: {user.age}</p>
<p>Role: {user.role}</p>
</div>
);
```

Remember to use the appropriate syntax to update and access properties of the object state. React components will re-render when the object state is modified, allowing the UI to reflect the updated values.

When updating the object state, it's essential to create a new object instance instead of modifying the existing object directly. React relies on immutability to efficiently update components and trigger re-renders when necessary.

By using these techniques, you can manage complex state represented as objects in React components. Object state is especially useful when you need to track and modify multiple properties related to a specific entity or data set.

## **Passing state as props**

Passing state as props is a common technique used in React to share data between components. It involves passing the state values from a parent component to its child components as props, allowing the child components to access and use the state data.

Here's a basic explanation of how to pass state as props:

1. Define the state in the parent component: In the parent component, define the state using hooks (in functional components) or the state object (in class components). This state represents the data you want to share with child components.
2. Pass the state as props: In the parent component's JSX, render the child component(s) and pass the state values as props. You can do this by adding attributes to the child component tags, specifying the name of the prop and the value as the corresponding state value.
3. Access the props in the child component: In the child component, you can access the passed state values through the props object. Use the props as needed within the child component, such as displaying the data or using it for further computations.

Here's an example of passing state as props in React:

Parent Component:

```jsx
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
const [count, setCount] = useState(0);

return (
<div>
<h1>Parent Component</h1>
<p>Count: {count}</p>
<ChildComponent count={count} />
</div>
);
}

export default ParentComponent;
```

Child Component:

```jsx
import React from 'react';

function ChildComponent(props) {
return (
<div>
<h2>Child Component</h2>
<p>Received count from parent: {props.count}</p>
</div>
);
}

export default ChildComponent;
```

In this example, the **`ParentComponent`** holds a **`count`** state using the **`useState`** hook. It renders the **`ChildComponent`** and passes the **`count`** state as a prop named **`count`**. The **`ChildComponent`** receives the prop and displays it in the JSX.

By passing the state as props, the child component has access to the **`count`** value and can utilize it as needed. If the state changes in the parent component, the updated value will be automatically passed down as props, causing the child component to re-render with the new data.

Passing state as props allows you to share data between components, enabling a hierarchical flow of data in your application. It helps create reusable and modular components that can operate independently based on the shared state.

## **Dynamic Styles**

Dynamic styles refer to the ability to apply styles to elements in a web page or application based on dynamic conditions or variables. It allows developers to change the appearance or behavior of elements dynamically, providing a more interactive and personalized user experience.

In web development, dynamic styles are commonly achieved using JavaScript and CSS. JavaScript is used to manipulate the styles of elements by modifying their CSS properties, while CSS provides the styling rules and declarations.

Here's a basic explanation of how dynamic styles work:

1. Identify the elements: First, you need to identify the elements to which you want to apply dynamic styles. This can be done using selectors, such as class names, IDs, or element types.
2. Access the elements: Use JavaScript to access the desired elements. You can use methods like **`getElementById`**, **`getElementsByClassName`**, or **`querySelector`** to retrieve the elements from the document.
3. Modify the styles: Once you have access to the elements, you can modify their styles by changing the CSS properties associated with them. This can be done using JavaScript's **`style`** property or by adding/removing CSS classes.
4. Trigger the style changes: The style changes can be triggered based on various events or conditions. For example, you can change the style when a button is clicked, when a certain value is entered in a form, or based on the result of an API call.

Here's an example of applying dynamic styles using JavaScript and CSS:

HTML:

```html
<div id="myElement">Hello, world!</div>
```

CSS:

```css
.highlight {
background-color: yellow;
font-weight: bold;
}
```

JavaScript:

```jsx
const myElement = document.getElementById('myElement');
```

```jsx
// Add the 'highlight' class to the element
myElement.classList.add('highlight');
```

```jsx
// Change the text color of the element
myElement.style.color = 'red';
```

In this example, the JavaScript code accesses the element with the ID **`myElement`** and applies dynamic styles to it. It adds the CSS class **`highlight`**, which changes the background color and font weight, and modifies the **`color`** property directly using the **`style`** property.

Dynamic styles are particularly useful when you want to provide visual feedback, create interactive components, or customize the appearance of elements based on user interactions or application state.