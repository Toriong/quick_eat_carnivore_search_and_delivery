import React, { useState, useEffect } from 'react'



const SelectedFoodItem = ({ infoAboutMeatItem }) => {
    useEffect(() => {
        console.log(infoAboutMeatItem);
    })
    return <div id="blocker">
        <div className="selected-food-container">
            {/* <div className="picture-container">
                <img src={pictureOfFood} alt={altPictureOfFood} />
            </div>
            <div className="food-title-container">
                <h1 id='name-of-food'>{nameOfFood}</h1>
            </div>
            <div className="quantity-and-add-to-cart-container">
                <div className="quantity-buttons-container">
                    <div className="add-button">

                    </div>
                    <div className="count" value="1" />
                    <div className="minus-button">

                    </div>
                </div>
                <div className="add-to-cart-button-button">
                    <div className="add-to-cart-button-container">
                        <div className="add-text">
                            <div>
                                Add
                            </div>
                            <div className="count" value="1" />
                            <div>
                                to cart
                            </div>
                        </div>
                        <div>
                            {priceOfFood}
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
}

export default SelectedFoodItem
