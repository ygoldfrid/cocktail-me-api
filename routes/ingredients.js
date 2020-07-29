const express = require("express");
const router = express.Router();
const { Ingredient } = require("../models/ingredient");
const { Cocktail } = require("../models/cocktail");
const validateObjectId = require("../middleware/validateObjectId");

router.get("/", async (req, res) => {
  let query = null;

  //For querying different categories
  const queryArray = Object.keys(req.query).map((key) => {
    return { category: key };
  });
  if (queryArray.length > 0) query = { $or: queryArray };

  const ingredients = await Ingredient.find(query)
    .sort("name")
    .select("-__v -images._id")
    .populate("alternatives", "name images.url images.thumbnailUrl");

  res.send(ingredients);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const ingredient = await Ingredient.findById(req.params.id)
    .select("-__v -images._id")
    .populate("alternatives", "name images.url images.thumbnailUrl");
  if (!ingredient) return res.status(404).send("Ingredient not found");

  res.status(200).send(ingredient);
});

router.get("/:id/cocktails", validateObjectId, async (req, res) => {
  const ingredient = await Ingredient.findById(req.params.id);
  if (!ingredient) return res.status(404).send("Ingredient not found");

  const backAlternatives = (
    await Ingredient.findById(req.params.id).populate("backAlternatives")
  ).backAlternatives;

  const cocktails = await Cocktail.find({
    $or: [
      {
        "components.ingredient": {
          $in: [ingredient._id],
        },
      },
      {
        "components.ingredient": {
          $in: backAlternatives,
        },
      },
    ],
  }).populate({
    path: "components.ingredient",
    select: "_id name images.url images.thumbnailUrl measure alternatives",
    populate: {
      select: "_id name images.url images.thumbnailUrl",
      path: "alternatives",
    },
  });

  res.status(200).send(cocktails);
});

module.exports = router;
