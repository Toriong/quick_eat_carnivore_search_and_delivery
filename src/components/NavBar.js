import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MeatInfoContext } from './MeatInfoProvider';
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter } from 'react-router-dom';





const NavBar = () => {
    const { confirmedPriceTotal, confirmedQuantityOfOrder, confirmedNameOfRestaurantOfOrder, confirmedNameOfOrder } = useContext(MeatInfoContext);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [confirmedQuantity,] = confirmedQuantityOfOrder;
    const [confirmedOrderPrice,] = confirmedPriceTotal;
    const [nameOfRestaurant, setNameOfRestaurant] = confirmedNameOfRestaurantOfOrder;
    const [nameOfOrder, setNameOfOrder] = confirmedNameOfOrder;
    const [changeQuantityOfOrder, setChangeQuantityOfOrder] = useState(confirmedQuantity)
    const [isSideNavBarOpen, setIsSideNavBarOpen] = useState(false);
    const editQuantityNum = (event) => {
        let value = event.target.value;
        setChangeQuantityOfOrder(value);
    }
    // const quantityNumOptions = [];
    // for (let num = 1; num <= 99; num++) {
    //     quantityNumOptions.push(<option value={num}>{num}</option>)
    // }
    // setChangeQuantityOfOrder(confirmedQuantity);
    useEffect(() => {
        console.log(confirmedQuantity);
        console.log(changeQuantityOfOrder)
    })
    const openSideNavBar = () => {
        console.log('open side navbar')
        setIsSideNavBarOpen(!isSideNavBarOpen)
    }
    return <>
        {isSideNavBarOpen ?
            <>
                <div className="blocker" onClick={() => { setIsSideNavBarOpen(!isSideNavBarOpen) }} />
                <div className="side-navbar">
                    <div className="title-container">
                        <h1>Quick Carnivore Eats</h1>
                    </div>
                    <div className="sideBar-menu-container">
                        <div className="home-link">
                            <Link to="/" onClick={() => { setIsSideNavBarOpen(!isSideNavBarOpen) }}>
                                HOME/SEARCH RESULTS
                            </Link>
                        </div>
                        <div className="favorites-link-container">
                            <Link to="/favorites" onClick={() => { setIsSideNavBarOpen(!isSideNavBarOpen) }}>
                                FAVORITES
                            </Link>
                        </div>
                        <div className="about-link-container">
                            <Link to="/about" onClick={() => { setIsSideNavBarOpen(!isSideNavBarOpen) }}>
                                ABOUT
                            </Link>
                        </div>
                        <div className="policy-link-container">
                            <Link to="/policy" onClick={() => { setIsSideNavBarOpen(!isSideNavBarOpen) }}>
                                POLICY
                            </Link>
                        </div>
                    </div>
                </div>
            </>
            :
            <div className="hide-side-navbar">

            </div>

        }
        <div className="unfixed-wrapper">
            <div className="navbar">
                <div className="hamburger-menu-container">
                    <div className="hamburger-menu-icon" onClick={() => { setIsSideNavBarOpen(!isSideNavBarOpen) }}>
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
                    <div id="cart" onClick={() => { setIsCartOpen(!isCartOpen) }}>
                        <div className="cart-icon">
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </div>
                        <div id="cart-text">
                            Cart:
                    </div>
                        {confirmedQuantity > 0 ?
                            <div id="number-of-items">
                                {confirmedQuantity}
                            </div>
                            :
                            <div id="number-of-items">
                                0
                        </div>
                        }
                    </div>
                    {isCartOpen ?
                        <div className="cart-modal">
                            <div className="your-order-container">
                                <h1>Your Order</h1>
                            </div>
                            <div className="confirmed-restaurant-of-order-container">
                                <h6>From {nameOfRestaurant}</h6>
                            </div>
                            <div className="order-name-edit-button-quantity-container">
                                <div className="edit-button">
                                    EDIT
                            </div>
                                <div className="quantity-container">
                                    {confirmedQuantity}
                                </div>
                                <div className="name-of-order">
                                    <h4>{nameOfOrder}</h4>
                                </div>
                                <div className="price-of-item">
                                    <p>${confirmedOrderPrice}</p>
                                </div>
                            </div>
                            <div className="proceed-to-checkout-button-container">
                                <div className="checkout-button">
                                    <div className="quantity-confirmed">
                                        <p>{confirmedQuantity}</p>
                                    </div>
                                    <div className="checkout-button-text">
                                        Proceed to Checkout
                                </div>
                                    <div className="total-price">
                                        <p>${confirmedOrderPrice}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    </>
}

export default NavBar
