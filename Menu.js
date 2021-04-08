import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import meatList from './Meat-Shops.json'
import SelectedFoodItem from './SelectedFoodItem'
import './navBar.css';



const Menu = () => {
    const { storeName } = useParams();
    const selectedRestaurantInfo = meatList.find((restaurant) => restaurant.urlParams === storeName);
    const [isSelectedFoodItemModalOpen, setIsSelectedFoodItemModalOpen] = useState(false);
    const [selectedFoodItem, setSelectedFoodItem] = useState('');
    const openFoodItemModal = (event) => {
        setIsSelectedFoodItemModalOpen(!isSelectedFoodItemModalOpen);
        const value = event.target.value;
        console.log(value);
    }

    useEffect(() => {
        if (isSelectedFoodItemModalOpen) {
            console.log("modal is open")
        } else {
            console.log("modal is closed")
        }
    })
    return <>
        <div className="main-meats">
            <div>
                <h2>Main-Meats</h2>
            </div>
            {selectedRestaurantInfo.main_meats.map((meat) => {
                if (!meat.options) {
                    return <div className="main-meats-container" value={meat.name} onClick={openFoodItemModal}>
                        <div className="name-and-price-container">
                            <h4>{meat.name}</h4>
                            <h6>${meat.price}</h6>
                            {/* insert SelectedFoodItem component here. It will take in meat.name, meat.price, meat.image, and meat.alt. It will be exectuted when isSelectedFoodItemModalOpen is true */}
                            {isSelectedFoodItemModalOpen && <SelectedFoodItem infoAboutMeatItem={meat.name} />}
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
        </div>
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
