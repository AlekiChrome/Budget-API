const express = require("express");
const app = express();
const cors = cors();

// middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the Budgetting App!");
  });

module.exports = app;
