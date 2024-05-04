import React, {useEffect, useState} from "react";
import { NavLink, useParams } from "react-router-dom";
import HandlerSimilarFilm from "../Components/HandlerSimilarFilm";
import SearchBar from "../Components/SearchBar";
import './page.css';

const Page = () => {
    const {id} = useParams();

    const [userData, setUserData] = useState('')
    
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=9fdb6f1a8bdb08f927d4a129f067516a`
    const getData = async (url) => {
    const rawData = await fetch(url)
    const jsonData = await rawData.json()
    setUserData(jsonData)
  }
useEffect(()=>{
    getData(url)
  },[id])

  
  


  

    return(
        <div>
            <SearchBar/>
           
            <div className="div-pictures">
              <div class ="film-description">
                <div className="description-header">
                  <h1 className="header-title">{userData.title}</h1>
                  <h2>Date :</h2>
                  <p className="header-date"> {userData.release_date}</p>
                </div>
                <br />
                <h2>Categories :</h2>
                {userData.genres && userData.genres.map((items,index)=>(
                  
                  <p className="header-genres">  {items.name} </p>)   
                )}
                
                <br />
                <div className="header-evaluation">
                  <h2 className="evaluation-title">Evaluation : </h2>
                  <p className="evaluation-info">{userData.vote_average}/10</p>
                </div>
                <br />
                <h2 >Overview : </h2>
                <p className="header-overview">{userData.overview}</p>
                <br />
                
                <br />
              </div>
              <div>
                <img className="pictures-poster" src={`https://image.tmdb.org/t/p/w500/${userData.poster_path}`} alt=""/>
              </div>
              
            </div>
            <h2>Films suggestion</h2>
              <HandlerSimilarFilm info={{id}}/>
            


            
        </div>
    )
}

export default Page;