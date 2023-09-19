import { useState } from 'react'
import './App.css'

// function countInitial() {
//   console.log('run funtion')
//     return 4
// }
function App() {
  // const [count, setCount] = useState(4)
  // const [count, setCount] = useState(() => countInitial())
  // const [state, setState] = useState({ count: 4, theme: "blue" })
  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState("blue")
  // const count = state.count
  // const theme = state.theme


  function decrementCount() {
    // setCount(count - 1)
    // setCount(count - 1)
    // setCount(prevCount => prevCount - 1)
    setCount(prevCount => prevCount - 1)
    setTheme("yellow")
    // setState(prevState => {
    //   return {...prevState, count: prevState.count - 1}
    // })
  }
  function incrementCount() {
    setCount(prevCount => prevCount + 1)
    setTheme("red")
    // setState(prevState => {
    //   return {...prevState,count: prevState.count + 1}
    // })
}

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App
