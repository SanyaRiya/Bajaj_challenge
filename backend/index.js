const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON requests

// Default route for root "/"
app.get("/", (req, res) => {
  res.send("Bajaj Challenge API is running!");
});

// Your existing routes
app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ is_success: false, error: "Invalid input" });
  }

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => isNaN(item));
  const highestAlphabet = alphabets.length ? [alphabets.sort().reverse()[0]] : [];

  res.json({
    is_success: true,
    user_id: "Sanya_Singh_17012004",
    email: "22BCS14374@cuchd.in",
    roll_number: "22BCS14374",
    numbers,
    alphabets,
    highest_alphabet: highestAlphabet,
  });
});

app.get("/bfhl", (req, res) => {
  res.json({ operation: "API is working!" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
