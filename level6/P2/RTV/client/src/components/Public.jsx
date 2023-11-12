import React, { useEffect, useState } from 'react'
import { UserContext } from '../context/UserProvider'

export default function Public() {
    const { getAllIssues, allIssues } = React.useContext(UserContext)
    const displayData = getAllIssues.map((issues) => {
        return (
            <>
                <h4> Title: {issues.title}</h4>
                <p>{issues.description}</p>
            </>
        )
    })
    useEffect(() => {
        allIssues()
    }, [])
    return (
        <>
            <h3>All Issues</h3>
            {displayData}
        </>
    )
}