const express = require('express');
const path = require('path');

const app = express();

// Cấu hình thư mục tĩnh
app.use(express.static(path.join(__dirname, 'public')));

// Định nghĩa các route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/album', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'album.html'));
});

app.get('/du-an-xanh', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'du_an_xanh.html'));
});

app.get('/cong-dong', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'cong_dong.html'));
});

// Khởi chạy server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
