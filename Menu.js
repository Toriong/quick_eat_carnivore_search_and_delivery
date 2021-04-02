import { useEffect } from 'react';
import { useParams } from 'react-router-dom'



let meatList = require('./Meat-Shops.json');
const Menu = () => {
    const { storeName } = useParams();
    useEffect(() => {
        console.log(storeName);
    })
    let urlString = window.location.href;
    let urlStringArray = urlString.split('/');
    let selectedRestaurant = urlStringArray[urlStringArray.length - 1];
    let selectedRestaurantInfo = meatList.find((restaurant) => restaurant.urlParams === selectedRestaurant);
    console.log(selectedRestaurantInfo.main_meats);
    console.log(selectedRestaurantInfo.add_ons);

    return <>
        <div>
            <h2>Main-Meats</h2>
        </div>
        {selectedRestaurantInfo.main_meats.map((meat) => {
            if (!meat.options) {
                return <div className="main-meats-container">
                    <div className="name-and-price-container">
                        <h4>{meat.name}</h4>
                        <h6>${meat.price}</h6>
                    </div>
                    <div className="main-meats-image">
                        {meat.image}
                    </div>
                </div>
            } else if (meat.options) {
                return <div className="main-meats-container">
                    <h4>{meat.name}</h4>
                    <div className="name-and-price-container">
                        {meat.options.map((meatOption) => {
                            return <div className="main-meats-container">
                                <div className="name-and-price-container">
                                    <h4>{meatOption.name}</h4>
                                    <h6>${meatOption.price}</h6>
                                </div>
                                <div className="main-meats-image">
                                    {meatOption.image}
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="main-meats-image">
                        {meat.image}
                    </div>
                </div>
            }
        })}
        <div>
            <h2>Add-Ons</h2>
        </div>
        {selectedRestaurantInfo.add_ons.map((addOn) => {
            if (!addOn.options) {
                return (

                    <div>
                        <div>
                            <h4>{addOn.name}</h4>
                            <h6>${addOn.price}</h6>
                        </div>
                        <div>
                            {addOn.image}
                        </div>
                    </div>
                )
            } else if (addOn.options) {

            }
        })}
        <p>hello</p>
    </>
}

export default Menu;
