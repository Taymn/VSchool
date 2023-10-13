import React from 'react'; //Step 1
import {Routes, Route, Link} from 'react-router-dom'; //Step 2
import Home from './components/Home'; //Step 8
import About from './components/About'//Step 10
import Services from './components/Services' //Nav Example

export default function App() {// Step 3
  return (//Step 4

    // <Router>{/*Step 5*/}
    <>
      <nav style={{ margin: 10 }}> {/*Step 11*/}
        <Link to='/' style={{ padding: 5 }}>{/*Step 12*/}
          Home
        </Link>
        <Link to='/about' style={{ padding: 5 }}>{/*Step 13*/}
          About
        </Link>
        <Link to='/services' style={{ padding: 5 }}>{/*Step 14*/}
          Services
        </Link>
      </nav>

      <Routes>{/*Step 6*/}
        <Route path='/' element={<Home />} /> {/*Step 7*/}
        <Route path='/about' element={<About />} /> {/*Step 9*/}
        <Route path='/services' element={<Services />} /> {/*NAV -Step */}
      </Routes>
      </>
    // </Router>
  )
}


