import React, { useState } from "react";

const CountButton = () => {
    const[number, setNumber] = useState(0)

    return(
        <div>
            <button onClick={() => setNumber(number + 1)}>+</button> 
            <button onClick={() => setNumber(number - 1)}>-</button> 
            <h1>{number}</h1> 
        </div>
    ) 
}

export default CountButton;