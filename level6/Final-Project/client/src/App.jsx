import React, {useContext} from 'react'
import { Route, Routes, Link, Navigate } from 'react-router-dom'
import NoteList from './components/NoteList.jsx'
import Auth from './components/Auth.jsx'
import Note from './components/Note.jsx'
import NotePage from './NotePage.jsx'
import CreateNote from './CreateNote.jsx'
import{ Context } from './context/Context.jsx' 

export default function App() {
  const { token, logout, user } = useContext(Context)

  return (
    <div className='nav-bav'>

     {token && <nav style={{ margin: 10 }}>
        <Link to='/' style={{ padding: 5 }}
        >
          Home
        </Link>
        <Link to='/createNote' style={{ padding: 5 }}
        >
          Create Note
        </Link>
      </nav>}

      <Routes>
        <Route path='/' element={token ? <Navigate to='/notePage'/> : <Auth />} />
        <Route path='/:id' element={<Note />} />
        <Route path='/notePage' element={!token ? <Navigate to='/'/> : <NotePage />} />
        <Route path='/createNote' element={<CreateNote />} />
      </Routes>

    </div>
  )
}