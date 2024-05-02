import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import PrintPictures from "./Components/PrintPictures";
import HandlerSimilarFilm from "./Components/HandlerSimilarFilm";
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
          
          
          
          <p> {userData.original_title} </p>
           
          <h1>popular movies</h1>
          {userData.results && userData.results.map((items) =>  (

            <a key={items.id}>
              <NavLink to={`page/${items.id}`}>
                <PrintPictures info={items.poster_path}/>
                <h2>{items.title}</h2>
               
              </NavLink>
            </a>
              
         ))}
         
      
         
        
        </div>
    )

    
}

export default Home;