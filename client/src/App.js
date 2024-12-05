import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddSong from "./components/AddSong";
import ListSongs from "./components/ListSongs";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <header className="navbar">
          <h1 className="app-title">🎶 Music Manager</h1>
          <nav className="nav-links">
            <Link to="/add-song" className="nav-link">
              Add Song
            </Link>
            <Link to="/list-songs" className="nav-link">
              List Songs
            </Link>
          </nav>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/add-song" element={<AddSong />} />
            <Route path="/list-songs" element={<ListSongs />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2024 Music Manager. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
