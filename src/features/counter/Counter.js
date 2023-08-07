import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';
import Coin from '../coin/Coin';

function Counter() {
    const dispatch = useDispatch();
    return (
        <div>
            <button className='button' aria-label='Decrement value' onClick={() => { dispatch(decrement()) }}> - </button>
            <span className='value'><Coin /></span>
            <button className='button' aria-label='Increment value' onClick={() => { dispatch(increment()) }}> + </button>
        </div>
    )
}

export default Counter;