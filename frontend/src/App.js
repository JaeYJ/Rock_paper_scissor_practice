import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Player1Page from './Player1Page';
import Player2Page from './Player2Page';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Rock Paper Scissor</h1>
        <nav>
          <ul>
            <li>
              <Link to="/player_1">Player 1</Link>
            </li>
            <li>
              <Link to="/player_2">Player 2</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/player_1" element={<Player1Page />} />
          <Route path="/player_2" element={<Player2Page />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
