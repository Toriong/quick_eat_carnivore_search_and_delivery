import React, { useEffect, useState } from "react"
import RenderDOM from 'react';
import { Link, useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import './index.css';


// research react-router


const Restaurants = () => {
  const meatList = require('./Meat-Shops.json');

  return meatList.map((restaurant) => {
    return (
      <Link to={`/menu/${restaurant.store_name}`}>
        <div className="restaurant-container">
          <div className="image-container">
            <img src={restaurant.image} alt={restaurant.alt} />
          </div>
          <div className="info-container" >
            <h4>{restaurant.store_name}</h4>
            <h5>Pick-up</h5>
          </div>
        </div>
      </Link>

    );
  })
}

export default Restaurants;




