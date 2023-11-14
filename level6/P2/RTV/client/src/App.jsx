import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Auth from './components/Auth.jsx'
import Profile from './components/Profile.jsx'
import Public from './components/Public.jsx'
import { UserContext } from './context/UserProvider.jsx'

export default function App() {
  const { token, logout } = useContext(UserContext)
  console.log('token',token)
  return (
    <div className='app'>
      <Navbar logout={logout}/>
      <Routes>
        <Route 
          path='/'
          element={ token ? <Navigate to='/profile'/> : <Auth />}
          />
        <Route 
          path='/profile'
          element={token ? <Profile /> : <Navigate to='/'/>}
          />
        <Route 
          path='/public'
          element={token ? <Public /> : <Navigate to='/'/>}
          />
      </Routes>
    </div>
  )
}