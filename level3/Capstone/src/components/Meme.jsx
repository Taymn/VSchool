import React, { useState } from 'react';


export default function Meme(props) {

  const { meme, index, edit, handleDelete } = props
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

  function handleChange(e) {
    const { name, value } = e.target
    setEdits(prevEdits => {
      return {
        ...prevEdits,
        [name]: value
      }
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    edit(index, edits)
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
          <button type="submit">Save</button>
        </form>
      }
    </>
  );
}