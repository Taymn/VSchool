// import React from "react"
// import ReactDOM from "react-dom"

function App() {
    // const firstName = "Joe"
    // const lastName = "Schmoe"
    const data = new Date()
    const hours = date.getHours() % 12
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    return (
        // <h1>Hello {firstName} {lastName}!</h1>
        // <h1>It is currently about {hours} o'clock!</h1>
        <h1>Good {timeOfDay}!</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))