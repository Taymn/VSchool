import { useState } from 'react'
import DiceBox from "./components/DiceBox"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <DiceBox />
     <button>Roll Dice</button>
    </>
  )
}
  
export default App
