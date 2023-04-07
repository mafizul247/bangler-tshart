import React, { createContext, useState } from 'react';
import Fahter from '../Father/Fahter';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'
export const RingContext = createContext('Gold');
export const MoneyContext = createContext(0);
const Grandpa = () => {
    const ring = 'Daimond';
    const [money, setMoney] = useState(0)
    return (
        <div className='grandpa'>
            <h1>Grandpa</h1>
            <p><small>Granpa Money: {money}</small></p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='Goldren Ring'>
                    <section className='flex'>
                        <Fahter ring={ring}></Fahter>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;