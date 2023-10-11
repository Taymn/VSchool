import React from 'react'
import Form from './components/Form'
import { uglyContext } from './components/Context'
import { useContext } from 'react'
import UglyThing from './components/UglyThing'

function App() {

  const {
    thingArray, setThingArray, deleThing, editThing
  } = useContext(uglyContext)

  const thingsArray = thingArray.map((item => {
    return (
      <UglyThing
        key={item._id}
        {...item}
        deleThing={deleThing}
        editThing={editThing}
      />
    )
  }))

  return (
    <>
      <div className='App'>
        <h1>Ugly Things</h1>
        <Form />
      </div>
      {thingArray && thingsArray}
    </>
  )
}

export default App
