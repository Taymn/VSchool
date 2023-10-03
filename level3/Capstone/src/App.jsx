import Header from './components/Header'
import Generator from './components/Generator'
import Meme from './components/Meme'
import React, { useState } from 'react';


function App() {
  const [savedMeme, setSavedMeme] = useState([]);

  const savedMemeElements = savedMeme.map((meme, index) => {
    return (
        <Meme 
        meme = {meme}
        index = {index}
        edit = {handleEdit}
        handleDelete = {handleDelete}
        />
    )
  })
  function handleEdit(memeIndex, update) {
    // console.log(update)
    setSavedMeme(prevMemes => prevMemes.map((meme, index) => index !== memeIndex ? meme : update ))
  }
  
  function handleDelete (memeIndex) {
    setSavedMeme(prevMemes => prevMemes.filter((meme,index) => index !== memeIndex))
  }


  // console.log(savedMeme)
  return (
    <div className='App'>
      <Header />
      <Generator
        setSavedMeme={setSavedMeme}
      />
      <h1 className='saved-title'>Saved Memes</h1>
      <div className='meme-container'>
        {savedMemeElements}
      </div>
    </div>
  );
}

export default App;
