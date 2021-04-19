import React, { useState, useEffect, useContext } from 'react';
import { MeatInfoContext } from './MeatInfoProvider';
import SelectedMeatItemViewerToOrderModal from './SelectedMeatItemViewerToOrderModal'
import 'font-awesome/css/font-awesome.min.css'




const MeatItemDisplayOnMenu = ({ meatItemInfo, addOns, restaurantName, isMainMeatsMenuDisplayedOnDom, meatItemModalWasOpenedFromSearchContainer }) => {
    const { confirmedPriceTotal, confirmedQuantityOfOrder, confirmedNameOfRestaurantOfOrder, confirmedNameOfOrder } = useContext(MeatInfoContext);
    const [isAddOnMenuOpen, setIsAddOnMenuOpen] = useState(false);
    const [isMeatItemModalOpen, setIsMeatItemModalOpen] = useState(false);
    const [hasOrderTotalIncreased, setHasOrderTotalIncreased] = useState(false);
    const [orderTotal, setOrderTotal] = useState(meatItemInfo.price);
    let [mainMeatCount, setMainMetCount] = useState(1);
    const [isMeatModalOpenFromSearchContainer, setIsMeatModalOpenFromSearchContainer] = useState(false);
    const [confirmedCount, setConfirmedCount] = confirmedQuantityOfOrder;
    const [confirmedOrderPriceTotal, setConfirmedOrderPriceTotal] = confirmedPriceTotal;
    const [restaurantOfOrderConfirmed, setRestaurantOfOrderConfirmed] = confirmedNameOfRestaurantOfOrder;
    const [nameOfOrder, setNameOfOrder] = confirmedNameOfOrder;
    // const [conditionToOpenMeatItemModal, setConditionToOpenMeatItemModal] = openMeatItemModalCondition;
    // const priceChange = (countIncrement) => {
    //     setMainMetCount(countIncrement);
    //     if (mainMeatCount === 0) {
    //         setMainMetCount(++mainMeatCount);
    //         return;
    //     }
    //     setOrderTotal(mainMeatCount * meatItemInfo.price);
    //     if (orderTotal === meatItemInfo.price) {
    //         setHasOrderTotalIncreased(!hasOrderTotalIncreased);
    //     } else if (orderTotal > meatItemInfo.price) {
    //         setHasOrderTotalIncreased(!hasOrderTotalIncreased);
    //     }
    // }
    // const confirmedOrder = () => {
    //     setConfirmedOrderPriceTotal(orderTotal);
    //     setConfirmedCount(mainMeatCount);
    //     setRestaurantOfOrderConfirmed(selectRestaurantInfo.domDisplayName);
    //     setNameOfOrder(meatItemInfo.name)
    // };
    const cancelOrder = () => {
        setMainMetCount(1);
        setOrderTotal(meatItemInfo.price);
        setIsMeatItemModalOpen(false);
    }




    return isMeatItemModalOpen ? <>
        <div className="blocker" onClick={cancelOrder} />
        {isMainMeatsMenuDisplayedOnDom ? <div className="main-meats-menu-display">
            <div className="name-and-price-container">
                <h4>{meatItemInfo.name}</h4>
                <h6>${meatItemInfo.price}</h6>
            </div>
            <div className="main-meats-image">
                {meatItemInfo.image}
            </div>
        </div> : null}
        {/* meat item modal */}
        <SelectedMeatItemViewerToOrderModal meatItemInfo={meatItemInfo} restaurantName={restaurantName} addOns={addOns} />
    </>
        :
        meatItemModalWasOpenedFromSearchContainer ? null :
            <div className="main-meats-menu-display" onClick={() => { setIsMeatItemModalOpen(!isMeatItemModalOpen) }}>
                <div className="name-and-price-container">
                    <div className="meat-item-name-container">
                        <h4>{meatItemInfo.name}</h4>
                    </div>
                    <div className="meat-item-price-container">
                        <h6>${meatItemInfo.price}</h6>
                    </div>
                </div>
                <div className="main-meats-image">
                    {meatItemInfo.image}
                </div>
            </div>
}

export default MeatItemDisplayOnMenu;
