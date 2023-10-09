import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import {ThemeContextProvider} from './components/ThemeProvider'

export default function App(props) {

  return (
    <>
      <ThemeContextProvider>
        <Navbar />
        <Main />
        <Footer />
      </ThemeContextProvider>
    </>
  )
}

