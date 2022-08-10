require("dotenv").config();
const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const path = require("path");
const logger = require("./helper/logger");

app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(compression());

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Expose-Headers",
    "X-My-Custom-Header, X-Another-Custom-Header"
  );
  logger.info(res.header.access_token);

  next(); // make sure we go to the next routes and don't stop here
});

app.use("/api", require("./controllers/UserController"));

module.exports = app;
