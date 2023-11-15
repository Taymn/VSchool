import React, { useState,useContext } from 'react';
import { UserContext } from '../context/UserProvider'

export default function Issue(props) {
    const { deleteIssue, postNewComment } = useContext(UserContext)
    const initInputs = { text: '' }
    const [ inputs, setInputs ] = useState(initInputs)
    const { title, description, upVote, downVote, _id, comments } = props

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prev => ( {
            ...prev, 
            [name]: value }
        ) )
    }

    console.log('props',props)
    
    const { comment } = inputs
    return (
        <div className='issue'>
            <h1>{title}</h1>
            <p>{description}</p>
            <>
                <a>{upVote}</a>
                <a>{downVote}</a>
            </>
            <button onClick={() => deleteIssue(_id)}>Delete</button>
            <form onSubmit={(e) => {e.preventDefault(); postNewComment(comment, _id)}}>
                <input
                    type='text'
                    name='comment'
                    value={comment}
                    onChange={handleChange}
                    placeholder='Comment'
                />
                <button>Add Comment</button>
            </form>
               {comments && comments.map(comment => 
               <p key={comment._id}>{comment.text}</p>
               )}
        </div>
    )
}