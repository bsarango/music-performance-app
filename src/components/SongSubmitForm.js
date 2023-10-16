import React, {useState} from 'react';

function SongSubmitForm({addNewSong}){

    const [newSong, setNewSong]=useState({
        name:"",
        artist:"",
        genre:"",
        songKey:"",
        playerNotes:"",
        videoReference:"",
    })

    function handleSongInput(event){
        const inputType = event.target.name
        const inputValue = event.target.value
        setNewSong({...newSong, [inputType]: inputValue})
    }

    function handleSubmit(event){
        event.preventDefault()
        const newSongData={
            name: newSong.name,
            artist: newSong.artist,
            genre: newSong.genre,
            songKey: newSong.songKey,
            playerNotes: newSong.playerNotes,
            videoReference: newSong.videoReference,
        }
        console.log("Inside submit")
        fetch("http://localhost:3000/songs",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newSongData),
        })
        .then(resp=>resp.json())
        .then(newSongObj=>addNewSong(newSongObj))
    }

    return(
        <div>
            <h2>Input your a New Song to Your Performance List</h2>
            <h4>Add all the basic info, your own personal notes to follow, and a Link to the Song for reference!</h4>
            <form onSubmit = {handleSubmit}>
                <input name="name" placeholder="Input Song Title" value={newSong.name} onChange={handleSongInput}/>
                <br></br>
                <input name="artist" placeholder="Input Artist Name" value={newSong.artist} onChange={handleSongInput}/>
                <br></br>
                <input name="genre" placeholder="Input the Genre" value={newSong.genre} onChange={handleSongInput} />
                <br></br>
                <input name="songKey" placeholder="Input the Song Key" value={newSong.songKey} onChange={handleSongInput} />
                <br></br>
                <input name="playerNotes" placeholder="Input Your Personal Notes" value={newSong.playerNotes} onChange={handleSongInput} />
                <br></br>
                <input name="videoReference" placeholder="Add a Video Link!" value={newSong.videoReference} onChange={handleSongInput} />
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
        
    )
}

export default SongSubmitForm