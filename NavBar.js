
const NavBar = () => {
    return <div className="navbar">
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
        <div className='deliver-or-pick-up'>

        </div>
        <div className='search-bar'>

        </div>
    </div>
}

export default NavBar
