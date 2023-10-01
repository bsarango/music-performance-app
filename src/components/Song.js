import React from "react";

function Song({id, name,songKey,artist}){
    return(
        <div className="songContainer">
            <h1>{name}</h1>
            <h3>{songKey}</h3>
            <h3>{artist}</h3>
        </div>   
    )
}

export default Song