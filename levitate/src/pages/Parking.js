import React from 'react'
import styled from 'styled-components'
import WHITE from '../layout/WHITE'
import WHITERow from '../layout/WHITERow'
import PICK from '../layout/PICK'
import PICKRow from '../layout/PICKRow'
import BLUE from '../layout/BLUE'
import BLUERow from '../layout/BLUERow'
import GOLD from '../layout/GOLD'
import GOLDRow from '../layout/GOLDRow'
import CAR from '../layout/CAR'
import CARRow from '../layout/CARRow'
import Status from '../assets/Group 100.png'

const GhostNavbar = styled.div`
  height: 64px;
  padding: 0.5rem;
`

const LOT = styled.div`
    display: flex;
    padding: 0.5%;
    width: 99%;
`

const LOTWrapper = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 55vh;
    border-radius: 14px;
    padding-top: 10%;
    position: relative;
`

const Wrapper = styled.div`
    background-color: rgba(82,95,115,1);
    padding: 3%;
    border-radius: 16px;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const Image = styled.img`
    position: absolute;
    top: 85px;
    left: -2%;
    width: 14%;

`

const Parking = () => {
    return (
        <Container>

            <GhostNavbar />

            <LOTWrapper>

                <Image src={Status} />

                <Wrapper>

                    <LOT>
                        <GOLD NO='A1' />
                        <GOLD NO='A2' />
                        <GOLD NO='A3' />
                        <WHITE NO='A4' />
                        <CARRow />
                        <CARRow />
                        <CARRow />
                        <WHITE NO='A8' />
                        <WHITE NO='A9' />
                        <WHITE NO='A10' />
                    </LOT>

                    <LOT>
                        <BLUERow NO='B1' />
                        <GOLDRow NO='B2' />
                        <GOLDRow NO='B3' />
                        <WHITERow NO='B4' />
                        <WHITERow NO='B5' />
                        <WHITERow NO='B6' />
                        <CAR />
                        <WHITERow NO='B8' />
                        <WHITERow NO='B9' />
                        <WHITERow NO='B10' />
                    </LOT>

                    <LOT>
                        <BLUE NO='C1' />
                        <PICK NO='C2' />
                        <PICK NO='C3' />
                        <WHITE NO='C4' />
                        <WHITE NO='C5' />
                        <CARRow />
                        <WHITE NO='C7' />
                        <WHITE NO='C8' />
                        <WHITE NO='C9' />
                        <WHITE NO='C10' />
                    </LOT>

                    <LOT>
                        <PICKRow NO='D1' />
                        <PICKRow NO='D2' />
                        <PICKRow NO='D3' />
                        <WHITERow NO='D4' />
                        <WHITERow NO='D5' />
                        <WHITERow NO='D6' />
                        <WHITERow NO='D7' />
                        <WHITERow NO='D8' />
                        <CAR />
                        <WHITERow NO='D10' />
                    </LOT>

                </Wrapper>

            </LOTWrapper>

        </Container>
    )
}

export default Parking
