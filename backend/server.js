const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let player1Choose = '';
let player2Choose = '';

app.post('/setPlayer1Choose', (req, res) => {
    const { choose } = req.body;
    player1Choose = choose;
    res.sendStatus(200);
})
app.post('/setPlayer2Choose', (req, res) => {
    const { choose } = req.body;
    player2Choose = choose;
    res.sendStatus(200);
})
app.post('/plyer1/result', (req, res) => {
    const winner = checkWinner(player1Choice, player2Choice);
})
app.post('/plyer2/result', (req, res) => {
    const winner = checkWinner(player2Choice, player1Choice);
})

function checkWinner(player1Choose, player2Choose) {
    let Winner = '';

    if (player1Choose === 'Rock') {
        if (player2Choose === 'Scissor') {
            Winner = 'player1';
        }
        else if (player2Choose === 'Paper') {
            Winner = 'player2';
        }
        else {
            Winner = 'Draw!';
        }
    } else if (player1Choose === 'Scissor') {
        if (player2Choose === 'Rock') {
            Winner = 'player2';
        }
        else if (player2Choose === 'Paper') {
            Winner = 'player1';
        }
        else {
            Winner = 'Draw!';
        }
    } else {
        if (player2Choose === 'Rock') {
            Winner = 'player1';
        }
        else if (player2Choose === 'Scissor') {
            Winner = 'player2';
        }
        else {
            Winner = 'Draw!';
        }
    }

    return { Winner };
}
const PORT = 5000; // Ensure this matches your frontend proxy
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
