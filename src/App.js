import React from "react";
import {Route, Switch} from "react-router-dom"
import './App.css';
import Home from './components/Home';
import PerformanceList from './components/PerformanceList';

function App() {
  return (
    <Switch>
      <div className="App">
        <Route exact path ="/">
          App
          <Home/>
        </Route>
        <Route path="/performanceList">
          <PerformanceList/>
        </Route>
        <Route path="/submitForm">
          <SongSubmitForm/>
        </Route>
      </div>
    </Switch>
    
  );
}

export default App;
