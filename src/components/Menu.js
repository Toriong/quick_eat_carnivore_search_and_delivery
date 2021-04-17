import React, { useState, useEffect, useContext } from 'react';
import { MeatInfoContext } from './MeatInfoProvider'
import { useParams } from 'react-router-dom';
import meatList from '../data/Meat-Shops.json'
import MeatItem from './MeatItem'




const Menu = () => {
    const { storeName } = useParams();
    const selectedRestaurantInfo = meatList.find((restaurant) => restaurant.urlParams === storeName);
    // useEffect(() => {
    //     console.log(selectedRestaurantInfo)

    // })
    return <div className="main-meats">
        <div>
            <h1>{selectedRestaurantInfo.domDisplayName}</h1>
            <h2>Main-Meats</h2>
        </div>
        <div className="meatItems-container">
            {selectedRestaurantInfo.main_meats.map((meat) => {
                console.log(meat);
                return <MeatItem meatItemInfo={meat} addOns={selectedRestaurantInfo.add_ons} selectRestaurantName={selectedRestaurantInfo.domDisplayName} openMeatItemModalTOrF={false} />
            })}
        </div>
    </div>
}

export default Menu;
