import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditSong from '../components/EditSong';
import NewSongs from '../components/NewSongs';
import Songs from '../components/Songs';
import Song from '../components/Song';
import Nav from '../components/Nav';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Songs />} />
          <Route path="/songs/:id" element={<Song />} />
          <Route path="/songs/new" element={<NewSongs />} />
          <Route path="/songs/:id/edit" element={<EditSong />} />
          <Route path="/404" element={<h1>404 Error Not Found</h1>} />
          <Route path="*" element={<h1>404 Error Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
