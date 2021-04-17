import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { MeatInfoContext } from './MeatInfoProvider'
import MeatList from '../data/Meat-Shops.json'
import MeatItem from './MeatItem'
import 'font-awesome/css/font-awesome.min.css'


const SearchResults = ({ searchInput }) => {
    // const searchResultsArray = MeatList.filter((restaurant) => restaurant.domDisplayName.toLowerCase().includes(searchInput));
    const { openResultsContainer } = useContext(MeatInfoContext);
    const [isSearchResultsContainerOpen, setIsSearchResultsContainerOpen] = openResultsContainer;
    let searchResultsArray = [];
    const [isOrderThisItemOrGoToRestaurantModalOpen, setIsOrderThisItemOrGoToRestaurantModalOpen] = useState(false);
    const [selectedMeatItemAndRestaurantName, setSelectedMeatItemAndRestaurantName] = useState('');
    const [isMeatItemModalOpen, setIsMeatItemModalOpen] = useState(false);
    const [selectedMeatInfoObject, setSelectedMeatInfoObject] = useState('')
    useEffect(() => {
        console.log(selectedMeatInfoObject);
    })
    MeatList.forEach((restaurant) => {
        restaurant.domDisplayName.toLowerCase().includes(searchInput.toLowerCase()) ? searchResultsArray.push(
            <Link to={`/menu/${restaurant.urlParams}`}>
                <div className="results-container">
                    {/* place logo here */}
                    <div className="results-container-restaurants">
                        {restaurant.domDisplayName}
                    </div>
                    <div className="right-side-arrow">
                        <i class="fa fa-angle-right" aria-hidden="true" />
                    </div>
                </div>
            </Link>) : <>{null}</>
        // if the user searches for a particular meat name
        restaurant.main_meats.forEach((meat) => {
            meat.name.toLowerCase().includes(searchInput.toLowerCase()) ? searchResultsArray.push(
                // <Link to={`/menu/${restaurant.urlParams}`}>
                <div className="results-container" onClick={() => {
                    <MeatItem meatItemInfo={meat} addOns={restaurant.add_ons} restaurantName={restaurant.domDisplayName} userIsOrderingFromSearchBarTOrF={true} />
                    setIsOrderThisItemOrGoToRestaurantModalOpen(true)
                    // setSelectedMeatItemAndRestaurantName([restaurant.domDisplayName, restaurant.urlParams, restaurant.add_ons, meat, meat.name])
                    setSelectedMeatItemAndRestaurantName({
                        meatItemInfo: meat,
                        nameOfRestaurant: restaurant.domDisplayName,
                        restaurantUrlParam: restaurant.urlParams,
                        addOns: restaurant.add_ons,
                        nameOfMeatItem: meat.name
                    })
                }}>
                    <div className="search-symbol-container">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </div>
                    <div className="search-meat-info-container">
                        <div className="meat-name-container">
                            {meat.name}
                        </div>
                        <div className="restaurant-name-container">
                            {restaurant.domDisplayName}
                        </div>
                    </div>
                    <div className="right-side-arrow">
                        <i class="fa fa-angle-right" aria-hidden="true" />
                    </div>
                </div>
                /* </Link> */
            )
                : <>{null}</>
        });
        // if the user searches for an add-on:
        restaurant.main_meats.forEach((meat) => {
            restaurant.add_ons.forEach((addOn) => {
                addOn.name.toLowerCase().includes(searchInput.toLowerCase()) ?
                    searchResultsArray.push(
                        <Link to={`/menu/${restaurant.urlParams}`}>
                            <div className="results-container">
                                <div className="search-symbol-container">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </div>
                                <div className="search-meat-info-container">
                                    <div className="add-on-name-container">
                                        Add "{addOn.name}" to:
                                    </div>
                                    <div className="meat-name-container">
                                        {meat.name}
                                    </div>
                                </div>
                                <div className="right-side-arrow">
                                    <i class="fa fa-angle-right" aria-hidden="true" />
                                </div>
                            </div>
                        </Link>)
                    : <>{null}</>
            })
        });

        // if the user types in a generic name
        restaurant.main_meats.forEach((meat) => {
            // check for the existence of the 'genericNames' keyvalue pair
            if (meat.genericNames === undefined) { }
            else if (meat.genericNames !== undefined) {
                meat.genericNames.forEach((name) => {
                    name.toLowerCase().includes(searchInput.toLowerCase()) ?
                        searchResultsArray.push(
                            <Link to={`/menu/${restaurant.urlParams}`}>
                                <div className="results-container">
                                    <div className="search-symbol-container">
                                        <i class="fa fa-search" aria-hidden="true" />
                                    </div>
                                    <div className="search-meat-info-container">
                                        <div className="meat-name-container">
                                            {meat.name}
                                        </div>
                                        <div className="restaurant-name-container">
                                            {restaurant.domDisplayName}
                                        </div>
                                    </div>
                                    <div className="right-side-arrow">
                                        <i class="fa fa-angle-right" aria-hidden="true" />
                                    </div>
                                </div>
                            </Link>
                        )
                        : <>{null}</>
                })
            }
        })
    })


    useEffect(() => {
        console.log("meat info prop", selectedMeatItemAndRestaurantName[4])
        console.log("isMeatItemModalOpen: ", isMeatItemModalOpen)
    })

    return <div>
        {searchInput.length === 0 ?
            null
            :
            searchResultsArray.length !== 0 ?
                <>
                    {isOrderThisItemOrGoToRestaurantModalOpen ?
                        <div className="isOrderThisItemOrGoToRestaurantModal-modal">
                            <div className="isOrderThisItemOrGoToRestaurantModal-title">
                                <h4>Order the {selectedMeatItemAndRestaurantName.meatItemInfo.name} from {selectedMeatItemAndRestaurantName.nameOfRestaurant} or view all available meats from {selectedMeatItemAndRestaurantName.nameOfRestaurant} ?</h4>
                            </div>
                            <div className="isOrderThisItemOrGoToRestaurantModal-order-button" onClick={() => {
                                setIsMeatItemModalOpen(true)
                                // setIsSearchResultsContainerOpen(false)
                                // getMeatInfo()
                            }}>
                                Order {selectedMeatItemAndRestaurantName.meatItemInfo.name}
                            </div>
                            {isMeatItemModalOpen ?
                                <MeatItem meatItemInfo={selectedMeatItemAndRestaurantName.meatItemInfo} addOns={selectedMeatItemAndRestaurantName.addOns} restaurantName={selectedMeatItemAndRestaurantName.nameOfRestaurant} openMeatItemModalTOrF={true} /> : null}
                            <Link to={`/menu/${selectedMeatItemAndRestaurantName.urlParams}`} onClick={() => {
                                setIsOrderThisItemOrGoToRestaurantModalOpen(false);
                                setIsSearchResultsContainerOpen(false);
                            }}>
                                View {selectedMeatItemAndRestaurantName.nameOfRestaurant}'s Menu
                            </Link>
                        </div>
                        :
                        null
                    }
                    {searchResultsArray}
                </>
                :
                <div>
                    Zero results related to: "{searchInput}"
                </div>

        }
    </div>
}

export default SearchResults