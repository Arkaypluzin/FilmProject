import React, {useState, useEffect} from "react";



const Home = () => {
    const [userData, setUserdata] = useState('')
    const url = "https://api.themoviedb.org/3/movie/157336?api_key=9fdb6f1a8bdb08f927d4a129f067516a"
    const getData = async (url) => {
    const rawData = await fetch(url)
    const jsonData = await rawData.json()
    setUserdata(jsonData)
  }
useEffect(()=>{
    getData(url)
  },[])

    return(
        <div>
            <p>home page</p>
            {userData.original_title}
            {userData.genres}
        </div>
    )
}

export default Home;