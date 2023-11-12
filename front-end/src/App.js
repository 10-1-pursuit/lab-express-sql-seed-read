import {BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Index from "./pages/Index";

function App() {
  return (
    <>
  
      <div className="app">
    
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Index />} />
        
          </Routes>
        </Router>
      </div>
  
    </>
  );
}

export default App;
