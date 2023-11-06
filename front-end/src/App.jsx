import React, {useState,useEffect}from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from "./components/home";

function App() {
  return (
<div className="App">
    <Router>
      <main>
      <Routes>
        <Route path="/" element={<HomePage/>}/>






      </Routes>
      </main>
      </Router>
    
   
    </div>
  );
}

export default App;
