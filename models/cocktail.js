const Joi = require("joi");
const mongoose = require("mongoose");
const { ingredientSchema } = require("./ingredient");

const cocktailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  components: [
    {
      ingredient: ingredientSchema,
      quantity: {
        type: Number,
        required: true,
        minlength: 0,
        maxlength: 255,
      },
    },
  ],
});

const Cocktail = mongoose.model("Cocktail", cocktailSchema);

function validateCocktail(cocktail) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    components: Joi.array()
      .items(
        Joi.object({
          ingredientId: Joi.objectId().required(),
          quantity: Joi.number().min(0).max(255).required(),
        })
      )
      .min(1)
      .required(),
  };

  return Joi.validate(cocktail, schema);
}

exports.cocktailSchema = cocktailSchema;
exports.Cocktail = Cocktail;
exports.validateCocktail = validateCocktail;
