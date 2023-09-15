import { useState } from 'react'
import React from 'react';
import data from '../components/data'
import VacationSpots from '../components/vacationSpots'

export default function App() {
  const vacSpot = data.map(element => {
    return (
      <VacationSpots
      {...element}
      />
    )
  })
  return (
    <div className='container'>
      {vacSpot}
    </div>
  )
}
