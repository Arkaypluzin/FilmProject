import React, {useEffect, useState} from "react";
import { NavLink, useParams } from "react-router-dom";
import PrintPictures from "../Components/PrintPictures";
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
            {<PrintPictures  info={userData.poster_path} />}
            {<PrintPictures  info={userData.backdrop_path} />}

            <div class ="film-description">
            {userData.title}
            <br />
            {userData.genres && userData.genres.map((items,index)=>(
             <p key={index}>{items.name} </p>)   
            )}
            {userData.release_date}
            <br />
            {userData.overview}
            <br />
            {userData.vote_average}
            <br />
            <h2>Films suggestion</h2>
            <HandlerSimilarFilm info={{id}}/>
            </div>


            
        </div>
    )
}

export default Page;