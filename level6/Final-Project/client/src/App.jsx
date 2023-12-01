import React, { useContext } from 'react'
import { Route, Routes, Link, Navigate } from 'react-router-dom'
import Auth from './components/Auth.jsx'
import Note from './components/Note.jsx'
import NotePage from './components/NotePage.jsx'
import Public from './components/Public.jsx'
import CreateNote from './components/CreateNote.jsx'
import { Context } from './context/Context.jsx'

export default function App() {
  const { token, logout, createTag } = useContext(Context)

  return (
    <div className='nav-bav'>
      {/* {createTag()} */}

      {token &&
        <nav style={{ margin: 10 }}>
          <Link to='/' style={{ padding: 5 }}
          >
            Home
          </Link>
          <Link to='/createNote' style={{ padding: 5 }}
          >
            Create Note
          </Link>
          <Link to='/public' style={{ padding: 5 }}
          >
            Public
          </Link>
          <Link onClick={logout} style={{ padding: 5 }}
          >
            Logout
          </Link>
        </nav>}

      <Routes>
        <Route path='/' element={token ? <Navigate to='/notePage' /> : <Auth />} />
        <Route path='/public/:id' element={<Note />} />
        <Route path='/notePage' element={!token ? <Navigate to='/' /> : <NotePage />} />
        <Route path='/public' element={!token ? <Navigate to='/' /> : <Public />} />
        <Route path='/createNote' element={<CreateNote />} />
      </Routes>

    </div>
  )
}