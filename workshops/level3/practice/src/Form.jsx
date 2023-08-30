import { useState } from "react"

function Form() {
    const [inputs, setInputs] = useState({
        topText: "",
        bottomText: ""
      })
    
      function handleChange(e) {
        console.log(e);
        const { name, value } = e.target;
        setInputs((prevInputs) => {
          return {
            ...prevInputs,
            [name]: value,
          };
        });
      }
    
      console.log(inputs)
    
      return (
        <>
          <form>
            <input 
              name='topText'
              value={inputs.topText}
              onChange={handleChange}
              />
            <input 
              name='bottomText'
              value={inputs.bottomText}
              onChange={handleChange}
              
            />
            <button>Submit</button>
          </form>
    <div>
        <p>{inputs.topText}</p>
        <p>{inputs.bottomText}</p>
    </div>
          
        </>
      )
}

export default Form;

