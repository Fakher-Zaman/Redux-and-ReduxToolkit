import React from 'react';
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button className='button' aria-label='Decrement value' onClick={() => { setCount(count - 1) }}> - </button>
            <button className='button' aria-label='Increment value' onClick={() => { setCount(count + 1) }}> + </button>
        </div>
    )
}

export default Counter;