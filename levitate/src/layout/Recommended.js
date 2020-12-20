import React from 'react'
import styled from 'styled-components'

const RecWrapper = styled.div`
    color: white;
    position: absolute;
    left: 10px;
    bottom: -40px;
    width: 11%;
    height: 12vh;
    background-color: rgba(82,82,115,1);
    padding: 12px;
    border-radius: 14px;
    text-align: center;
    h1{
        font-weight: 900;
        padding-bottom: 8px;
    }
    button{
        border-radius: 8px;
        color: white;
        border: 1px solid rgba(151,8,29,1);
        background-color: rgba(151,8,29,1);
        padding: 8px 26%;
        margin-top: 16px;
    }
`

const Rec = () => {
    return (
        <>
            <RecWrapper>

                <h1>RECOMMENDED</h1>
                <p>เพื่อการจอดที่สะดวกขึ้น</p>

                <button>ค้นหา</button>

            </RecWrapper>
        </>
    )
}

export default Rec