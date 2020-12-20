import React, {useContext} from 'react'
import { ParkingContextWrapper } from '../contexts/ParkingContext'

let note
const mqtt = require('mqtt')
const options = {
    protocol: 'mqtts',
    clientId: 'b0908853'
}
const client  = mqtt.connect('mqtt://mqtt.artisandigital.tech:8883', options)
client.subscribe('dii/parking/+/$/command')

const Connection = () => {

    const {lot1,setLot1,lot2,setLot2,lot3,setLot3} = useContext(ParkingContextWrapper)
    
    client.on('connect', function () {
        console.log("connect")
    })
    client.on('message',async function (topic, message) {
        note = message.toString()
        note = JSON.parse(note)
        if ( topic ===  "dii/parking/Senser 1/$/command") {
            setLot1(note)
        } 
        if ( topic ===  "dii/parking/Senser 2/$/command") {
            setLot2(note)
        }
        if ( topic ===  "dii/parking/Senser 3/$/command") {
            setLot3(note)
        }
    })
    console.log(lot1)
    console.log(lot2)
    console.log(lot3)
    return (
        <>
        </>
    )
}

export default Connection
