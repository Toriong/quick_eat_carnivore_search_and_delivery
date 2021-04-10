import React, { useEffect } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import meatList from '../data/Meat-Shops.json'


const Restaurants = () => {
  return <div className="restaurants-list-container">
    {meatList.map((restaurant) => {
      return <Link to={`/menu/${restaurant.urlParams}`}>
        <div className="restaurant-container">
          <div className="image-container">
            <img src={restaurant.image} alt={restaurant.alt} />
          </div>
          <div className="info-container">
            <h5>{restaurant.domDisplayName}</h5>
          </div>
        </div>
      </Link>
    })
    }
  </div>
}
// </Link >


export default Restaurants;
