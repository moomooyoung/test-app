const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => 
  res.send(`
    <div style="text-align:center; font-family:monospace; color:#00ffcc; margin-top:50px;">
      <h1 style="font-size:50px;">🚀 WELCOME TO THE ULTIMATE CODE UNIVERSE 🌌🔥</h1>
      <p style="font-size:24px;">💻 Your code is now LIVE and LIT! ⚡✨</p>
      <pre style="font-size:20px; color:#ff00ff;">
       █▀█ █▀█ █▄█ █▀▄ █ █▄░█ █▄█
       █▄█ █▄█ ░█░ █▄▀ █ █░▀█ ░█░
      </pre>
      <p style="font-size:18px;">🤘 Let\'s rock the dev world!!!!!!!!!!!!!!!!!!!! 🤘</p>
    </div>
  `)
);

app.listen(PORT, () => 
  console.log(`
🚀🔥 Server running on port ${PORT} — WELCOME TO THE CODE UNIVERSE 🌌💻
💡 Tip: Open http://localhost:${PORT} and feel the energy! ⚡
`)
);
