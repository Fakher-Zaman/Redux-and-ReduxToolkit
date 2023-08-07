import React from 'react';
import { useState } from 'react';

const Theme = () => {
    const [color, setColor] = useState('white');
    return (
        <div>
            <input className='textbox' type='text' onClick={(e) => { setColor(e.target.value) }} />
            <button className='button' onClick={() => { }}>Change Text Color</button>
            <h1>{color}</h1>
        </div>
    )
}

export default Theme;