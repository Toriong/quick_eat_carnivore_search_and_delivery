import React, { useEffect, useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { MeatInfoContext } from './MeatInfoProvider'

const AddOnItem = ({ addOnItem, mainMeatCount, setOrderTotal, meatItemInfoPrice, orderTotal }) => {
    const { listOfSelectedAddOnPrices } = useContext(MeatInfoContext);

    const [boxClicked, setBoxClicked] = useState(false);

    const [selectedAddOnPrices, setSelectedAddOnPrices] = listOfSelectedAddOnPrices;

    const addSelectedAddOnPriceToOrderTotal = () => {
        setSelectedAddOnPrices([...selectedAddOnPrices, addOnItem.price]);
        console.log(selectedAddOnPrices);
        setBoxClicked(!boxClicked);
    }

    useEffect(() => {
        console.log(selectedAddOnPrices);
        if (boxClicked === true) {
            setOrderTotal((mainMeatCount * meatItemInfoPrice) + (selectedAddOnPrices.reduce((priceA, priceB) => priceA + priceB) * mainMeatCount));
        }
    })

    return <div className="add-on">
        <div className="check-container">
            {boxClicked ?
                <FontAwesomeIcon icon={faCheckSquare} />
                :
                <FontAwesomeIcon icon={faSquare} onClick={addSelectedAddOnPriceToOrderTotal} />
            }
        </div>
        <div className="add-on-name">
            <h1>{addOnItem.name}</h1>
        </div>
        <div>
            +{addOnItem.price}
        </div>
    </div>
}

export default AddOnItem
