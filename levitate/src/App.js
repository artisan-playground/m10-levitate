import React from 'react'
import ParkingContext from './contexts/ParkingContext'
import Connection from './services/Connection'
function App() {
  return (
    <>
      <ParkingContext>
        <Connection />
      </ParkingContext>
    </>
  )
}

export default App
