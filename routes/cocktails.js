const express = require("express");
const router = express.Router();
const { Cocktail } = require("../models/cocktail");
const validateObjectId = require("../middleware/validateObjectId");

router.get("/", async (req, res) => {
  const cocktails = await Cocktail.find()
    .sort("name")
    .select("-__v -images._id")
    .populate({
      path: "components.ingredient",
      select: "_id name images.url images.thumbnailUrl measure alternatives",
      populate: {
        select: "_id name images.url images.thumbnailUrl",
        path: "alternatives",
      },
    });
  res.send(cocktails);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const cocktail = await Cocktail.findById(req.params.id)
    .select("-__v -images._id")
    .populate({
      path: "components.ingredient",
      select: "_id name images.url images.thumbnailUrl measure alternatives",
      populate: {
        select: "_id name images.url images.thumbnailUrl",
        path: "alternatives",
      },
    });
  if (!cocktail) return res.status(404).send("Cocktail not found");

  res.status(200).send(cocktail);
});

module.exports = router;
