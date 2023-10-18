import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Monster from './components/Monster'
import Weapon from './components/Weapon'
import Armour from './components/Armour'

export default function App() {

  return (
    <>
      <nav stylye={{ margin: 10 }}>

        <Link
          to='/' style={{ padding: 5 }}
        >
          Home
        </Link>
        <Link
          to='/monsters' style={{ padding: 5 }}
        >
          Monster
        </Link>
        <Link
          to='/weapons' style={{ padding: 5 }}
        >
          Weapon
        </Link>
        <Link
          to='/armour' style={{ padding: 5 }}
        >
          Armour
        </Link>

      </nav>

      

      <Routes>
        <Route path='/' element={
          <Home />
        } />
        <Route path='/monsters' 
        element={<Monster />}
           />
        <Route path='/weapons' 
        element={<Weapon />} 
        />
        <Route path='/armour' 
        element={<Armour />} 
        />
      </Routes>
    </>
  )
}