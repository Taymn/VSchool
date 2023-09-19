Practice updating state through the following prompts. Try to write these first without testing them in a react app. 

1. Pass in a new color of your choosing in place of the old one. 
    
    Hint: we don’t care what the previous color was.
    
    ```jsx
    const [color, setColor] = useState("pink")
    
    setColor("green")
    ```
    
2. Toggle between the colors pink and blue. If the current color is pink, we want to set it to blue. If it’s currently blue, set it back to pink.
    
    ```jsx
    const [color, setColor] = useState("pink")
    
    setColor(prevColor => precColor === "pink" ? "blue" : "pink")
    ```
    
3. Add a new person object to the following `people` array in state. You can hard-code a new object but it must be a person object with `firstName` and `lastName` properties.
    
    ```jsx
    const [people, setPeople] = useState([
    	{
    		firstName: "John",
    		lastName: "Smith"
    	}
    ])
    
    setPeople(prevPeople => {
        return {
            ...prevPeople,
            {
            firstName: "Adam",
            lastName: "Taylor"
            }
        }
    })
    ```
    
4. Change the following state-setting functions to use an implicit return
    a. List 
        
    ```jsx
        const [colors, setColors] = setState(["pink", "blue"])
        
        setColors(prevColors => {
        	return [...prevColors, "green"]
        })
    ```
        
    2.
    ```jsx
        setColors(prevColors => [...prevColors, "green"])
    ```

    b. List 
    
    ```jsx
    const [countObject, setCountObject] = setState({
    	count: 0
    })
    
    setCountObject(prevState=> {
    	return {
    		count: prevState.count + 1
    	}
    })
    ```
    ```jsx
    setCountObject(prevState=> {count: prevState.count + 1})
    ```
    
5. Update the following state to add an additional property `age` and set the value to `30`, ensuring that the other properties are not overwritten.
    
    ```jsx
    const [person, setPerson] = useState({
    		firstName: "John",
    		lastName: "Smith"
    })
    ```
    ```jsx
    setPerson(prevState => ({
        ...prevSate,
        age = 30
    }))
    ```
    
6. What’s wrong with the following state update?
    
    ```jsx
    const [colors, setColors] = useState(["pink", "blue"])
    
    setColors("green")
    ```
    prevSate overwritten, should be preserved, as a string and not as an array.
    