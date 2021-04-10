import React, { useState, createContext } from 'react'


export const MeatInfoContext = createContext();


export const MeatInfoProvider = (props) => {
    // const [itemAddedToCart, setItem]
    const [confirmedOrderPriceTotal, setConfirmedOrderPriceTotal] = useState('');
    let [confirmedCount, setConfirmedCount] = useState(1);

    return <MeatInfoContext.Provider value={{
        confirmedPriceTotal: [confirmedOrderPriceTotal, setConfirmedOrderPriceTotal],
        confirmedOrderNumTotal: [confirmedCount, setConfirmedCount]
    }}>
        {props.children}
    </MeatInfoContext.Provider>
}
