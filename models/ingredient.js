const Joi = require("joi");
const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
});

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

function validateIngredient(ingredient) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
  };

  return Joi.validate(ingredient, schema);
}

exports.ingredientSchema = ingredientSchema;
exports.Ingredient = Ingredient;
exports.validateIngredient = validateIngredient;
