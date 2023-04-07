import React from 'react';
import './Cart.css'

const Cart = ({ cart, handelRemoveFormCart }) => {
    // console.log(cart);
    let massage;
    if (cart.length === 0) {
        massage = <p>Please add some products</p>
    }
    let color;
    if(cart.length === 1 ){
        color = 'green';
    }else if (cart.length === 2) {
        color = 'yellow';
    }else if(cart.length === 3) {
        color = 'blue';
    }else if(cart.length === 4) {
        color = 'orange';
    }else {
        color = 'purple';
    }
        return (
            <div>
                <h3 className={cart.length > 0 ? 'green': 'red'}>Order Summary: {cart.length}</h3>
                {cart.length > 2 ? <span>Buy More</span> : <span>Add Products</span>}
                {massage}
                {
                    cart.map(tshart => <p key={tshart.id}>{tshart.name} <button onClick={() => handelRemoveFormCart(tshart._id)}>X</button> { } </p>)
                }
                {cart.length > 4 && <span>Use Coupon: DIS50 for 50% Discount: </span>}
                {
                    cart.length > 4 || <p>You are not eligable for 50% discount</p>
                }
            </div>
        );
};

export default Cart;