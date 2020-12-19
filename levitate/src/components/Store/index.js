import React from 'react'
import { ListWrapper, List, Test } from './StoreElements'
import Central from '../../assets/central.png'

const Store = () => {
    return (
        <>
            <ListWrapper>
                <List to="/Parking">
                    <img src={Central} />
                    <Test>
                        <p>Central Festival</p>
                        <p>Chiang Mai</p>
                    </Test>
                </List>
                <List to="/Parking">
                    <img src={Central} />
                    <Test>
                        <p>Central Festival</p>
                        <p>Chiang Mai</p>
                    </Test>
                </List>
                <List to="/Parking">
                    <img src={Central} />
                    <Test>
                        <p>Central Festival</p>
                        <p>Chiang Mai</p>
                    </Test>
                </List>
            </ListWrapper>
        </>
    )
}

export default Store
