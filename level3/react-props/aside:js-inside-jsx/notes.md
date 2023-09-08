We use curly brackets **`{}`** in JSX to embed JavaScript expressions directly within the markup. This allows us to dynamically render values, variables, or computations based on the current state or props.

```jsx
import React from 'react';

function Greeting(props) {
const name = 'John Doe';
const age = 25;

return (
<div>
	<h1>Welcome, {name}!</h1>
	<p>You are {age} years old.</p>
	<p>Next year, you will be {age + 1}!</p>
</div>
);
}
export default Greeting;
```