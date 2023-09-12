- Props (short for properties) in React are used to pass data and configuration from a parent component to its child components.
- They allow for dynamic customization of components based on specific requirements.
- Props enable the sharing of data between components in a unidirectional manner.
- They establish a clear and predictable data flow pattern in React applications.
- Props facilitate communication and synchronization between different parts of an application.
- Similar to how input properties like placeholder and type configure an input element, props configure React components.
- Props promote reusability and modularity by abstracting functionality and data into customizable parameters.

## Part 2
# Reusable Components

1. Efficiency: Reusable components help us avoid repeating the same code over and over again. Instead of rewriting similar code, we can create reusable components and use them whenever needed, saving time and effort.
2. Easy to Scale: With reusable components, it's simple to add more features to our application. We can easily use the same component in multiple places, making it easier to expand and grow our project.
3. Consistent Design: Reusable components follow the same design patterns and styles, giving our application a consistent and unified look. This makes it easier for users to navigate and understand our app.
4. Easier Maintenance: When we update a reusable component, all the places where it's used will automatically get the update. This means we only have to make changes in one place, making maintenance and bug fixing simpler and faster.
5. Team Collaboration: Reusable components enable better teamwork. Different team members can work on different components simultaneously, knowing that they will fit together seamlessly. It promotes smoother collaboration and efficient development.

## Part 3
# Challenge:

1. Create a `Contact.js` component in another file.
2. Move one of the contact card `div`s into that file.
3. Import and render four instances of that contact card.

Think ahead: what is the problem with doing it this way?

## Part 4
# Challenge:

 Within Scrimba fix the code below to use the `props`
    - object values in place of the hardcoded values below

## Part 5
# Prop quiz! (Get it?? 😆)

Link: https://scrimba.com/scrim/co3c8431aa046a5730388c8ae

## Questions

1. What do props help us accomplish?
2. How do you pass a prop into a component?
3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native DOM element? (e.g. `<div blahblahblah={true}>`) Why or why not?
4. How do I receive props in a component?
    
    ```
    function Navbar(props) {
      return (
        <header>
        ...
        </header>
      )
    }
    
    ```
    
5. What data type is `props` when the component receives it?

# Part 6
## Destructuring Props

1. Simplified Access to Props:
Destructuring props provides a concise and convenient way to access specific properties from the props object. Instead of accessing props using **`props.propertyName`**, we can destructure and directly assign the desired properties to variables.
2. Cleaner Code:
Destructuring props helps reduce verbosity in our code. By extracting the required properties at the beginning of our component, we can use the variable names directly throughout the component, making the code more readable and maintaining a cleaner structure.
3. Improved Readability and Maintenance:
Destructuring props enhances the readability of our code by explicitly declaring which properties we are using in the component. This makes it easier for other developers to understand the component's dependencies. Additionally, if the prop names change in the future, we only need to update the destructuring assignment, improving code maintainability.

# Example:

```
import React from 'react';
function UserCard(props) {
const { name, age, email } = props;
return (
	<div>
		<h2>{name}</h2>
		<p>Age: {age}</p>
		<p>Email: {email}</p>
	</div>
);
}
export default UserCard;
```
## Props Practice
# Challenge:

- Render an `<App />` component
- App should be in its own file
- App should render 4-5 `<Joke />` components (Joke component defined in its own file too)
- Each Joke should receive a `setup` prop and a `punchline` prop and render those however you'd like
- Use your favorite 2-part jokes (setup & punchline), or check `jokes.md` file for some examples.

EXTRA CREDIT:

Some jokes are only a punchline with no setup:

E.g.: `"It’s hard to explain puns to kleptomaniacs because they always take things literally."`

If you don't pass in a `question` prop, you can make it only show the punchline.

## Part 8
# **Key Props**

In React, the **`key`** prop is a special attribute used when rendering lists of elements or components. It helps React identify individual items in the list and optimize the rendering process for efficiency and correctness.

The **`key`** prop must be unique among siblings within the same array. When rendering lists dynamically, React uses the **`key`** prop to efficiently update, reorder, and remove items, minimizing unnecessary re-rendering of components.

Here are a few key points to understand about the **`key`** prop:

