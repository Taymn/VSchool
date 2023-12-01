import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Context } from '../context/Context.jsx'
// Home displays all notes by title

export default function NoteList(props) {
  
  const { tags, hotTag, deleteAllowed} = props
  const { userNotes, deleteNote, notes, user } = React.useContext(Context)
  // console.log('notelist component')
  // setDeleteAllowed(toggleDelete)
  let noteTitle
  if (notes.length > 0) {
    noteTitle = notes.map((note) => {
      // console.log(note._id)
      // console.log(_id, note.user )
      return (
          <div className='note-container'>
            <Link to={`${note._id}`}>
              <h3>{note.title}</h3>
            </Link>
          <h4>{note.createdAt}</h4>
            {user._id === note.user && <button className='button' onClick={() => deleteNote(note._id)}>Delete</button>}
          </div>
      )
    })
  }

  // const notesWithTags = notes?.map((note) => {
  //     const filteredTags = note.tags.map((tag) => {
  //     if(tag === tags){
  //       return <h1 key={note.id}>{note.title}</h1>
  //     }
  //     return null;
    // }
    // )
    
    // return (
    //   <div className='note-container' key={note.id}>
    //     <h3>{note.title}</h3>
    //     {filteredTags}
    //   </div>
    // )
  // }
  // )

  return (
    <>
      <h2 key={notes.id}>Note List</h2>
      {/* {hotTag ? 
        notesWithTags
      :
        noteTitle
      } */}
      {/* {notesWithTags} */}
      {noteTitle}
    </>
  )
}