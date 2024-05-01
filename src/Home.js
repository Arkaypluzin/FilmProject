import React, {useState, useEffect} from "react";




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
        <div>
          <p>home page</p>
          
          
          {/* Là je défini si userData.genres est défini ou non nul, s'il existe le .map est enclencher pour faire la 
          boucle en affichent tout le contenue*/}
          <p> {userData.original_title} </p>
           
          <h1>popular movie</h1>
          {userData.results && userData.results.map((items) =>  (

            <li key={items.id}>
              
              <a href={`http://localhost:3000/page/${items.id}`} ><img
                src={`https://image.tmdb.org/t/p/w300/${items.poster_path}`}
                alt={`${items.title} Poster`}/>
                <h2>{items.title}</h2>
              </a>
              
            </li>
              
         ))}
         
         
        
        </div>
    )

    
}

export default Home;