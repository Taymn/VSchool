import React, {useContext} from 'react';
import { UserContext } from '../context/UserProvider'

export default function Issue(props){
    const {deleteIssue} = useContext(UserContext)
    const { title, description, upVote,downVote, comments, _id } = props
    return (
        <div className='issue'>
            <h1>{ title }</h1>
            <p>{ description }</p>
            <>
                <a>{upVote}</a>
                <a>{downVote}</a>
            </>
            <p>{comments.text}</p>
            <button onClick={() => deleteIssue(_id)}>Delete</button>
        </div>
    )
}