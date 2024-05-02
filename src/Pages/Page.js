import React, {useEffect, useState} from "react";
import { NavLink, useParams } from "react-router-dom";
import PrintPictures from "../Components/PrintPictures";
import HandlerSimilarFilm from "../Components/HandlerSimilarFilm";

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
  },[])

  
  


  

    return(
        <div>
            <p>page</p>
            {<PrintPictures  info={userData.poster_path} />}
            {<PrintPictures  info={userData.backdrop_path} />}

            {userData.genres && userData.genres.map((items,index)=>(
             <li key={index}>{items.name} </li>)   
            )}
            <br />
            {userData.overview}
            <br />
            {userData.vote_average}

            <HandlerSimilarFilm info={{id}}/>


            
        </div>
    )
}

export default Page;