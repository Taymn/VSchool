import { useState } from 'react'


function App() {
  const [page, setPage] = useState("home")
    
  function swapPages(newPage) {
      setPage(prevPage => newPage)
  }
  return (

    <div>
      <nav>
        <button onClick={() => swapPages("home")}>Home</button>
        <button onClick={() => swapPages("about")}>About</button>
      </nav>
      {
        page === "home" ?
          <h1>Home Page</h1> :
          <h1>About page</h1>
      }
    </div>

  )
}

export default App
