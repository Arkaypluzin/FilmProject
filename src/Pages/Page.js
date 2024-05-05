import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
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
           
            <div className="Div-pictures">
              <span className="pictures-background"><img className="background-image" src={`https://image.tmdb.org/t/p/w500/${userData.backdrop_path}`} alt=""/></span>
              <div class ="film-description">
                
                <p className="description-title">{userData.title}</p>
                <p className="description-date"> {userData.release_date}</p>
              
                
                <p className="description-categories">Categories</p>
                <span className="description-genres">
                  {userData.genres && userData.genres.map((items,index)=>(
                  
                    <p className="description-name">  {items.name} </p>)
                  )}
                </span>
                
                
                <div className="description-evaluation">
                  <p className="evaluation-title">Evaluation </p>
                  <p className="evaluation-info">{userData.vote_average}/10</p>
                </div>
                
                
                <p className="description-overview">{userData.overview}</p>
             
                
             
              </div>
              
            </div>

            <div className="div">
              <h2 className="div-title">Films suggestions</h2>
                <HandlerSimilarFilm info={{id}}/>
            </div>
            


            
        </div>
    )
}

export default Page;