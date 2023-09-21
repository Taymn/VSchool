import { useState } from 'react'
import Square from "./components/Square"

function App() {
  const [squares, setSquares] = useState(["white", "white", "white", "white"])
  const squareElements = squares.map(square => (
    <Square color={square} />
  ))

  function checkBlkWh() {
    const newSquareArray = squares.map(square => square === "white" ? "black" : "white")
    setSquares(newSquareArray)
  }

  function tr2Purp() {
    const newSquareArray = squares.map((square, index) => index < 2 ? "purple": square)
    setSquares(newSquareArray)
  }

  function blBlu() {
    const newSquareArray = squares.map((square, index) => index === 2 ? "blue": square)
    setSquares(newSquareArray)
   }

  function brBlu() { 
    const newSquareArray = squares.map((square, index) => index === 3 ? "blue": square)
    setSquares(newSquareArray)
  }

  function tlCh() {
    const newSquareArray = squares.map((square, index) => index === 0 ? "red": square)
    setSquares(newSquareArray)
  }

  function trCh() {
    const newSquareArray = squares.map((square, index) => index === 1 ? "yellow": square)
    setSquares(newSquareArray)
   }

  function blCh() {
    const newSquareArray = squares.map((square, index) => index === 2 ? "orange": square)
    setSquares(newSquareArray)
   }

  function brCh() {
    const newSquareArray = squares.map((square, index) => index === 3 ? "green": square)
    setSquares(newSquareArray)
   }

  return (
    <div>
      <main id="grid-container">
        {squareElements}
      </main>
      <h1 className='title'>DJ Color Board</h1>
      <div>
        <button onClick={checkBlkWh}>Small Time DJ</button>
        <button onClick={tr2Purp}>Party DJ</button>
        <button onClick={blBlu}>Professional DJ</button>
        <button onClick={brBlu}>Professional DJ</button>
        <button onClick={tlCh}>Big Time DJ</button>
        <button onClick={trCh}>Big Time DJ</button>
        <button onClick={blCh}>Big Time DJ</button>
        <button onClick={brCh}>Big Time DJ</button>
      </div>
    </div>

  )
}

export default App
