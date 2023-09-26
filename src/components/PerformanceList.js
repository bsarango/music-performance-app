import React, { useEffect } from "react";

function PerformanceList(){

    useEffect(()=>{
        fetch(`http://localhost:3000/songs`)
        .then(resp=>resp.json())
        .then(songs=>console.log("Fetched songs"))
    },[])

    return(
        <div>
            <h1>Song List</h1>
            <h2>Select a Song for additional info, notes, and cues</h2>
        </div>
    )
}

export default PerformanceList;