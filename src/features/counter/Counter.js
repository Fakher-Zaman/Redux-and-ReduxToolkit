import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

function Counter() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <button className='button' aria-label='Decrement value' onClick={() => { dispatch(decrement()) }}> - </button>
            <span className='value'>Count: {count}</span>
            <button className='button' aria-label='Increment value' onClick={() => { dispatch(increment()) }}> + </button>

            <button className='button' onClick={() => { dispatch(incrementByAmount(10)) }}>Increment by 10</button>
        </div>
    )
}

export default Counter;