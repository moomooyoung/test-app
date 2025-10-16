// app.js
const express = require('express');
const os = require('os');
const app = express();
const port = 3000;

// 랜덤 색상 생성 (요청마다 배경색 다르게 보여줌)
function getRandomColor() {
  const colors = ['#0078D7', '#00B294', '#FFB900', '#E81123', '#107C10', '#5C2D91'];
  return colors[Math.floor(Math.random() * colors.length)];
}

app.get('/', (req, res) => {
  const hostname = os.hostname();
  const color = getRandomColor();
  res.send(`
    <html>
      <head>
        <title>🚀 Test App by Kim Mooyoung</title>
        <style>
          body {
            background-color: ${color};
            color: white;
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          h1 { font-size: 3rem; margin-bottom: 10px; }
          h2 { font-size: 1.2rem; opacity: 0.8; }
        </style>
      </head>
      <body>
        <h1>🚀 Hello from Kubernetes!</h1>
        <h2>Pod: ${hostname}</h2>
        <h2>Powered by Azure & Docker 🐳</h2>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`✅ App running on port ${port}`);
});