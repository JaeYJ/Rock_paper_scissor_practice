import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [player1Choose, setPlayer1Choose] = useState('');
    const [player2Choose, setPlayer2Choose] = useState('');

    // const resetGame = () => {
    //     setPlayer1Choose('');
    //     setPlayer2Choose('');
    // };

    return (
        <GameContext.provider value={{ player1Choose, setPlayer1Choose, player2Choose, setPlayer2Choose }}>
            {children}
        </GameContext.provider>
    );
};

export const useGameContext = () => {
    return useContext(GameContext);
};