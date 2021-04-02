import { BrowserRouter, Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';


// "react": "^17.0.2",
//   "react-dom": "^17.0.2",



const meatList = require('./Meat-Shops.json');
// research react-router


const Restaurants = () => {
  useEffect(() => {
    console.log(ReactDOM.version)
  })
  return meatList.map((restaurant) => {
    return (
      <div>
        <Link to={`/menu/${restaurant.urlParams}`}>
          <div className="restaurant-container">
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


    );
  })
}




export default Restaurants;
