import { useState } from 'react'
import React from 'react'
import Form from './components/formData'
import Badge from './components/Badge'
// need form component to take and store info
// badge comp to display info

function App() {
  const [badge, setBadge] = React.useState([])

  // need a .map
  const badges = badge.map((item, index) => {
    console.log(item.firstName)
    return (
      <Badge index={index} person={item} />
    )
  })

  return (
    <div>
      <Form badge={badge} setBadge={setBadge} />
      <br />
      <div className='badges'>
        {badge.length > 0 ? badges : <></>}
      </div>
    </div>
  )
}

export default App
