import React from 'react';

function App() {
const [color, setColor] = React.useState("")


React.useEffect(function () {
  getColor()
}, [])

function getColor(){
  fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
  .then(res => res.json())
  .then(data => setColor(data.new_color))
}


  return (
    <div style={{backgroundColor:`#${color}`}} className="box">
      <h3 >Random Color</h3>
      <button onClick={getColor}>Color</button>
    </div>
  );
}

export default App;