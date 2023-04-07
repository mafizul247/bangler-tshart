import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h3>Sister</h3>
            <p><small>Ring: {ring}</small></p>
        </div>
    );
};

export default Sister;