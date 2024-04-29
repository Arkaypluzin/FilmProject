import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Compteur = () => {
    const[number, setNumber] = useState(0)

    return(
        <div>
            <button onClick={() => setNumber(number + 1)}>+</button> 
            <button onClick={() => setNumber(number - 1)}>-</button> 
            <h1>{number}</h1>
            <NavLink to="/ToDoList">TOUdo</NavLink>
        </div>
    ) 
}

export default Compteur;