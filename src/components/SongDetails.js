import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

function SongDetails(){
    const [selectedSong, setSelectedSong] = useState();
    const params = useParams()

    useEffect(()=>{
        fetch(``)
    },[params.id])

    return(
        <h2>Current Song Details</h2>

    )
}

export default SongDetails;