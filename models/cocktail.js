const Joi = require("joi");
const mongoose = require("mongoose");

const cocktailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
});

const Cocktail = mongoose.model("Cocktail", cocktailSchema);

function validateCocktail(cocktail) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
  };

  return Joi.validate(cocktail, schema);
}

exports.cocktailSchema = cocktailSchema;
exports.Cocktail = Cocktail;
exports.validateCocktail = validateCocktail;
