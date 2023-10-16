import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router-dom"
import './App.css';
import Home from './components/Home';
import PerformanceList from './components/PerformanceList';
import SongSubmitForm from "./components/SongSubmitForm"
import NavBar from "./components/NavBar"
import SongDetails from "./components/SongDetails";

function App() {

  const [songList, setSongList] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:3000/songs`)
    .then(resp=>resp.json())
    .then(songs=>setSongList(songs))
  },[])

  function addNewSong(newSong){
    setSongList(...songList,newSong)
  }

  return (
    <div>
      <NavBar/>
      <Switch>
        <div className="App">
          <Route exact path ="/">
            App
            <Home/>
          </Route>
          <Route path="/performanceList/:id">
            <SongDetails/>
          </Route>
          <Route exact path="/performanceList">
            <PerformanceList songList={songList} />
          </Route>
          <Route path="/submitForm">
            <SongSubmitForm addNewSong={addNewSong}/>
          </Route>
        </div>
      </Switch>
    </div>
  );
}

export default App;
