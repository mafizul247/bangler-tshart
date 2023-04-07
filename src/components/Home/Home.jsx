import React, { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Tshart from '../Tshart/Tshart';
import Cart from '../Cart/Cart';
import './Home.css'
import { toast } from 'react-hot-toast';
import swal from 'sweetalert';

const Home = () => {
    const tsharts = useLoaderData();
    const [cart, setCart] = useState([]);
    // console.log(tsharts);

    const handelAddToCart = (tshart) => {
        const exists = cart.find(ts => ts._id === tshart._id);
        if (exists) {
            toast('You have already add!');
            toast("Wow Its already add!")
            swal("Oops!", "You have already add!", "error");
        } else {
            const newCart = [...cart, tshart];
            setCart(newCart);
        }
    }

    const handelRemoveFormCart = (id) => {
        // console.log('Remove Item', id);
        const remainging = cart.filter(tshart => tshart._id !== id);
        setCart(remainging);
    }

    return (
        <div className='home-container'>
            <div className='tshart-container'>
                {
                    tsharts.map(tshart => <Tshart
                        key={tshart._id}
                        tshart={tshart}
                        handelAddToCart={handelAddToCart}
                    ></Tshart>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handelRemoveFormCart={handelRemoveFormCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;