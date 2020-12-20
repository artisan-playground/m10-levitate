import React from 'react'
import styled from 'styled-components'

const BoxWrapper = styled.div`
    background-color: rgba(0, 71, 255, 0.5);
    border: 8px solid rgba(0, 71, 255, 1);
    border-bottom: 0;
    width: 37px;
    height: 46px;
    margin: 20px 8px;
    h1{
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 46px;
    }
`

const BoxParking = ({NO}) => {
    return (
        <>
            <BoxWrapper>
                <h1>{NO}</h1>
            </BoxWrapper>
        </>
    )
}

export default BoxParking