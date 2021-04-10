import React, { useState, useEffect, useContext } from 'react';
import { MeatInfoContext } from './MeatInfoProvider';
import 'font-awesome/css/font-awesome.min.css'




const MeatItem = ({ meatItemInfo, addOns }) => {
    const { confirmedPriceTotal, confirmedOrderNumTotal } = useContext(MeatInfoContext);
    const [isAddOnMenuOpen, setIsAddOnMenuOpen] = useState(false);
    const [openSelectedMeatItemModal, setOpenSelectedMeatItemModal] = useState(false);
    const [hasOrderTotalIncreased, setHasOrderTotalIncreased] = useState(false);
    const [orderTotal, setOrderTotal] = useState(meatItemInfo.price);
    let [count, setCount] = useState(1);
    const [confirmedCount, setConfirmedCount] = confirmedOrderNumTotal;
    const [confirmedOrderPriceTotal, setConfirmedOrderPriceTotal] = confirmedPriceTotal;
    useEffect(() => {
        console.log(count);
        console.log(orderTotal)
    })
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
    const confirmedOrder = () => {
        setConfirmedOrderPriceTotal(orderTotal);
        setConfirmedCount(count);
    };
    const cancelOrder = () => {
        setCount(1);
        setOrderTotal(meatItemInfo.price);
        setOpenSelectedMeatItemModal(!openSelectedMeatItemModal);
    }
    useEffect(() => {
        console.log("current count:", count);
        console.log("orderTotal variable", orderTotal)
    })
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
        <div id="blocker" onClick={cancelOrder} />
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
                    <div className="add-to-cart-button" onClick={confirmedOrder}>
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
