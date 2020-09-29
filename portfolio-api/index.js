const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sendGrid = require("@sendGrid/mail");

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Change later to only allow our server
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/api", (req, res, next) => {
  res.send("API Status: I'm awesome");
});

app.post("/api/email", (req, res, next) => {
  console.log(req.body);

  sendGrid.setApiKey(
    "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"
  );
  const msg = {
    to: "vanessalyn.taylor@gmail.com",
    from: req.body.email,
    subject: "Portfolio Contact",
    text: req.body.message,
  };

  sendGrid
    .send(msg)
    .then((result) => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log("error: ", err);
      res.status(401).json({
        success: false,
      });
    });
});

app.listen(5000, "0.0.0.0");
