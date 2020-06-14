const express = require("express");
const router = express.Router();
const { Cocktail, validateCocktail } = require("../models/cocktail");
const { Ingredient } = require("../models/ingredient");
const validateObjectId = require("../middleware/validateObjectId");
const validateBody = require("../middleware/validateBody");

router.get("/", async (req, res) => {
  const cocktails = await Cocktail.find().sort("name");
  res.send(cocktails);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const cocktail = await Cocktail.findById(req.params.id);
  if (!cocktail) return res.status(404).send("Cocktail not found");

  res.status(200).send(cocktail);
});

router.get("/:id/ingredients", validateObjectId, async (req, res) => {
  const cocktail = await Cocktail.findById(req.params.id);
  if (!cocktail) return res.status(404).send("Cocktail not found");

  const ingredients = cocktail.components;

  res.status(200).send(ingredients);
});

router.post("/", validateBody(validateCocktail), async (req, res) => {
  const components = [];
  for (component of req.body.components) {
    const ingredientInDb = await Ingredient.findById(component.ingredientId);
    if (!ingredientInDb)
      return res.status(404).send("One of the ingredients was not found");
    components.push({
      ingredient: ingredientInDb,
      quantity: component.quantity,
    });
  }

  const cocktail = new Cocktail({
    name: req.body.name,
    components,
  });
  await cocktail.save();

  res.status(200).send(cocktail);
});

router.put(
  "/:id",
  [validateObjectId, validateBody(validateCocktail)],
  async (req, res) => {
    const cocktail = await Cocktail.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );

    if (!cocktail) return res.status(404).send("Cocktail not found");

    res.send(cocktail);
  }
);

router.delete("/:id", validateObjectId, async (req, res) => {
  const cocktail = await Cocktail.findByIdAndRemove(req.params.id);

  if (!cocktail) return res.status(404).send("Cocktail not found");

  res.send(cocktail);
});

module.exports = router;
