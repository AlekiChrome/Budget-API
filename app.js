const express = require("express");
const cors = require("cors");
const app = express();

// middleware
app.use(cors());
app.use(express.json());


// Routes
app.use((req, res, next) => {
    console.log(`[development] Middleware is running!`);
    next();
});

app.get("/", (req, res) => {
    res.send("Welcome to the Budgetting App!");
  });

// app.use("/budgets", budgetController);

app.get("*", (req, res) => {
    res.status(404).send("Page not found.");
});

module.exports = app;
