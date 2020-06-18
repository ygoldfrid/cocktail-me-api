const express = require("express");
const router = express.Router();
const { Ingredient, validateIngredient } = require("../models/ingredient");
const { Cocktail } = require("../models/cocktail");
const validateObjectId = require("../middleware/validateObjectId");
const validateBody = require("../middleware/validateBody");

router.get("/", async (req, res) => {
  let query = null;

  const queryArray = Object.keys(req.query).map((key) => {
    return { category: key };
  });
  if (queryArray.length > 0) query = { $or: queryArray };

  const ingredients = await Ingredient.find(query).sort("name");

  res.send(ingredients);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const ingredient = await Ingredient.findById(req.params.id).populate(
    "alternatives",
    "name image"
  );
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
  });

  res.status(200).send(cocktails);
});

router.post("/", validateBody(validateIngredient), async (req, res) => {
  const ingredient = new Ingredient({
    name: req.body.name,
    measure: req.body.measure,
  });
  await ingredient.save();

  res.status(200).send(ingredient);
});

router.put(
  "/:id",
  [validateObjectId, validateBody(validateIngredient)],
  async (req, res) => {
    const ingredient = await Ingredient.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name, measure: req.body.measure },
      { new: true }
    );

    if (!ingredient) return res.status(404).send("Ingredient not found");

    res.send(ingredient);
  }
);

router.delete("/:id", validateObjectId, async (req, res) => {
  const ingredient = await Ingredient.findByIdAndRemove(req.params.id);

  if (!ingredient) return res.status(404).send("Ingredient not found");

  res.send(ingredient);
});

module.exports = router;
