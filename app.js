import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";

console.clear();

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function start() {
  const rainbow = chalkAnimation.rainbow("🚀 Deploy me with CI/CD! 🌈");
  await sleep();
  rainbow.stop();

  console.log(gradient.pastel.multiline(figlet.textSync("Hello CI/CD!", { horizontalLayout: "default" })));
  console.log(chalk.yellowBright("\n✨ Node.js app successfully running! ✨"));
}

start();
