import React, { useState } from 'react';
import { useParams } from 'react-router-dom'



const Menu = () => {
    const restaurant = useParams();
    console.log(restaurant);
    return (
        <div>
            <p>Hello world</p>
        </div>
    )
}

export default Menu;
