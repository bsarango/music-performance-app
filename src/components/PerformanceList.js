import React from "react";
import Song from "./Song"
import SongDetails from "./SongDetails";

function PerformanceList({songList}){

    // const [songList, setSongList] = useState([])

    // function updateSongList(newSong){
    //     setSongList(...songList,newSong)
    // }

    // useEffect(()=>{
    //     fetch(`http://localhost:3000/songs`)
    //     .then(resp=>resp.json())
    //     .then(songs=>setSongList(songs))
    // },[])

    const songsToDisplay = songList.map((song)=>{
        return <Song key={song.id} id={song.id} name={song.name} songKey={song.songKey} artist={song.artist}/>
    })

    return(
        <div className="performancecontainer">
            <h1>Song List</h1>
            <h2>Select a Song for additional info, notes, and cues</h2>
            {songsToDisplay}
        </div>
    )
}

export default PerformanceList;