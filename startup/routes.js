const express = require("express");
const cocktails = require("../routes/cocktails");
const ingredients = require("../routes/ingredients");
const users = require("../routes/users");
const auth = require("../routes/auth");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/cocktails", cocktails);
  app.use("/api/ingredients", ingredients);
  app.use("/api/users", users);
  app.use("/api/auth", auth);
  app.use(error);
};
