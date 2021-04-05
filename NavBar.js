import 'font-awesome/css/font-awesome.min.css'




const NavBar = () => {
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
                    <div id="number-of-items">
                        0
                </div>
                </div>
            </div>
        </div>
    </div>
}

export default NavBar
