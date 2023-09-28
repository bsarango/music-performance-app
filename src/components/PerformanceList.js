import React, { useEffect, useState } from "react";
import {NavLink} from "react-router-dom";
import Song from "./Song"

function PerformanceList(){

    const [songList, setSongList] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/songs`)
        .then(resp=>resp.json())
        .then(songs=>setSongList(songs))
    },[])

    const songsToDisplay = songList.map((song)=>{
        return <NavLink to="">{song.name}</NavLink>
    })

    return(
        <div>
            <h1>Song List</h1>
            <h2>Select a Song for additional info, notes, and cues</h2>

        </div>
    )
}

export default PerformanceList;