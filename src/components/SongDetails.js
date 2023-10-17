import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

function SongDetails(){
    const [selectedSong, setSelectedSong] = useState({});
    const params = useParams()

    useEffect(()=>{
        fetch(`http://localhost:3000/songs/${params.id}`)
        .then(resp=>resp.json())
        .then(songDetails=>setSelectedSong(songDetails))
    },[])

    return(
        <div className="SongContainer">
            <h2>Current Song Details</h2>
            <h3>{selectedSong.name}</h3>
            <h3>{selectedSong.artist}</h3>
            <h3>{selectedSong.songKey}</h3>
            <h4 className="playerNotes">{selectedSong.playerNotes}</h4>
            <a href={selectedSong.videoReference}> A Video For Reference!</a>
        </div>
    )
}

export default SongDetails;