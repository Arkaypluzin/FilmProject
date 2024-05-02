import React,{useEffect, useState} from "react";
import PrintPictures from "./PrintPictures";
import { NavLink } from "react-router-dom";

const SearchBar = () => {
    
    
    const [searchValue, setSearchValue] = useState('')
    
    const [userData, setUserData] = useState('')
    
    const url = `https://api.themoviedb.org/3/search/movie?api_key=9fdb6f1a8bdb08f927d4a129f067516a&query=${searchValue}`
    const getData = async (url) => {
    const rawData = await fetch(url)
    const jsonData = await rawData.json()
    setUserData(jsonData)
  }
useEffect(()=>{
    getData(url)
  },[searchValue])


    return (
        <div>
            
            <input type="text" placeholder="write here" onChange={(event)=> setSearchValue(event.target.value)} />
            {userData.results && userData.results.map((items) =>  (
                <NavLink to={`page/${items.id}`}>
                    
                    <h2>{items.title}</h2>
                </NavLink>
            ))}
        </div>
    )
}

export default SearchBar;