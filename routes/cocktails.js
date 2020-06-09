const express = require("express");
const router = express.Router();
const { Cocktail, validateCocktail } = require("../models/cocktail");
const validateObjectId = require("../middleware/validateObjectId");
const validateBody = require("../middleware/validateBody");

router.get("/", async (req, res) => {
  const cocktails = await Cocktail.find().sort("name");
  res.send(cocktails);
});

router.post("/", validateBody(validateCocktail), async (req, res) => {
  const cocktail = new Cocktail({ name: req.body.name });
  await cocktail.save();

  res.status(200).send(cocktail);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const cocktail = await Cocktail.findById(req.params.id);
  if (!cocktail) return res.status(404).send("Cocktail not found");

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

    if (!cocktail)
      return res
        .status(404)
        .send("The cocktail with the given ID was not found.");

    res.send(cocktail);
  }
);

router.delete("/:id", validateObjectId, async (req, res) => {
  const cocktail = await Cocktail.findByIdAndRemove(req.params.id);

  if (!cocktail)
    return res
      .status(404)
      .send("The cocktail with the given ID was not found.");

  res.send(cocktail);
});

module.exports = router;
