import React from "react";
import Issue from "./Issue.jsx";
import { UserContext } from '../context/UserProvider.jsx';

export default function IssueList(props) {
    const { deleteIssue } = React.useContext(UserContext)
    const { issues } = props
    console.log('issues',issues)
    return (
        <div>
           
            {issues && issues.map(issue => <Issue {...issue} key={issue._id} />) }
            
           
        </div>
    )
}