import React, {useEffect, useState} from 'react';
import { Context } from '../context/Context'
import Public from './Public'
import NoteList from './NoteList';

//View Comments, Likes, Dislikes, Tags


function NotePage(props) {
    const [tag, setTag] = useState(false)
    const [thisOne, setThisOne] = useState('')

function toggle(clicked){
    setTag(!tag)
    setThisOne(clicked)
    // console.log('thisOne', thisOne)
}

    const { userNotes, getUserNotes, notes, getNotes, deleteNote } = React.useContext(Context)
       useEffect(() => {
            getUserNotes()
            getNotes()
        }, [])

        // console.log('userNotes', userNotes.title)
        
    const displayData = userNotes.map((notes) => {
        
        return (
            
            <div className='note' key={notes.id}>
                {/* {console.log('notes map variable', notes)} */}
                <h1>Title: {notes.title}</h1>
                <textarea defaultValue={notes.content} />
                <button className='button' onClick={() => deleteNote(notes._id)}>Delete</button>

                <div>
                    {/* <button>Likes: {notes.likes}</button>
                    <button>Dislikes: {notes.dislikes}</button> */}
                    {notes.comments.map((comment, index) =>
                        <div key={index}>{comment}</div>
                    )}
                   { /*map code to render a tag per tag*/}
                    {notes.tags.map((tag, index) => <a key={index} onClick={() => toggle(tag)}>{tag}</a>)}
                </div>
                    {/* {tag && <NoteList tags={thisOne} hotTag={true} notes={userNotes}  /> } */}
                    
            </div>
        )
    })
    
    return (
        
        <>
            {/* <NoteList tags={thisOne} hotTag={true} notes={notes} deleteAllowed={true}/> */}

            {displayData}
            {/* <Public /> */}
        </>
        
    );
}

export default NotePage;