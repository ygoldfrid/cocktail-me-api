const express = require("express");
const cocktails = require("../routes/cocktails");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/cocktails", cocktails);
};
