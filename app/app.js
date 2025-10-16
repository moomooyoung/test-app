import express from "express";
import chalk from "chalk"; // 콘솔 색상용
import figlet from "figlet"; // 콘솔 아트용

const app = express();
const port = process.env.PORT || 3000;

// 🌈 화려한 메인 페이지
app.get("/", (req, res) => {
  res.send(`
  <html>
    <head>
      <title>🔥 Welcome to Mooyoung's Express Server 🔥</title>
      <style>
        body {
          background: linear-gradient(135deg, #1f1c2c, #928dab);
          color: white;
          font-family: 'Segoe UI', sans-serif;
          text-align: center;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          margin: 0;
        }
        h1 {
          font-size: 3em;
          animation: glow 2s ease-in-out infinite alternate;
        }
        @keyframes glow {
          from { text-shadow: 0 0 10px #ff0080, 0 0 20px #ff0080; }
          to { text-shadow: 0 0 30px #00ffff, 0 0 60px #00ffff; }
        }
        p {
          font-size: 1.3em;
          margin-top: 20px;
          color: #ffe6ff;
        }
        .rocket {
          font-size: 5em;
          animation: float 2s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      </style>
    </head>
    <body>
      <div class="rocket">🚀</div>
      <h1>✨ Node.js App Deployed Successfully ✨</h1>
      <p>Powered by <b style="color:#ff00ff;">Helm</b> & <b style="color:#00ffff;">AKS</b></p>
      <p>Made with ❤️ by <b>김무영</b></p>
    </body>
  </html>
  `);
});

// 🌟 서버 실행 시 콘솔 출력도 화려하게!
app.listen(port, "0.0.0.0", () => {
  console.clear();
  console.log(chalk.cyan.bold(figlet.textSync("MOOYOUNG APP", { horizontalLayout: "default" })));
  console.log(chalk.magentaBright(`🚀 Server is running at http://localhost:${port}`));
  console.log(chalk.yellowBright("✨ Deployed with Helm on Azure AKS ✨"));
});