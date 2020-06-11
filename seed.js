const { Cocktail } = require("./models/cocktail");
const { Ingredient } = require("./models/ingredient");
const mongoose = require("mongoose");
const config = require("config");

const ingredients = [
  { _id: mongoose.Types.ObjectId(), name: "Tequila", measure: "ml" },
  { _id: mongoose.Types.ObjectId(), name: "Lemon", measure: "unit" },
  { _id: mongoose.Types.ObjectId(), name: "Rum", measure: "ml" },
  { _id: mongoose.Types.ObjectId(), name: "Coke", measure: "ml" },
  { _id: mongoose.Types.ObjectId(), name: "Pisco", measure: "ml" },
];

const cocktails = [
  {
    name: "Margarita",
    components: [
      { ingredient: ingredients[0], quantity: 100 },
      { ingredient: ingredients[1], quantity: 4 },
    ],
  },
  {
    name: "Cuba Libre",
    components: [
      { ingredient: ingredients[2], quantity: 80 },
      { ingredient: ingredients[3], quantity: 120 },
    ],
  },
  {
    name: "Pisco Sour",
    components: [
      { ingredient: ingredients[4], quantity: 80 },
      { ingredient: ingredients[1], quantity: 6 },
    ],
  },
  {
    name: "Piscola",
    components: [
      { ingredient: ingredients[4], quantity: 100 },
      { ingredient: ingredients[3], quantity: 100 },
    ],
  },
];

async function seed() {
  await mongoose.connect(config.get("db"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await Cocktail.deleteMany({});
  await Ingredient.deleteMany({});

  for (let ingredient of ingredients) {
    await new Ingredient(ingredient).save();
  }
  for (let cocktail of cocktails) {
    await new Cocktail(cocktail).save();
  }

  mongoose.disconnect();

  console.info("Done!");
}

seed();
