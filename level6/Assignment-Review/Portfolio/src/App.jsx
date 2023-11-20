import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Experience from './routes/Experience.jsx'
import Projects from './routes/Projects.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ProjectDispaly from './routes/ProjectDisplay.jsx'

export default function App() {
  return (
    <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' 
          element={<Home />} 
          />
          <Route path='/projects' 
          element={<Projects />} 
          />
          <Route path='/project/:id' 
          element={<ProjectDispaly />}
          />
          <Route path='/experience' 
          element={<Experience />} 
          />
        </Routes>
        <Footer />
    </div>
  )
}