1. Uniqueness: Each **`key`** value within a list must be unique. It helps React differentiate between different list items and track their changes effectively.
2. Stable identity: The **`key`** prop should be based on a value that remains consistent for a given item. It is recommended to use a stable identifier, such as a unique ID, index, or a value from the data itself.
3. Avoid using array index as keys: Although using array index as **`key`** values might be tempting, it is generally discouraged, especially when the list items can be reordered or modified. Using meaningful and stable identifiers is preferred.
4. Performance optimizations: React uses the **`key`** prop to efficiently update the rendered list. When a new list is rendered, React checks the **`key`** values and determines if an item has been added, removed, or re-ordered. This allows React to update only the necessary components, resulting in better performance.

Here's an example of rendering a list of components with the **`key`** prop:

```jsx
function MyList() {
const items = [
{ id: 1, name: 'Item 1' },
{ id: 2, name: 'Item 2' },
{ id: 3, name: 'Item 3' }
];
```

```jsx
return (
<ul>
{items.map(item => (
<li key={[item.id](http://item.id/)}>{[item.name](http://item.name/)}</li>
))}
</ul>
);
}
```

In this example, an array of items is mapped to a list of **`<li>`** elements. Each **`<li>`** element has a unique **`key`** value assigned based on the **`id`** property of each item. This ensures that React can efficiently update the list when changes occur.

By providing a unique and stable **`key`** prop, React can accurately track and update the components within the list, optimizing performance and minimizing unnecessary re-renders.

It's important to note that the **`key`** prop is primarily used when rendering lists of elements or components. For individual components that don't belong to a list, the **`key`** prop is not required.

Using the **`key`** prop correctly can help improve the efficiency and correctness of list rendering in React applications. It ensures that the components within the list are properly managed and updated when changes occur.

## Part 9
## Passing object as prop

In React, props are used to pass data from a parent component to a child component. While props are typically used to pass simple values like strings or numbers, you can also pass objects as props to provide more complex data structures and functionality to your child components.

To pass an object as a prop, you follow a similar syntax as passing other types of props. Let's walk through an example to illustrate the process:

1. Define the object in the parent component:

```jsx
import React from 'react';

const ParentComponent = () => {
  const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Engineer'
  };

  return (
    <ChildComponent person={person} />
  );
};

export default ParentComponent;

```

1. Access the object in the child component:

```jsx
import React from 'react';

const ChildComponent = (props) => {
  const { person } = props;

  return (
    <div>
      <h2>{person.name}</h2>
      <p>Age: {person.age}</p>
      <p>Occupation: {person.occupation}</p>
    </div>
  );
};

export default ChildComponent;

```

In the parent component, we define an object `person` with properties like `name`, `age`, and `occupation`. We then pass this object as a prop to the `ChildComponent` by using the `person={person}` syntax within the JSX.

In the child component, we receive the props object and use destructuring to extract the `person` object from it. We can now access the properties of the `person` object in our JSX by using dot notation, such as `person.name`, `person.age`, and `person.occupation`.

By passing an object as a prop, you can encapsulate related data and functionality within a single object and pass it down to child components for rendering or further manipulation. This can be particularly useful when dealing with complex data structures or when you want to pass multiple related values to a child component.

## Part 10
## Spreading object as props

In React, spreading an object as props refers to using the spread operator (`...`) to pass the properties of an object as individual props to a component. This technique allows for a more concise and flexible way of passing multiple props without explicitly specifying each property.

Spreading an object as props is particularly useful when you have an object containing several properties, and you want to pass all of them to a child component. It helps reduce repetitive code and provides a convenient way to forward all the properties of an object without explicitly naming each one.

Let's take a look at an example to understand how to spread an object as props:

```jsx
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Engineer'
  };

  return (
    <ChildComponent {...person} />
  );
};

export default ParentComponent;

```

In this example, we have a `ParentComponent` that defines an object `person` with properties like `name`, `age`, and `occupation`. To pass all the properties of the `person` object as props to the `ChildComponent`, we use the spread operator (`...`) followed by the object (`...person`) within the JSX.

The spread operator expands the `person` object and passes its properties as individual props to the `ChildComponent`. This means that the `ChildComponent` will receive `name`, `age`, and `occupation` as separate props.

Now, in the `ChildComponent`, you can access these props individually:

```jsx
import React from 'react';

const ChildComponent = (props) => {
  const { name, age, occupation } = props;

  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
    </div>
  );
};

export default ChildComponent;

```

By spreading the object as props, we can easily access the properties in the child component without explicitly passing each property one by one.

Using the spread operator to pass object properties as props can enhance code readability and maintainability, especially when dealing with objects that have many properties or when the object's properties may change dynamically.