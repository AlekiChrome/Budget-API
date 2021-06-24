const express = require("express");
const cors = require("cors");
const app = express();
const transactionsController = require("./controllers/transactionsController");

// middleware
app.use(cors());
app.use(express.json());


// Routes
app.use((req, res, next) => {
    console.log(`[development] Middleware is running!  ${req.method} ${req.url}`);
    next();
});

app.get("/", (req, res) => {
    res.send("Welcome to the Budgetting App!");
  });

// app.use("/budgets", budgetController);

app.use("/transactions", transactionsController);

app.get("*", (req, res) => {
    res.status(404).send(`
        <h1>404 Page Not Found</h1>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fagentestudio.com%2Fuploads%2Fpost%2Fimage%2F69%2Fmain_how_to_design_404_page.png&f=1&nofb=1">
    `);
});

module.exports = app;
