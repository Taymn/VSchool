import React, { useState } from 'react';


export default function Meme(props) {

        
  const { meme, index, edit, setSavedMeme } = props
  // console.log(index)
  const [toggle, setToggle] = useState(false)
  function handleToggle() {
    setToggle(prev => !prev)
  }
  const [edits, setEdits] = useState({
    topText: meme.topText,
    bottomText: meme.bottomText,
    url: meme.url
  })
  
  function handleEdit(memeIndex, update) {
    console.log('handleEdit func', 'edits',update)
    setSavedMeme(prevMemes => prevMemes.map((meme, index) => meme.id !== memeIndex ? meme : update ))
  }
  
  function handleDelete (memeIndex) {
    console.log('inside handleDelete', memeIndex)
    // setSavedMeme(prevMemes => prevMemes.filter((meme,index) => index !== memeIndex))
    setSavedMeme(preSavedMeme => {
      return [...preSavedMeme.filter(item => item !== preSavedMeme[index])]
  })
  // setEdits("")
  }



  function handleChange(e) {
    const { name, value } = e.target
    console.log('name', name, 'value', value)
    setEdits(prevState=>{
      return {
          ...prevState,
          [name]:value
          
      }
  })}
console.log(index)
  function handleSubmit(e){
    console.log('handleSubmit func', 'edits:', edits)
    e.preventDefault()
    handleEdit(meme.id, edits)
    handleToggle()
  }

  return (
    <>
      {!toggle &&
        <div className='meme'>
          <img className='meme-image'
            src={meme.url}>
          </img>
          <h2 className='meme-text top'
          >{meme.topText}
          </h2>
          <h2 className='meme-text bottom'
          >{meme.bottomText}
          </h2>
          <button onClick={handleToggle}>Edit</button>
          <button onClick={() => handleDelete(index)} >Delete</button>
        </div>
      }
      {toggle &&
        <form onSubmit={handleSubmit}>
          <input
            name="topText"
            type="text"
            value={edits.topText}
            onChange={handleChange}
          />
          <input
            name="bottomText"
            type="text"
            value={edits.bottomText}
            onChange={handleChange}
          />
          <input
            name="url"
            type="text"
            value={edits.url}
            onChange={handleChange}
          />
          <button onClick={handleToggle}>Cancel</button>
          <button>Save</button>
        </form>
      }
    </>
  );
}