// servers.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public')); // folder chứa HTML, CSS, JS

app.listen(PORT, () => {
  console.log(`Server đang chạy ở http://localhost:${PORT}`);
});
