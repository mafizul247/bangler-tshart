import React from 'react';
import './Tshart.css'

const Tshart = ({ tshart, handelAddToCart }) => {
    // console.log(tshart);
    const { picture, name, price } = tshart;

    return (
        <div className='t-shart'>
            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => handelAddToCart(tshart)}>Buy Now</button>
        </div>
    );
};

export default Tshart;