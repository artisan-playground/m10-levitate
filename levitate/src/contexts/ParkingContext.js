import React, {useState,createContext} from 'react'
export const ParkingContextWrapper = createContext({})
export default function ParkingContext(props) {

  const [lot1, setLot1] = useState(5)
  const [lot2, setLot2] = useState(5)
  const [lot3, setLot3] = useState(5)
  const [lot4, setLot4] = useState(5)

  return (
    <ParkingContextWrapper.Provider value={{lot1,setLot1,lot2,setLot2,lot3,setLot3,lot4,setLot4}}>
      {props.children}
    </ParkingContextWrapper.Provider>
  )
}