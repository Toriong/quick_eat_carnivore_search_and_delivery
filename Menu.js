import React from 'react'
import { useEffect } from 'react/cjs/react.development';

const Menu = () => {
    const meatList = require('./Meat-Shops.json');
    useEffect(() => {
        console.log(meatList);
    }, [])
    return (
        <div>
            {/* title of the Menu page */}
            <h1>Main Meats</h1>
            {meatList.map((restaurant) => {
                return (
                    restaurant.main_meats.map((meat) => {
                        return (
                            <div>
                                <h3>{meat.name}</h3>
                                <h4>{meat.price}</h4>
                                <div>
                                    <img src={meat.image} alt={meat.alt} />
                                </div>
                            </div>
                        );
                    })
                )
            })}

        </div>
    )
}

export default Menu
