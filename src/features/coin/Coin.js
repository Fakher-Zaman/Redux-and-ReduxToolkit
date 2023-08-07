import React from 'react';
import { useSelector } from 'react-redux';

const Coin = () => {
    const count = useSelector((state) => state.counter.count);
    return (
        <span className='value'>Count: {count}</span>
    )
}

export default Coin;