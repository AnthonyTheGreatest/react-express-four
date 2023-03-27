import express from 'express';
const app = express();

app.get('/api', (req, res) => {
    res.json({
        "people": ["Sanyi", "Andi", "Szandi"]
    });
});

app.listen(5000, () => {
    console.log('listening on port 5000.');
});