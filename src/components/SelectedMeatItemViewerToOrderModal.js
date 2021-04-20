import React, { useContext, useState, useEffect } from 'react'
import { MeatInfoContext } from './MeatInfoProvider';
import AddOnItems from './AddOnItems'

const SelectedMeatItemViewerToOrderModal = ({ meatItemInfo, restaurantName, addOns }) => {
    const { confirmedPriceTotal, confirmedQuantityOfOrder, confirmedNameOfRestaurantOfOrder, confirmedNameOfOrder } = useContext(MeatInfoContext);
    let [mainMeatCount, setMainMeatCount] = useState(1);
    const [orderTotal, setOrderTotal] = useState(meatItemInfo.price);
    const [hasOrderTotalIncreased, setHasOrderTotalIncreased] = useState(false);
    const [addOnCount, setAddOnCount] = useState(0)
    // updated priceChange function:
    // WHAT I WANT: I want this function to take in as its parameter the updated price when the user presses on the plus button. 
    const priceChange = (countIncrement, meatItemPrice, count, equation, setCount) => {
        setCount(countIncrement);
        if (count === 0) {
            setCount(++count);
            return;
        }
        setOrderTotal(equation);
        if (orderTotal === meatItemPrice) {
            setHasOrderTotalIncreased(!hasOrderTotalIncreased);
        } else if (orderTotal > meatItemPrice) {
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

    useEffect(() => {
        console.log(orderTotal);
    })

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
                {/* <div className="add-ons-container"> */}
                <div className="add-ons-text-container">
                    <h2>Add-On:</h2>
                    <div className="arrow-container">
                        <i class="fa fa-angle-down" aria-hidden="true" onClick={() => { setIsAddOnMenuOpen(!isAddOnMenuOpen) }}></i>
                    </div>
                </div>
                {/* </div> */}
                <div className="add-ons-list-container">
                    {addOns.map((addOnItem) => {
                        return <AddOnItems addOnItem={addOnItem} orderTotal={orderTotal} setOrderTotal={setOrderTotal} mainMeatCount={mainMeatCount} />
                    })}
                </div>
            </>
            :
            /* <div className="add-ons-container"> */
            <div className="add-ons-text-container">
                <h2>Add-On:</h2>
                <div className="arrow-container">
                    <i class="fa fa-angle-up" aria-hidden="true" onClick={() => { setIsAddOnMenuOpen(!isAddOnMenuOpen) }}></i>
                </div>
            </div>
            /* </div> */
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
                    <div className="plus-sign" onClick={() => { priceChange(++mainMeatCount, meatItemInfo.price, mainMeatCount, mainMeatCount * meatItemInfo.price, setMainMeatCount) }}>
                        +
                    </div>
                    <div className="count">{mainMeatCount}</div>
                    <div className="minus-sign" onClick={() => { priceChange(--mainMeatCount, meatItemInfo.price, mainMeatCount, mainMeatCount * meatItemInfo.price, setMainMeatCount) }}>
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
