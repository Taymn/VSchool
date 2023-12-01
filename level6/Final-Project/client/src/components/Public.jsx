import React, { useEffect } from 'react';
import { Context } from '../context/Context.jsx'
import NoteList from './NoteList.jsx'

function Public(props) {
  const { getNotes, userNotes } = React.useContext(Context)
  const {tags, hotTag} = props
  // console.log('notes', notes)

  useEffect(() => {
    getNotes()
  },[])

  return (
    // <>
    // <h3>Tagged Notes</h3>
    // {notes && <NoteList notes={notes} Public={true} tags={tags} />}
    
    // </>
    <>
    <h3> All Notes </h3>
    <NoteList   notes={userNotes}  deleteAllowed={true}/>

    </>
  ) 
}

export default Public