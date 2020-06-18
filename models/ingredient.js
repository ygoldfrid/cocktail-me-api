const Joi = require("joi");
const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  category: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  image: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  alternatives: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Ingredient",
    },
  ],
});

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

function validateIngredient(ingredient) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    category: Joi.string().min(3).max(50).required(),
    image: Joi.string().min(5).max(255).required(),
  };

  return Joi.validate(ingredient, schema);
}

exports.ingredientSchema = ingredientSchema;
exports.Ingredient = Ingredient;
exports.validateIngredient = validateIngredient;
