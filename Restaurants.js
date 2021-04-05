import { BrowserRouter, Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';



// "react": "^17.0.2",
//   "react-dom": "^17.0.2",



const meatList = require('./Meat-Shops.json');


const Restaurants = () => {
  return <div className="homepage-wrapper">
    <div className="restaurants-results-container">
      {meatList.map((restaurant) => {
        return <div className="restaurant-container">
          <Link to={`/menu/${restaurant.urlParams}`} className="link-to-restaurant">
            <div className="image-and-info-parent-container">
              <div className="image-container">
                <img src={restaurant.image} alt={restaurant.alt} />
              </div>
              <div className="info-container" >
                <h4>{restaurant.domDisplayName}</h4>
                <h5>Pick-up</h5>
              </div>
            </div>
          </Link>
        </div>
      })}
    </div>
  </div>
}

// </Link >


export default Restaurants;
