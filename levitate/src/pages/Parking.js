import React from 'react'
import styled from 'styled-components'
import WHITE from '../layout/WHITE'
import PICK from '../layout/PICK'
import BLUE from '../layout/BLUE'
import GOLD from '../layout/GOLD'

const GhostNavbar = styled.div`
  height: 64px;
  padding: 0.5rem;
`

const LOT = styled.div`
    display: flex;
`

const LOTWrapper = styled.div`

`

const Parking = () => {
    return (
        <>
            <GhostNavbar />

            <LOTWrapper>

                <LOT>
                    <GOLD NO='A1' />
                    <GOLD NO='A2' />
                    <GOLD NO='A3' />
                    <WHITE NO='A4' />
                    <WHITE NO='A5' />
                    <WHITE NO='A6' />
                    <WHITE NO='A7' />
                    <WHITE NO='A8' />
                    <WHITE NO='A9' />
                    <WHITE NO='A10' />
                </LOT>

                <LOT>
                    <BLUE NO='B1' />
                    <GOLD NO='B2' />
                    <GOLD NO='B3' />
                    <WHITE NO='B4' />
                    <WHITE NO='B5' />
                    <WHITE NO='B6' />
                    <WHITE NO='B7' />
                    <WHITE NO='B8' />
                    <WHITE NO='B9' />
                    <WHITE NO='B10' />
                </LOT>

                <LOT>
                    <BLUE NO='C1' />
                    <PICK NO='C2' />
                    <PICK NO='C3' />
                    <WHITE NO='C4' />
                    <WHITE NO='C5' />
                    <WHITE NO='C6' />
                    <WHITE NO='C7' />
                    <WHITE NO='C8' />
                    <WHITE NO='C9' />
                    <WHITE NO='C10' />
                </LOT>

                <LOT>
                    <PICK NO='D1' />
                    <PICK NO='D2' />
                    <PICK NO='D3' />
                    <WHITE NO='D4' />
                    <WHITE NO='D5' />
                    <WHITE NO='D6' />
                    <WHITE NO='D7' />
                    <WHITE NO='D8' />
                    <WHITE NO='D9' />
                    <WHITE NO='D10' />
                </LOT>

            </LOTWrapper>
        </>
    )
}

export default Parking
