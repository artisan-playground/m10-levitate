import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ListWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const List = styled(Link)`
    cursor: pointer;
`

export const Test = styled.div`
    background-color: #5A524F;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 0 0 10px 10px;
    p {
        font-weight: bold;
        margin: 3px 0;
        color: #fff;
    }
`