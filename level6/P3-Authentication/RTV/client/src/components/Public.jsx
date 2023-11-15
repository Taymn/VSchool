import React, { useEffect, useState } from 'react'
import { UserContext } from '../context/UserProvider'
import IssueList from './IssueList'

export default function Public() {
    const { getAllIssues, allIssues } = React.useContext(UserContext)
 
    useEffect(() => {
        allIssues()
    }, [])
    
    return (
        <>
            <h3>All Issues</h3>
            <IssueList issues={getAllIssues}/>
        </>
    )
}