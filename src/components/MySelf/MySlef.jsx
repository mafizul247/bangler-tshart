import React from 'react';
import Special from '../Special/Special';

const MySlef = ({ring}) => {
    return (
        <div>
            <h3>MySelf</h3>
            <section>
                <Special ring={ring}></Special>
            </section>
        </div>
    );
};

export default MySlef;