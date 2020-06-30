const express = require("express");
const router = express.Router();
const { Cocktail } = require("../models/cocktail");
const validateObjectId = require("../middleware/validateObjectId");

router.get("/", async (req, res) => {
  const cocktails = await Cocktail.find()
    .sort("name")
    .select("-__v")
    .populate("components.ingredient", "_id name alternatives");
  res.send(cocktails);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const cocktail = await Cocktail.findById(req.params.id)
    .select("-__v")
    .populate({
      path: "components.ingredient",
      select: "_id name image measure alternatives",
      populate: {
        select: "_id name image",
        path: "alternatives",
      },
    });
  if (!cocktail) return res.status(404).send("Cocktail not found");

  res.status(200).send(cocktail);
});

module.exports = router;
