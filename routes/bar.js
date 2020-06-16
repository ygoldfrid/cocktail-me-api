const express = require("express");
const router = express.Router();
const Joi = require("joi");
const { User } = require("../models/user");
const auth = require("../middleware/auth");
const validateObjectId = require("../middleware/validateObjectId");
const validateBody = require("../middleware/validateBody");

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  res.send(user.bar);
});

router.post("/", [auth, validateBody(validateIngredient)], async (req, res) => {
  const user = await User.findById(req.user._id);

  user.bar.push(req.body);
  await user.save();

  res.send(user.bar);
});

router.delete("/:id", [auth, validateObjectId], async (req, res) => {
  const user = await User.findById(req.user._id);

  const ingredient = user.bar.id(req.params.id);
  if (!ingredient) return res.status(404).send("Ingredient not found");

  ingredient.remove();
  await user.save();

  res.send(user.bar);
});

function validateIngredient(ingredient) {
  const schema = {
    _id: Joi.objectId().required(),
    name: Joi.string().min(3).max(50).required(),
    type: Joi.string().min(3).max(50).required(),
    image: Joi.string().min(5).max(255).required(),
    measure: Joi.string().max(50).required(),
  };

  return Joi.validate(ingredient, schema);
}

module.exports = router;
