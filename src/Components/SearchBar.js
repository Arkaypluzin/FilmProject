import React,{useEffect, useState} from "react";
import LogoNetlfix from '../assets/netflix.png'
import { NavLink } from "react-router-dom";
import './SearchBar.css';

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
          <header>
            <NavLink to = {'/'}>
                <img src={LogoNetlfix} alt="Netflix" className="Header-logo" />
              </NavLink>
              
          <div class = "SearchBar">

              <input type="text" placeholder="search film" onChange={(event)=> setSearchValue(event.target.value)} />
              {userData.results && userData.results.map((items) =>  (
                  
                  <a href={`/page/${items.id}`} >
                      <h3>{items.title}</h3>
                  </a>
                  
              ))}
          </div>
          </header>
      )
  }
  

export default SearchBar;