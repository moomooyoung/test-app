// app.js
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🚀 Hello CI/CD! 🌈 Node.js app is running!");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`✨ Node.js app successfully running on port ${port} ✨`);
});