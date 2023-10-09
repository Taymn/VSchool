import React, { useState } from 'react'
import Form from './components/Form'
import { UglyContext } from './components/Context'
import { useContext } from 'react'

function App() {

  // const {
  //   thingArray,
  //   setThingArray
  // } = useContext(UglyContext)

  // const thingArray = thingArray.map((item, index => {
  //   console.log(item.title)
  //   return (
  //     <Thing index={index} item={item} />
  //   )
  // }))

  return (
    <>
      <h1>Ugly Things</h1>
      <Form
        // thing={thing}
        // setThings={setThing}
      />
      {/* <div className='uglyThings'>
        {thing.length > 0 ? things : <></>}
      </div> */}
      {/* {things} */}
    </>
  )
}

export default App
