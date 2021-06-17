const express = require("express");
const budgets = express.Router();

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
}

budgets.use(validateUrl);
