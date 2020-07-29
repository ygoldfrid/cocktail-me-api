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
  images: [
    {
      url: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
      },
      thumbnailUrl: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
      },
    },
  ],
  alternatives: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Ingredient",
    },
  ],
});

ingredientSchema.virtual(
  "backAlternatives",
  {
    ref: "Ingredient",
    localField: "_id",
    foreignField: "alternatives",

    justOne: false,
  },
  { toJSON: { virtuals: true } }
);

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

function validateIngredient(ingredient) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    category: Joi.string().min(3).max(50).required(),
    images: Joi.array()
      .items(
        Joi.object({
          url: Joi.string().min(1).max(255).required(),
          thumbnailUrl: Joi.string().min(1).max(255).required(),
        })
      )
      .min(2)
      .required(),
  };

  return Joi.validate(ingredient, schema);
}

exports.ingredientSchema = ingredientSchema;
exports.Ingredient = Ingredient;
exports.validateIngredient = validateIngredient;
