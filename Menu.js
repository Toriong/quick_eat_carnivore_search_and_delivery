
import React from 'react';
import { useParams } from 'react-router-dom';
import meatList from './Meat-Shops.json'
import './navBar.css';



const Menu = () => {
    const { storeName } = useParams();
    const selectedRestaurantInfo = meatList.find((restaurant) => restaurant.urlParams === storeName);
    return <>
        <div>
            <h2>Main-Meats</h2>
        </div>
        {selectedRestaurantInfo.main_meats.map((meat) => {
            if (!meat.options) {
                return <div className="main-meats-container">
                    <div className="name-and-price-container">
                        <h4>{meat.name}</h4>
                        <h6>${meat.price}</h6>
                    </div>
                    <div className="main-meats-image">
                        {meat.image}
                    </div>
                </div>
            } else if (meat.options) {
                return <div className="main-meats-container">
                    <h4>{meat.name}</h4>
                    <div className="name-and-price-container">
                        {meat.options.map((meatOption) => {
                            return <div className="main-meats-container">
                                <div className="name-and-price-container">
                                    <h4>{meatOption.name}</h4>
                                    <h6>${meatOption.price}</h6>
                                </div>
                                <div className="main-meats-image">
                                    {meatOption.image}
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="main-meats-image">
                        {meat.image}
                    </div>
                </div>
            }
        })}
        <div>
            <h2>Add-Ons</h2>
        </div>
        {selectedRestaurantInfo.add_ons.map((addOn) => {
            if (!addOn.options) {
                return (

                    <div>
                        <div>
                            <h4>{addOn.name}</h4>
                            <h6>${addOn.price}</h6>
                        </div>
                        <div>
                            {addOn.image}
                        </div>
                    </div>
                )
            } else if (addOn.options) {

            }
        })}

    </>
}

export default Menu;
