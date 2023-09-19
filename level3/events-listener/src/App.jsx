
import React from 'react';

 export default function App() {
function handleClick (){
console.log("I was clicked!")
}
function handleOver (){
  console.log("I'm over you!")
} 
 return (
    <div className='container'>
      <img src="https://picsum.photos/640/360" onMouseOver={handleOver}/>
            <button onClick={handleClick} >Click me</button>
    </div>
  )
}

