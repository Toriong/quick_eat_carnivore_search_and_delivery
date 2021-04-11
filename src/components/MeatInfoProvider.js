import React, { useState, createContext } from 'react'


export const MeatInfoContext = createContext();


export const MeatInfoProvider = (props) => {
    const [selectedRestaurants, setSelectedRestaurants] = useState('')
    const [confirmedOrderPriceTotal, setConfirmedOrderPriceTotal] = useState('');
    const [nameOfOrder, setNameOfOrder] = useState('');
    let [confirmedCount, setConfirmedCount] = useState(0);

    return <MeatInfoContext.Provider value={{
        confirmedPriceTotal: [confirmedOrderPriceTotal, setConfirmedOrderPriceTotal],
        confirmedQuantityOfOrder: [confirmedCount, setConfirmedCount],
        confirmedNameOfRestaurantOfOrder: [selectedRestaurants, setSelectedRestaurants],
        confirmedNameOfOrder: [nameOfOrder, setNameOfOrder]
    }}>
        {props.children}
    </MeatInfoContext.Provider>
}
