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