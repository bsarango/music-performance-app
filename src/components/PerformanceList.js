import React, { useEffect, useState } from "react";
import Song from "./Song"

function PerformanceList(){

    const [songList, setSongList] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/songs`)
        .then(resp=>resp.json())
        .then(songs=>setSongList(songs))
    },[])

    const songsToDisplay = songList.map((song)=>{
        return <Song key={song.id} name={song.name} songKey={songKey} artist={song.artist}/>
    })

    return(
        <div>
            <h1>Song List</h1>
            <h2>Select a Song for additional info, notes, and cues</h2>
            {songsToDisplay}
        </div>
    )
}

export default PerformanceList;