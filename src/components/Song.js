import React from "react";
import {Link} from "react-router-dom";

function Song({id, name, songKey, artist}){
    return(
        <div className="songContainer">
            <h1>{name}</h1>
            <h3>{songKey}</h3>
            <h3>{artist}</h3>
            <Link to={`/performanceList/${id}`}>{name}</Link>
        </div>   
    )
}

export default Song;