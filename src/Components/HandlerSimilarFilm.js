import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PrintPictures from "./PrintPictures"




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
        <div>
            {userSimilar.results && userSimilar.results.map((items)=>( 
            <p key={items.id}>
                    <a href={`http://localhost:3000/page/${items.id}`}>{<PrintPictures info={items.poster_path}/>}
                        <h2>{items.title}</h2></a>
            </p>
          ))}
        </div>
    )
}

export default HandlerSimilarFilm;




