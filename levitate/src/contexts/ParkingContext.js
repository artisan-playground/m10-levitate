import React, {useState,createContext} from 'react'

export const ParkingContextWrapper = createContext({})
export default function ParkingContext(props) {

  const [lot1, setLot1] = useState()
  const [lot2, setLot2] = useState()
  const [lot3, setLot3] = useState()
  const [lot4, setLot4] = useState()

  return (
    <ParkingContextWrapper.Provider value={{lot1,setLot1,lot2,setLot2,lot3,setLot3,lot4,setLot4}}>
      {props.children}
    </ParkingContextWrapper.Provider>
  )
}