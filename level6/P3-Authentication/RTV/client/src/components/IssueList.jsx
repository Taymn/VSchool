import React from "react";
import Issue from "./Issue.jsx";

export default function IssueList(props) {
    const { issues} = props

    return (
        <div>
            {issues && issues.map(issue => <Issue {...issue} key={issue._id} />) }
        </div>
    )
}