const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
    
})

const PORT = 5000; // Ensure this matches your frontend proxy
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
