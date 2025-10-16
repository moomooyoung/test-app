// app.js
import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";

console.clear();

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow("🚀 Welcome to the Magic Console World! 🌈");
  await sleep();
  rainbowTitle.stop();

  console.log(`
${chalk.cyanBright("────────────────────────────────────────────")}
${chalk.magentaBright("✨ This is a colorful Node.js experience ✨")}
${chalk.cyanBright("────────────────────────────────────────────")}
`);
}

async function askName() {
  const answers = await inquirer.prompt({
    name: "user_name",
    type: "input",
    message: "What's your name, traveler? 😎",
    default() {
      return "Anonymous";
    },
  });

  return answers.user_name;
}

async function showBanner(name) {
  console.clear();
  const msg = `Hello ${name}!`;
  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
    console.log(chalk.yellowBright("\n✨ Welcome to your colorful adventure! ✨\n"));
  });
}

await welcome();
const name = await askName();
await showBanner(name);