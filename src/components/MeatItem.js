import React, { useState, useEffect, useContext } from 'react';
import { MeatInfoContext } from './MeatInfoProvider';
import 'font-awesome/css/font-awesome.min.css'




const MeatItem = ({ meatItemInfo, addOns, selectRestaurantName }) => {
    const { confirmedPriceTotal, confirmedQuantityOfOrder, confirmedNameOfRestaurantOfOrder, confirmedNameOfOrder } = useContext(MeatInfoContext);
    const [isAddOnMenuOpen, setIsAddOnMenuOpen] = useState(false);
    const [openSelectedMeatItemModal, setOpenSelectedMeatItemModal] = useState(false);
    const [hasOrderTotalIncreased, setHasOrderTotalIncreased] = useState(false);
    const [orderTotal, setOrderTotal] = useState(meatItemInfo.price);
    let [mainMeatCount, setCount] = useState(1);
    const [confirmedCount, setConfirmedCount] = confirmedQuantityOfOrder;
    const [confirmedOrderPriceTotal, setConfirmedOrderPriceTotal] = confirmedPriceTotal;
    const [restaurantOfOrderConfirmed, setRestaurantOfOrderConfirmed] = confirmedNameOfRestaurantOfOrder;
    const [nameOfOrder, setNameOfOrder] = confirmedNameOfOrder;
    const priceChange = (countIncrement) => {
        setCount(countIncrement);
        if (mainMeatCount === 0) {
            setCount(++mainMeatCount);
            return;
        }
        setOrderTotal(mainMeatCount * meatItemInfo.price);
        if (orderTotal === meatItemInfo.price) {
            setHasOrderTotalIncreased(!hasOrderTotalIncreased);
        } else if (orderTotal > meatItemInfo.price) {
            setHasOrderTotalIncreased(!hasOrderTotalIncreased);
        }
    }
    const confirmedOrder = () => {
        setConfirmedOrderPriceTotal(orderTotal);
        setConfirmedCount(mainMeatCount);
        setRestaurantOfOrderConfirmed(selectRestaurantName);
        setNameOfOrder(meatItemInfo.name)
    };
    const cancelOrder = () => {
        setCount(1);
        setOrderTotal(meatItemInfo.price);
        setOpenSelectedMeatItemModal(!openSelectedMeatItemModal);
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
        <div className="blocker" onClick={cancelOrder} />
        <div className="selected-food-container">
            <div className="picture-container">
                <img src={meatItemInfo.image} alt={meatItemInfo.alt} />
            </div>
            <div className="food-title-container">
                <div id="food-item-name">
                    <h1>{meatItemInfo.name}</h1>
                </div>
            </div>
            {isAddOnMenuOpen ?
                <>
                    <div className="add-on-container">
                        <div className="add-on-text-container">
                            <h2>Add-On:</h2>
                            <div className="arrow-container">
                                <i class="fa fa-angle-down" aria-hidden="true" onClick={() => { setIsAddOnMenuOpen(!isAddOnMenuOpen) }}></i>
                            </div>
                        </div>
                    </div>
                    <div className="add-ons-list-container">
                        {addOns.map((addOnItem) => {
                            return <div>

                            </div>
                        })}
                    </div>
                </>
                :
                <div className="add-on-container">
                    <div className="add-on-text-container">
                        <h2>Add-On:</h2>
                        <div className="arrow-container">
                            <i class="fa fa-angle-up" aria-hidden="true" onClick={() => { setIsAddOnMenuOpen(!isAddOnMenuOpen) }}></i>
                        </div>
                    </div>
                </div>
            }
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
                        <div className="plus-sign" onClick={() => { priceChange(++mainMeatCount) }}>
                            +
                        </div>
                        <div className="count">{mainMeatCount}</div>
                        <div className="minus-sign" onClick={() => { priceChange(--mainMeatCount) }}>
                            -
                        </div>
                    </div>
                    <div className="add-to-cart-button" onClick={confirmedOrder}>
                        <div className="add-option-text">
                            <div>
                                Add
                            </div>
                            <div className="count">{mainMeatCount}</div>
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
