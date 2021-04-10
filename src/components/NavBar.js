import React, { useEffect, useContext, useState } from 'react';
import { MeatInfoContext } from './MeatInfoProvider';
import 'font-awesome/css/font-awesome.min.css'





const NavBar = () => {
    const { confirmedPriceTotal, confirmedOrderNumTotal } = useContext(MeatInfoContext);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [confirmedOrderCount,] = confirmedOrderNumTotal;
    const [confirmedOrderPriceOfSelectedItem,] = confirmedPriceTotal;
    useEffect(() => {
        console.log("current cart order count", confirmedOrderCount);
    })
    return <div className="unfixed-wrapper">
        <div className="navbar">
            <div className="hamburger-menu-container">
                <div className="hamburger-menu-sub-container">
                    <div id="hamburger-line-1" className="hamburger-line"></div>
                    <div id="hamburger-line-2" className="hamburger-line"></div>
                    <div id="hamburger-line-3" className="hamburger-line"></div>
                </div>
            </div>
            <div className="logo-container">
                <div id="quick-text">
                    Quick
            </div>
                <div id="carnivore-text">
                    Carnivore
                </div>
                <div id="eats-text">
                    Eats
                </div>
            </div>
            <div className='deliver-or-pick-up-container'>
                <div className="deliver-or-pick-up-button">
                    <div id="pick-up">
                        Pick-up
                </div>
                    <div id="deliver">
                        Deliver
                </div>
                </div>
            </div>
            <div className='search-bar-container'>

                <div className="search-bar-sub-container">
                    <div id="search-icon-container">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </div>
                    <input type="text" className="search-input" />
                </div>
            </div>
            <div className="cart-container">
                <div id="cart">
                    <div className="cart-icon">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </div>
                    <div id="cart-text">
                        Cart:
                    </div>
                    {confirmedOrderCount > 0 ?
                        <div id="number-of-items" onClick={() => { setIsCartOpen(!isCartOpen) }}>
                            {confirmedOrderCount}
                        </div>

                        :
                        <div id="number-of-items" onClick={() => { setIsCartOpen(!isCartOpen) }}>
                            0
                        </div>
                    }
                </div>
                <div className="cart-modal">

                </div>
            </div>
        </div>
    </div>
}

export default NavBar
