import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Index from './Pages/Index';
import Show from './Pages/Show';
import New from './Pages/New';
import Edit from './Pages/Edit';


function App() {


  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/songs" element={<Index/>}/>
            <Route path="/songs/new" element={<New/>}/>
            <Route path="/songs/:index" element={<Show/>}/>
            <Route path="/songs/:index/edit" element={<Edit/>}/>
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
