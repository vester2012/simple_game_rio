const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Раздача статических файлов
app.use(express.static(path.join(__dirname)));

// Всегда возвращать index.html для любых маршрутов
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
