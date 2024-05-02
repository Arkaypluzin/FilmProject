import React from "react";

const PrintPictures = ({info}) => {

    return(
        <div>
            <img
                src={`https://image.tmdb.org/t/p/w500/${info}`}
                alt=""/>
        </div>
    )
}

export default PrintPictures;