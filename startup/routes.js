const express = require("express");
const cocktails = require("../routes/cocktails");
const ingredients = require("../routes/ingredients");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/cocktails", cocktails);
  app.use("/api/ingredients", ingredients);
};
