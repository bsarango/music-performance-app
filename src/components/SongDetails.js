import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

function SongDetails(){
    const [selectedSong, setSelectedSong] = useState([]);
    const params = useParams()

    useEffect(()=>{
        fetch(`http://localhost:3000/songs/${params.id}`)
        .then(resp=>resp.json())
        .then(songDetails=>setSelectedSong(songDetails))
    },[params.id])

    return(
        <div>
            <h2>Current Song Details</h2>
            <h3>{selectedSong.name}</h3>
            <h3>{selectedSong.artist}</h3>
            <h3>{selectedSong.songKey}</h3>
            <h4>{selectedSong.playerNotes}</h4>
            <h2>{selectedSong.videoReference}</h2>
        </div>
    )
}

export default SongDetails;