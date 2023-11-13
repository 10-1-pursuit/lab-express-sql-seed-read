import React, {useState,useEffect}from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from "./components/home";
import GetAllSongs from "./components/AllSongs";
import "./index"
import SingleSong from "./components/SingleSong";
import { useParams } from "react-router-dom";
import CreateASong from "./components/CreateSong";
import Header from "./Header";
import EditSong from "./components/EditSong";
function App() {
  return (
<div className="App">
    <Router>
      <Header/>
      <main>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/songs" element={<GetAllSongs/>}/>
        <Route path="/songs/:id" element={<SingleSong/>}/>
        <Route path="/songs/create" element={<CreateASong/>}/>
        <Route path="/songs/:id/edit" element={<EditSong/>}/>
      </Routes>
      </main>
      </Router>
    
   
    </div>
  );
}

export default App;
