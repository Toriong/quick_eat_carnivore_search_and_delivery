import React, { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';


// research react-router



const Restaurants = () => {
  const meatList = require('./Meat-Shops.json');

  return meatList.map((restaurant) => {
    return (
      <Link to="/menu">
        <div className="restaurant-container">
          <div className="image-container">
            <img src={restaurant.image} alt={restaurant.alt} />
          </div>
          <div className="info-container">
            <h4>{restaurant.store_name}</h4>
            <h5>Pick-up</h5>
          </div>
        </div>
      </Link>



    );



  })
}
//   {meatList.map((restaurant) => {
//     return (
//       <>
//         <h1>{restaurant.store_name}</h1>
//         <div>
//           <h2>Meat Options</h2>
//           {restaurant.main_meats.map((meat) => {
//             if (meat.name && meat.price) {
//               return (
//                 <div>
//                   <h3>{meat.name}</h3>
//                   <p>${meat.price}</p>
//                 </div>
//               );
//             } else if (meat.name && meat.options) {
//               return (
//                 <div>
//                   <h3>{meat.name}</h3>
//                   {meat.options.map((option) => {
//                     return (
//                       <>
//                         <h5>{option.name}</h5>
//                         <p>${option.price}</p>
//                       </>
//                     )
//                   })}
//                 </div>
//               )
//             }
//           }
//           )}
//         </div>
//         <div>
//           <h2>Available Add-Ons</h2>
//           {restaurant.add_ons.map((addOnsOptions) => {
//             if (addOnsOptions.name && addOnsOptions.price && !addOnsOptions.options) {
//               return (
//                 <>
//                   <h3>{addOnsOptions.name}</h3>
//                   <p>{addOnsOptions.price}</p>
//                 </>
//               );
//             } else if (addOnsOptions.name && addOnsOptions.price && addOnsOptions.options) {
//               return (
//                 <>
//                   <h3>{addOnsOptions.name}</h3>
//                   <h5>Options: {addOnsOptions.options}</h5>
//                   <p>{addOnsOptions.price}</p>
//                 </>
//               );
//             }
//           })}
//         </div>
//       </>
//     );
//   })}
// </>



export default Restaurants;
