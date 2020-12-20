import React from 'react'
import styled from 'styled-components'
import Car from '../assets/car.png'

const BoxWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 8px;
    width: 54px;
    img{
        width: 40px;
        height: 46px;
    }
`

const Cars = () => {
    return (
        <BoxWrapper>
            <img src={Car} />
        </BoxWrapper>
    )
}

export default Cars