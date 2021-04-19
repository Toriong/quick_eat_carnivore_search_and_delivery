import React, { useContext, useState, useEffect } from 'react'
import { MeatInfoContext } from './MeatInfoProvider';

const SelectedMeatItemViewerToOrderModal = ({ meatItemInfo, restaurantName, addOns }) => {
    const { confirmedPriceTotal, confirmedQuantityOfOrder, confirmedNameOfRestaurantOfOrder, confirmedNameOfOrder } = useContext(MeatInfoContext);
    let [mainMeatCount, setMainMetCount] = useState(1);
    const [orderTotal, setOrderTotal] = useState(meatItemInfo.price);
    const [hasOrderTotalIncreased, setHasOrderTotalIncreased] = useState(false);
    const priceChange = (countIncrement) => {
        setMainMetCount(countIncrement);
        if (mainMeatCount === 0) {
            setMainMetCount(++mainMeatCount);
            return;
        }
        setOrderTotal(mainMeatCount * meatItemInfo.price);
        if (orderTotal === meatItemInfo.price) {
            setHasOrderTotalIncreased(!hasOrderTotalIncreased);
        } else if (orderTotal > meatItemInfo.price) {
            setHasOrderTotalIncreased(!hasOrderTotalIncreased);
        }
    }

    const [confirmedOrderPriceTotal, setConfirmedOrderPriceTotal] = confirmedPriceTotal;
    const [confirmedCount, setConfirmedCount] = confirmedQuantityOfOrder;
    const [restaurantOfOrderConfirmed, setRestaurantOfOrderConfirmed] = confirmedNameOfRestaurantOfOrder;
    const [nameOfOrder, setNameOfOrder] = confirmedNameOfOrder;

    const confirmedOrder = () => {
        setConfirmedOrderPriceTotal(orderTotal);
        setConfirmedCount(mainMeatCount);
        setRestaurantOfOrderConfirmed(restaurantName);
        setNameOfOrder(meatItemInfo.name)
    };


    const [isAddOnMenuOpen, setIsAddOnMenuOpen] = useState(false);



    return <div className="selected-food-modal">
        <div className="picture-container">
            <img src={meatItemInfo.image} alt={meatItemInfo.alt} />
        </div>
        <div className="food-title-container">
            <div id="food-item-name">
                <h1>{meatItemInfo.name}</h1>
                <h2>{restaurantName}</h2>
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
                            <h1>{addOnItem.name}</h1>
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
}

export default SelectedMeatItemViewerToOrderModal
