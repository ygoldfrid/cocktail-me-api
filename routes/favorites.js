const express = require("express");
const router = express.Router();
const Joi = require("joi");

const auth = require("../middleware/auth");
const validateBody = require("../middleware/validateBody");
const validateObjectId = require("../middleware/validateObjectId");
const { Cocktail } = require("../models/cocktail");
const { User } = require("../models/user");

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user._id).populate({
    path: "favorites",
    select:
      "_id name preparation images.url images.thumbnailUrl components.measure",
    populate: {
      path: "components.ingredient",
      select: "_id alternatives name images.url images.thumbnailUrl",
      populate: {
        path: "alternatives",
        select: "_id name images.url images.thumbnailUrl",
      },
    },
  });

  res.send(user.favorites);
});

router.post("/", [auth, validateBody(validateCocktail)], async (req, res) => {
  let user = await User.findById(req.user._id);

  const cocktail = await Cocktail.findById(req.body._id);
  if (!cocktail) return res.status(404).send("Cocktail not found");

  if (
    user.favorites.some(
      (i) => i._id.toHexString() === cocktail._id.toHexString()
    )
  )
    return res.status(400).send("Cocktail already in favorites");

  user.favorites.push(cocktail);
  await user.save();

  user = await User.findById(req.user._id).populate({
    path: "favorites",
    select:
      "_id name preparation images.url images.thumbnailUrl components.measure",
    populate: {
      path: "components.ingredient",
      select: "_id alternatives name images.url images.thumbnailUrl",
      populate: {
        path: "alternatives",
        select: "_id name images.url images.thumbnailUrl",
      },
    },
  });

  res.send(user.favorites);
});

router.delete("/:id", [auth, validateObjectId], async (req, res) => {
  let user = await User.findById(req.user._id);

  const index = user.favorites.indexOf(req.params.id);
  if (index === -1) return res.status(404).send("Cocktail not found");

  user.favorites.splice(index, 1);
  await user.save();

  user = await User.findById(req.user._id).populate({
    path: "favorites",
    select:
      "_id name preparation images.url images.thumbnailUrl components.measure",
    populate: {
      path: "components.ingredient",
      select: "_id alternatives name images.url images.thumbnailUrl",
      populate: {
        path: "alternatives",
        select: "_id name images.url images.thumbnailUrl",
      },
    },
  });

  res.send(user.favorites);
});

function validateCocktail(cocktail) {
  const schema = {
    _id: Joi.objectId().required(),
  };

  return Joi.validate(cocktail, schema);
}

module.exports = router;
