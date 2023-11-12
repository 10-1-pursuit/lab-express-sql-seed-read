import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Index from "./pages/Index";
import Show from "./pages/Show";
import New from "./pages/New";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/songs" element={<Index />} />
            <Route path="/songs/:id" element={<Show />} />
            <Route path="/songs/new" element={<New />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
