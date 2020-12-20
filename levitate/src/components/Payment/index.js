import React from 'react'
import PaymentImages from '../../assets/Payment.png'
// import { BoxApp } from './ApplicationElements'
import styled from 'styled-components'

export const PaymentContainer = styled.div`
    width: 400px;
    height: 400px;
    background-color: #fff;
    text-align: center;
    border-radius: 30px;
    padding: 5px;
    img {
        border-radius: 10px;
        width: 100%;
        border-radius: 30px;
    }
    button {
        background-color: #1C1D22;
        color: #fff;
        border: none;
        padding: 5px 15px;
        font-size: 10px;
        margin-top: 10px;
        cursor: pointer;
        outline: none;
    }
`

const Payment = () => {
    return (
        <PaymentContainer>
            <img src={PaymentImages} />
            <button>สั่งจอง</button>
        </PaymentContainer>
    )
}

export default Payment