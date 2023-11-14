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
            <Route path="/albums" element={<Index/>}/>
            <Route path="/albums/new" element={<New/>}/>
            <Route path="/albums/:id" element={<Show/>}/>
            <Route path="/albums/:id/edit" element={<Edit/>}/>
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
