import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./HandlerSimilarFilm.css";



const HandlerSimilarFilm = () => {
    const {id} = useParams();
    const [userSimilar, setUserSimilar] = useState('')
    
    const otherUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=9fdb6f1a8bdb08f927d4a129f067516a`
    const getSimilar = async (otherUrl) => {
    const rawData = await fetch(otherUrl)
    const jsonData = await rawData.json()
    setUserSimilar(jsonData)
}
    useEffect(()=>{
    getSimilar(otherUrl)
    },[])



    return (
        <div class="Slider">
            {userSimilar.results && userSimilar.results.map((items)=>( 
            <p>
                    <a href={`http://localhost:3000/page/${items.id}`}> 
                        <div className="slide-img">
                            <img src={`https://image.tmdb.org/t/p/w300/${items.poster_path}`}alt=""/>
                        </div> 
                        <span className="Slide-span">
                            
                            <span className="Span-header">
                                <p className="Header-title">{items.title} </p>
                                <p className="Header-date">Date : {items.release_date}</p>
                            </span>
                            <p className="Span-scores"> Scores : {items.popularity} </p>
                            <p className="Span-overview"style={{ maxHeight: "200px", overflowY: "auto" }}>Resume : {items.overview} <br /></p>
                            
                        </span>
                    </a>
            </p>
          ))}
        </div>
    )
}

export default HandlerSimilarFilm;




