import React from 'react';
import Header from './assets/components/Header';
import BlogList from './assets/components/BlogList'
import Footer from './assets/components/Footer'
import data from './data'

export default function App() {

  // const wrap = pokemon.map(pokemon =>`<p>${pokemon}</p>`)

  

  return (
    <div className='container'>
      <Header />
      <BlogList />
      <Footer />
    </div>
  )
}

