import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import NoteList from './components/NoteList.jsx'
import Note from './components/Note.jsx'
import NotePage from './NotePage.jsx'
import CreateNote from './CreateNote.jsx'

export default function App() {

  return (
    <div className='nav-bav'>

      <nav style={{ margin: 10 }}>
        <Link to='/' style={{ padding: 5 }}
        >
          Home
        </Link>
        <Link to='/createNote' style={{ padding: 5 }}
        >
          Create Note
        </Link>
      </nav>

      <Routes>
        <Route path='/' element={<NoteList />} />
        <Route path='/:id' element={<Note />} />
        <Route path='/notePage' element={<NotePage />} />
        <Route path='/createNote' element={<CreateNote />} />
      </Routes>

    </div>
  )
}