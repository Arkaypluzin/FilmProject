import React, { useState } from 'react';

const Input = ({ text }) => {
    const [valueText, setValueText] = useState('');
    return (
        <div>
            <input onChange={(event) => setValueText(event.target.value)} value={valueText}></input>
            <p>{valueText}</p>
        </div>
    );
};

export default Input;
