import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import meatList from '../data/Meat-Shops.json'
import MeatItem from './MeatItem'




const Menu = () => {
    const { storeName } = useParams();
    const selectedRestaurantInfo = meatList.find((restaurant) => restaurant.urlParams === storeName);




    return <>
        <div className="main-meats">
            <div>
                <h2>Main-Meats</h2>
            </div>
            {selectedRestaurantInfo.main_meats.map((meat) => {
                return <MeatItem meatItemInfo={meat} addOns={selectedRestaurantInfo.add_ons} />
            })}
        </div>
    </>
}

export default Menu;
