import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Index from "./components/Index";
import AddNewSong from "./components/AddNewSong";
import EditForm from "./components/EditForm";
import Show from "./components/Show";

function App() {
  return (
    <Router>
      <div className="">
        <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/show/:id" element={<Show />} />
          <Route path="/new" element={<AddNewSong />} />
          <Route path="/edit/:id" element={<EditForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
