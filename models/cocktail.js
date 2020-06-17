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
  preparation: {
    type: Array,
    required: true,
    minlength: 10,
    maxlength: 1023,
  },
  image: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  components: [
    {
      ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ingredient",
      },
      measure: {
        type: String,
        minlength: 1,
        maxlength: 255,
      },
    },
  ],
});

const Cocktail = mongoose.model("Cocktail", cocktailSchema);

function validateCocktail(cocktail) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    image: Joi.string().min(5).max(255).required(),
    preparation: Joi.array().items(Joi.string().min(10).max(1023)).required(),
    components: Joi.array()
      .items(
        Joi.object({
          ingredientId: Joi.objectId().required(),
          measure: Joi.string().min(1).max(255).required(),
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
