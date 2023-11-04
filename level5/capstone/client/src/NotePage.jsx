import React from 'react';
import { Context } from './Context'
//View Comments, Likes, Dislikes, Tags

function NotePage(props) {
    const { notes } = React.useContext(Context)
    const displayData = notes.map((notes) => {
        return (
            <div className='note'>
                <h1>Title: {notes.title}</h1>
                <textarea defaultValue={notes.content} />
                <>
                    <button>Likes: {notes.likes}</button>
                    <button>Dislikes: {notes.dislikes}</button>
                    {notes.comments.map(comment =>
                        <div >{comment}</div>
                    )}
                    <a>{notes.tags}</a>
                </>
            </div>
        )
    })

    return (

        <>
            {displayData}
        </>
        
    );
}

export default NotePage;