const winston = require("winston");
const express = require("express");
const app = express();

require("dotenv").config();

require("./startup/logging")();
require("./startup/prod")(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();

const port = process.env.PORT;
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
