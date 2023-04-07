import React, { useContext } from 'react';
import MySlef from '../MySelf/MySlef';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
import { MoneyContext } from '../Grandpa/Grandpa';

const Fahter = ({ring}) => {
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h3>Father</h3>
            <p><small>Grandpa Money: {money}</small></p>
            <section className='flex'>
                <MySlef ring={ring}></MySlef>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Fahter;