import express from "express";
import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const message = figlet.textSync("Hello CI/CD!", { horizontalLayout: "default" });
  res.send(`<pre>${message}</pre><p>🚀 Deploy me with CI/CD! 🌈</p>`);
});

app.listen(port, "0.0.0.0", () => {
  console.clear();
  const rainbow = chalkAnimation.rainbow("🚀 Deploy me with CI/CD! 🌈");
  setTimeout(() => rainbow.stop(), 2000);
  console.log(gradient.pastel.multiline(figlet.textSync("Hello CI/CD!")));
  console.log(chalk.yellowBright("\n✨ Node.js app successfully running! ✨"));
});