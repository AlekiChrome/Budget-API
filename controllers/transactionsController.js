const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions");

const validateUrl = (req, res, next) => {
    const http = "http://";
    const https = "https://";
    let fullUrl = req.protocol + "://" + req.get("host") + req.url;
    console.log(`[DEVELOPMENT] Request URL: ${fullUrl}`);

    if (
        fullUrl.substring(0, 7) === http || fullUrl.substring(0, 8) === https
       ) {
           return next();
       } else {
           res.status(400).send(`Uh Oh, You're missing your hyper text transfer protocol. Choose http:// or https://`)
    }
};


transactions.use(validateUrl);

transactions.get("/", (req, res) => {
    res.status(200).json(transactionsArray);
});

transactions.get("/:id", (req, res) => {
    const { id } = req.params;
    if (transactionsArray[id]) {
        res.status(200).json(transactionsArray[id]);
    } else {
        res.redirect("/404");
    }
});

transactions.post("/", (req, res) => {
    transactionsArray.push(req.body);
    res.json(transactionsArray[transactionsArray.length - 1]);
});

transactions.put("/:id", (req, res) => {
    const { id } = req.params;
    if (transactionsArray[id]) {
        transctionsArray[id] = req.body;
        res.json(transactionsArray[id])
    } else {
        res.redirect("/404")
    }
});

transactions.delete("/:id", (req, res) => {
    const { id } = req.params;
    if (transactionsArray[id]) {
        const deleted = transactionsArray.splice(id, 1)
        res.json(deleted[0])
    } else {
        res.redirect("/404")
    }
})

module.exports = transactions;
