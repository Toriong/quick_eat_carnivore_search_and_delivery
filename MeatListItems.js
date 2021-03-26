import React, { useEffect, useState } from "react"
import './index.css';




const MeatListItems = () => {
  const meatList = require('./Meat-Shops.json')

  return (
    <>
      <h1>Search Results</h1>
      {meatList.map((restaurant) => {
        return (
          <>
            <h1>{restaurant.store_name}</h1>
            <div>
              <h2>Meat Options</h2>
              {restaurant.main_meats.map((meat) => {
                if (meat.name && meat.price) {
                  return (
                    <div>
                      <h3>{meat.name}</h3>
                      <p>${meat.price}</p>
                    </div>
                  );
                } else if (meat.name && meat.options) {
                  return (
                    <div>
                      <h3>{meat.name}</h3>
                      {meat.options.map((option) => {
                        return (
                          <>
                            <h5>{option.name}</h5>
                            <p>${option.price}</p>
                          </>
                        )
                      })}
                    </div>
                  )
                }
              }
              )}
            </div>
            <div>
              <h2>Available Add-Ons</h2>
              {restaurant.add_ons.map((addOnsOptions) => {
                if (addOnsOptions.name && addOnsOptions.price && !addOnsOptions.options) {
                  return (
                    <>
                      <h3>{addOnsOptions.name}</h3>
                      <p>{addOnsOptions.price}</p>
                    </>
                  );
                } else if (addOnsOptions.name && addOnsOptions.price && addOnsOptions.options) {
                  return (
                    <>
                      <h3>{addOnsOptions.name}</h3>
                      <h5>Options: {addOnsOptions.options}</h5>
                      <p>{addOnsOptions.price}</p>
                    </>
                  );
                }
              })}
            </div>
          </>
        );
      })}
    </>
  );
}

export default MeatListItems;
