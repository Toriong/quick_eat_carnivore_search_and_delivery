import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MeatList from '../data/Meat-Shops.json'


const SearchResults = ({ searchInput }) => {
    // const searchResultsArray = MeatList.filter((restaurant) => restaurant.domDisplayName.toLowerCase().includes(searchInput));
    let searchResultsArray = []
    MeatList.forEach((restaurant) => {
        restaurant.domDisplayName.toLowerCase().includes(searchInput) ? searchResultsArray.push(<Link to={`/menu/${restaurant.urlParams}`}><div className="results-container-restaurants">{restaurant.domDisplayName}</div></Link>) : <>{null}</>
        restaurant.main_meats.map((meat) => {
            meat.name.toLowerCase().includes(searchInput) ? searchResultsArray.push(<Link to={`/menu/${restaurant.urlParams}`}><div className="results-container-meat-item">{meat.name}</div></Link>) : <>{null}</>
        });
        restaurant.add_ons.map((addOn) => {
            addOn.name.toLowerCase().includes(searchInput) ? searchResultsArray.push(
                <Link to={`/menu/${restaurant.urlParams}`}>
                    <div className="results-container-addOn-item">
                        Add {addOn.name}
                    </div>
                </Link>) : <>{null}</>
        });
        restaurant.main_meats.forEach((meat) => {
            // console.log(meat.genericNames)
            meat.genericNames.forEach((name) => {
                name.includes(searchInput) ?
                    searchResultsArray.push(
                        <div className="results-container-generic-names">
                            {meat.name}
                        </div>)
                    : <>{null}</>
            })
        })
    })
    return <>
        {searchInput.length > 0 ? <div>Results for: "{searchInput}"</div> : <div>Results for: </div>}
        <div>
            {searchResultsArray.length > 0 ?
                searchResultsArray :
                <div>
                    Zero Results for "{searchInput}"
                </div>
            }
        </div>
    </>

}

export default SearchResults