const express = require("express");

const error = require("../middleware/error");

const auth = require("../routes/auth");
const bar = require("../routes/bar");
const cocktails = require("../routes/cocktails");
const favorites = require("../routes/favorites");
const ingredients = require("../routes/ingredients");
const users = require("../routes/users");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/auth", auth);
  app.use("/api/bar", bar);
  app.use("/api/cocktails", cocktails);
  app.use("/api/favorites", favorites);
  app.use("/api/ingredients", ingredients);
  app.use("/api/users", users);
  app.use(error);
};
