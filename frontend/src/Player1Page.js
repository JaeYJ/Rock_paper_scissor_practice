import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useGameContext } from './GameContext';
import './App.css';

function Player1Page() {
    const [choose, setChoose] = useState("");
    const [result, setResult] = useState(null);
    // const { player1Choose, setPlayer1Choose } = useGameContext();

    // const handleSetPlayer1Choose = async () => {
    //     try {
    //         await axios.post('/setPlayer1Choose', { choose: player1Choose });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    return (
        <div classNmae="container">
            <h1>Player 1 page</h1>
            <div>
                <button onClick={() => setChoose("Rock")}>Rock</button>
                <button onClick={() => setChoose("Paper")}>Paper</button>
                <button onClick={() => setChoose("Scissor")}>Scissor</button>
                {choose}
            </div>
            
            
        </div>
    );
}



export default Player1Page;