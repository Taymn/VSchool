## Document ##

React's custom components play a crucial role in building modern and scalable user interfaces. By encapsulating specific functionality and design, custom components promote reusability, modularity, and maintainability in React applications. In this article, we will dive into the concept of React's custom components, their benefits, and how they empower developers to create powerful UIs.

Understanding Custom Components:
In React, custom components are user-defined reusable elements that encapsulate specific UI functionality. Unlike built-in HTML elements such as **`<div>`** or **`<span>`**, custom components are created by developers to serve their application-specific needs. They allow developers to break down complex UI structures into smaller, more manageable parts, improving code organization and readability.

Benefits of Custom Components:

1. Reusability: Custom components are designed to be reused across multiple parts of an application. Once created, they can be easily incorporated into different views or screens, saving development time and effort. This reusability ensures consistency and maintains a uniform user experience throughout the application.
2. Modularity: Custom components promote a modular approach to UI development. Each component focuses on a specific task or functionality, making it easier to reason about and maintain. Developers can work on individual components independently, leading to better code organization and separation of concerns.
3. Abstraction and Encapsulation: Custom components allow developers to abstract away complex implementation details and expose only the necessary props and methods. This encapsulation ensures that components can be used without exposing their internal workings, promoting cleaner and more maintainable code.
4. Composability: Custom components can be combined and nested within each other to create more complex UI structures. This composability enables developers to build UIs by assembling smaller building blocks, fostering code reusability and flexibility.

Creating Custom Components:
To create a custom component in React, developers define a JavaScript function or class that returns JSX (JavaScript XML) code representing the desired UI structure. The component can have its own internal state, accept props (properties) for customization, and handle events or user interactions. Custom components can be functional components or class components, depending on the requirements.

```jsx
import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
```

In this example, we have a custom component called **`Page`** that accepts two props: **`title`** and **`content`**. The component renders a **`<div>`** element containing an **`<h1>`** element for the title and a **`<p>`** element for the content. The values for the **`title`** and **`content`** props are inserted dynamically into the JSX code.

This **`Page`** component can be used to display different sections or pages within a React application. By passing in different values for the **`title`** and **`content`** props, developers can easily create multiple instances of the **`Page`** component with varying content.

By using the **`Page`** custom component, developers can abstract away the repetitive structure and styling of a page, making it easier to maintain and reuse throughout the application. It provides a modular and reusable solution for displaying content in a consistent manner, enhancing the overall organization and readability of the codebase.

### CUSTOM COMPONENT QUIZ?

1. What is a React component?

Function that returns React elemencts

2. What’s wrong with this code?

```jsx
function myComponent() {
return (
<small>I'm tiny text!</small>
)}
```
myComponent function needs to be Capitol My (Pascal Case)

1. What’s wrong with this code?

