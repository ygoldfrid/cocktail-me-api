const winston = require("winston");
const mongoose = require("mongoose");

module.exports = function () {
  const db = process.env.DB;
  mongoose
    .connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    .then(() => winston.info(`Connected to ${db}...`));
};
