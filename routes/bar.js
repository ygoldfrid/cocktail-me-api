const express = require("express");
const router = express.Router();
const Joi = require("joi");
const { User } = require("../models/user");
const { Ingredient } = require("../models/ingredient");
const auth = require("../middleware/auth");
const validateObjectId = require("../middleware/validateObjectId");
const validateBody = require("../middleware/validateBody");

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user._id).populate({
    path: "bar",
    select: "_id name images.url images.thumbnailUrl alternatives",
    populate: {
      path: "alternatives",
      select: "_id name images.url images.thumbnailUrl",
    },
  });

  res.send(user.bar);
});

router.post("/", [auth, validateBody(validateIngredient)], async (req, res) => {
  let user = await User.findById(req.user._id);

  const ingredient = await Ingredient.findById(req.body._id);
  if (!ingredient) return res.status(404).send("Ingredient not found");

  if (
    user.bar.some((i) => i._id.toHexString() === ingredient._id.toHexString())
  )
    return res.status(400).send("Ingredient already in bar");

  user.bar.push(ingredient);
  await user.save();

  user = await User.findById(req.user._id).populate({
    path: "bar",
    select: "_id name images.url images.thumbnailUrl alternatives",
    populate: {
      path: "alternatives",
      select: "_id name images.url images.thumbnailUrl",
    },
  });

  res.send(user.bar);
});

router.delete("/:id", [auth, validateObjectId], async (req, res) => {
  let user = await User.findById(req.user._id);

  const index = user.bar.indexOf(req.params.id);
  if (index === -1) return res.status(404).send("Ingredient not found");

  user.bar.splice(index, 1);
  await user.save();

  user = await User.findById(req.user._id).populate({
    path: "bar",
    select: "_id name images.url images.thumbnailUrl alternatives",
    populate: {
      path: "alternatives",
      select: "_id name images.url images.thumbnailUrl",
    },
  });

  res.send(user.bar);
});

function validateIngredient(ingredient) {
  const schema = {
    _id: Joi.objectId().required(),
  };

  return Joi.validate(ingredient, schema);
}

module.exports = router;
