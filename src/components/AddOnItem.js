import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons'


const AddOnItem = ({ addOnItem, orderTotal, setOrderTotal, mainMeatCount }) => {
    const [uncheckedBoxClicked, setUncheckedBoxClicked] = useState(false)
    useEffect(() => {
        console.log(uncheckedBoxClicked);
    })
    const addAddOnPriceToTotalOrder = (equation) => {
        setUncheckedBoxClicked(!uncheckedBoxClicked);
        setOrderTotal(equation)
    }
    return <div className="add-on">
        <div className="check-container">
            {uncheckedBoxClicked ?
                <FontAwesomeIcon icon={faCheckSquare} onClick={() => { addAddOnPriceToTotalOrder(orderTotal - (mainMeatCount * addOnItem.price)) }} />
                :
                <FontAwesomeIcon icon={faSquare} onClick={() => { addAddOnPriceToTotalOrder(orderTotal + (mainMeatCount * addOnItem.price)) }} />
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
