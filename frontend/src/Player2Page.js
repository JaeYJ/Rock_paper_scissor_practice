import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useGameContext } from './GameContext';
import './App.css';

function Player2Page() {
    const [choose, setChoose] = useState("");
    const [result, setResult] = useState(null);
    // const { player2Choose, setPlayer2Choose } = useGameContext();

    return(
        <div classNmae="container">
            <h1>Player 2 page</h1>
            <div>
                <button onClick={() => setChoose("Rock")}>Rock</button>
                <button onClick={() => setChoose("Paper")}>Paper</button>
                <button onClick={() => setChoose("Scissor")}>Scissor</button>
                {choose}
            </div>
        </div>
    );
}



export default Player2Page;