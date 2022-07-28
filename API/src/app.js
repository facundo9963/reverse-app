const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const server = express();

server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// ENDPOINT
server.get("/iecho", function (req, res) {
  let text = req.query.text;
  let re = /[^A-Za-z0-9]/g;
  if (text){
    let lowRegStr = text.toLowerCase().replace(re, "");
    let reverseStr = lowRegStr.split("").reverse().join("");
    if (text && lowRegStr === reverseStr) {
      res
        .status(200)
        .json({ text: text.split("").reverse().join(""), palindrome: true });
    } else {
      res
        .status(200)
        .json({ text: text.split("").reverse().join(""), palindrome: false });
    } 
    
  } else {
    res.status(400).json({ error: "no text" });
  }
});

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
