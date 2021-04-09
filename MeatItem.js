import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css'




const MeatItem = ({ meatItemInfo, addOns }) => {
    const [openSelectedMeatItemModal, setOpenSelectedMeatItemModal] = useState(false);
    const [isAddOnMenuOpen, setIsAddOnMenuOpen] = useState(false);
    const [hasOrderTotalIncreased, setHasOrderTotalIncreased] = useState(false);
    const [orderTotal, setOrderTotal] = useState(meatItemInfo.price);
    let [count, setCount] = useState(1);
    const priceChange = (countIncrement) => {
        setCount(countIncrement);
        if (count === 0) {
            setCount(++count);
            return;
        }
        setOrderTotal(count * meatItemInfo.price);
        if (orderTotal === meatItemInfo.price) {
            setHasOrderTotalIncreased(!hasOrderTotalIncreased);
        } else if (orderTotal > meatItemInfo.price) {
            setHasOrderTotalIncreased(!hasOrderTotalIncreased);
        }
    }
    return openSelectedMeatItemModal ? <>
        <div className="main-meats-container">
            <div className="name-and-price-container">
                <h4>{meatItemInfo.name}</h4>
                <h6>${meatItemInfo.price}</h6>
            </div>
            <div className="main-meats-image">
                {meatItemInfo.image}
            </div>
        </div>
        <div id="blocker" onClick={() => { setOpenSelectedMeatItemModal(!openSelectedMeatItemModal) }} />
        <div className="selected-food-container">
            <div className="picture-container">
                <img src={meatItemInfo.image} alt={meatItemInfo.alt} />
            </div>
            <div className="food-title-container">
                <div id="food-item-name">
                    <h1>{meatItemInfo.name}</h1>
                </div>
            </div>
            <div className="add-on-container">
                {isAddOnMenuOpen ?
                    <div className="add-on-menu">
                        <div>
                            Add-On:
                            </div>
                        <div>
                            <i class="fa fa-angle-up" aria-hidden="true"></i>
                        </div>
                    </div>
                    :
                    <div className="add-on-menu-container">
                        <div className="add-on-text-container">
                            <h2>Add-On:</h2>
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                        </div>
                    </div>
                }
            </div>
            <div className="quantity-and-add-to-cart-container">
                <div className="quantity-buttons-container">
                    <div className="add-button">
                    </div>
                    <div className="count" value="1" />
                    <div className="minus-button">
                    </div>
                </div>
                <div className="add-to-cart-button-quauntity-button-container">
                    <div className="quantity-button-container">
                        <div className="plus-sign" onClick={() => { priceChange(++count) }}>
                            +
                            </div>
                        <div className="count">{count}</div>
                        <div className="minus-sign" onClick={() => { priceChange(--count) }}>
                            -
                        </div>
                    </div>
                    <div className="add-to-cart-button">
                        <div className="add-option-text">
                            <div>
                                Add
                                </div>
                            <div className="count">{count}</div>
                            <div>
                                to order
                                </div>
                            {orderTotal > meatItemInfo.price ?
                                <div>
                                    {orderTotal}
                                </div>
                                :
                                <div>
                                    {meatItemInfo.price}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
        :
        <div className="main-meats-container" onClick={() => { setOpenSelectedMeatItemModal(!openSelectedMeatItemModal) }}>
            <div className="name-and-price-container">
                <h4>{meatItemInfo.name}</h4>
                <h6>${meatItemInfo.price}</h6>
            </div>
            <div className="main-meats-image">
                {meatItemInfo.image}
            </div>
        </div>
}

export default MeatItem;