```jsx
function Header() {
return (
<header>
<nav>
<img src="./react-logo.png" width="40px" />
</nav>
</header>
)}
```
ReactDOM.render(Header(), document.getElementById("root))

Angle brackets on function call <Header />

## Parent/Child Components ##

# Introduction

In React, components can be organized in a hierarchical structure, where some components act as parents and others as children. This parent-child relationship allows for modular and reusable code, efficient data flow, and flexible UI composition. Let's explore the key aspects of the parent-child relationship in React components through a simple example.

### Defining Parent and Child Components

1. Parent Component: A parent component is a higher-level component that encapsulates one or more child components. It controls and manages the state and behavior of its child components. Parent components pass data and functions to their children via props, enabling communication and coordination between components.
2. Child Component: A child component is a lower-level component that receives data and behavior from its parent component via props. It focuses on rendering specific UI elements and functionality, utilizing the data and functions provided by the parent component.

### Data Flow in Parent-Child Relationship

1. One-Way Data Flow: In React, data flows in a unidirectional manner, from parent to child components. Parents pass data down to their children through props, which are immutable properties that the child component can access and utilize. This one-way data flow ensures a predictable and manageable data flow pattern.
2. Updating Parent State: Child components can also communicate with their parent components by invoking functions passed as props. When a child component triggers an event or performs an action, it can call the parent's function to update the parent's state, enabling synchronization and coordination between components.

### Benefits of Parent-Child Relationship

1. Code Reusability: By breaking down complex UIs into smaller parent and child components, you can reuse child components across different parent components. This reusability enhances code modularity, reduces duplication, and promotes a more efficient development process.
2. Component Composition: Parent and child components can be combined and composed to create more intricate UI structures. Parents can nest multiple child components, allowing for flexible and dynamic UI compositions. This composability enables building complex interfaces by assembling and reusing smaller, self-contained components.

Example:
Consider a simple example of a parent component **`App`** rendering a child component **`Button`**.

```jsx
import React from 'react';

const Button = ({ text, onClick }) => {
return (
<button onClick={onClick}>
{text}
</button>
);
};

const App = () => {
const handleClick = () => {
console.log('Button clicked!');
};

return (
<div>
<h1>Parent Component</h1>
<Button text="Click Me" onClick={handleClick} />
</div>
);
};

export default App;
```

In this example, the **`App`** component acts as the parent component, while the **`Button`** component serves as the child component. The parent component passes two props, **`text`** and **`onClick`**, to the child component, which it can use to render a button with the provided text and handle the click event using the given **`onClick`** function.

**Conclusion:** The parent-child relationship is a fundamental aspect of building React components. Parent components control the state and behavior of their child components by passing data and functions through props. This relationship facilitates modular code organization, efficient data flow, and flexible UI composition. By understanding and utilizing the parent-child relationship, you can create reusable, scalable, and maintainable components in your React applications.

## Styling with Classes ##

Introduction:
In React, styling components is an essential aspect of creating visually appealing and engaging user interfaces. React provides multiple approaches to apply styles, including using classes or the className attribute. Let's explore these options and how they can be used to style React components.

Using Classes:

1. Inline Styling:
React components can be styled inline by using the style prop. This approach involves passing a JavaScript object with style properties directly to the component. For example:

```jsx
const MyComponent = () => {

const myStyle = {
backgroundColor: 'blue',
color: 'white',
padding: '10px',
};

return <div style={myStyle}>Styled Component</div>;
};
```

In this example, the div element is styled inline with the provided CSS properties defined in the **`myStyle`** object. This approach allows for dynamic styling based on component state or props.

CSS Classes:
React components can also utilize CSS classes to apply styles. By convention, React uses the “className” attribute instead of the traditional “class” attribute to avoid conflicts with JavaScript's “class” keyword. For example:

```jsx
const MyComponent = () => {
return <div className="styled-component">Styled Component</div>;
};
```

Here, the div element is assigned the **`styled-component`** class. CSS rules defined in an external stylesheet or within a **`<style>`** tag will be applied to all elements with that class.

Using CSS:

1. External Stylesheet:
React components can also leverage external CSS stylesheets to define and apply styles. To use an external stylesheet, include a <link> tag in the HTML file to link the CSS file. Then, use the appropriate class names in React components. For example:

```jsx
<!-- index.html -->
<link rel="stylesheet" href="styles.css" />
```

```jsx
// MyComponent.jsx
const MyComponent = () => {
return <div className="styled-component">Styled Component</div>;
};
```

In this case, the **`styled-component`** class in the CSS file will be applied to the div element.

1. Inline CSS with CSS Modules:
CSS Modules provide a way to write modular and scoped CSS styles in React components. It involves importing a CSS file into a JavaScript module, and then using the imported class names in the component's className attribute. For example:

```jsx
/* styles.module.css */
.styledComponent {
background-color: blue;
color: white;
padding: 10px;
}
```

```jsx
// MyComponent.jsx
import styles from './styles.module.css';
```

```jsx
const MyComponent = () => {
return <div className={styles.styledComponent}>Styled Component</div>;
};
```

In this example, the CSS class **`styledComponent`** is scoped to the component, preventing style conflicts with other components.

Conclusion:
Styling React components using classes or className offers flexibility and modularity in creating visually appealing UIs. Whether by applying inline styles, using CSS classes, or leveraging external stylesheets and CSS modules, developers have multiple options to suit their styling needs. Experiment with these approaches to create beautifully styled React components that enhance the user experience.

## Organizing Components in React ##

One of the key principles in React development is organizing components in a structured and maintainable manner. By following a well-organized approach, developers can enhance code readability, reusability, and scalability. Here's a simple example of how to organize components:

Folder Structure:
Create a clear and logical folder structure to organize your components. For instance:

```jsx
src/
	components/
		common/
			Button.js
			Input.js
		pages/
			HomePage.js
			AboutPage.js
```

Categorize Components:
Categorize components based on their functionality or purpose. For example, create a "common" folder for reusable components like buttons or inputs, and a "pages" folder for higher-level components representing different pages of the application.

Modularize and Reuse:
Break down complex UIs into smaller, reusable components. For instance, if the HomePage and AboutPage components share a common feature like a header, consider creating a separate Header component and reuse it in both pages.

Export and Import:
Export components from their respective files and import them where needed. For example, in the HomePage.js file, import the Header component using **`import Header from './Header'`** and utilize it within the HomePage component.

By organizing components in a systematic manner, developers can easily locate and manage their code, promote code reuse, and maintain a clear separation of concerns. Remember, there is no one-size-fits-all approach to organizing components, and the structure may vary based on the complexity and requirements of your application.

Here is another example of a possible App.js structure