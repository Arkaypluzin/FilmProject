import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./Components/SearchBar";
import './Components/Home.css';




const Home = () => {

  
    const [userData, setUserData] = useState('')
    
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=9fdb6f1a8bdb08f927d4a129f067516a"
    const getData = async (url) => {
    const rawData = await fetch(url)
    const jsonData = await rawData.json()
    setUserData(jsonData)
  }
useEffect(()=>{
    getData(url)
  },[])


    
    return(
        <div class = "Home">

          <SearchBar/>
          
        
           
          <h1>Popular movies</h1>
          <div className="slider-container">
            
            <div class="slider">
            
              {userData.results && userData.results.map((items) =>  (
            
                <a class="slide">    
                  <NavLink  to={`page/${items.id}`}>
                    <div className="slide-img">
                      <img src={`https://image.tmdb.org/t/p/w300/${items.poster_path}`}alt=""/>
                    </div>
                    <span className="slide-span">

                      <span className="span-header">
                        <p className="header-title">{items.title} </p>
                        <p className="header-date">Date : {items.release_date}</p>
                      </span>
                      <p className="span-scores"> Scores : {items.popularity} </p>
                      <p className="span-overview"style={{ maxHeight: "200px", overflowY: "auto" }}>Resume : {items.overview} <br /></p>
                      
                    </span>
                  </NavLink>
                </a>
               ))}
           
            
                    
            
              
             
            </div>
          </div>
      
         
        
        </div>
    )

    
}

export default Home;