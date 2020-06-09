const { Cocktail } = require("./models/cocktail");
const { Ingredient } = require("./models/ingredient");
const mongoose = require("mongoose");
const config = require("config");

const ingredients = [
  { name: "Rum" },
  { name: "Tequila" },
  { name: "Lemon syrup" },
  { name: "Salt" },
  { name: "Sugar" },
  { name: "Orange juice" },
  { name: "Whisky" },
];

const cocktails = [
  { name: "Margarita" },
  { name: "Mojito" },
  { name: "Pisco Sour" },
  { name: "Piscola" },
  { name: "Tequila Sunrise" },
  { name: "Cuba Libre" },
  { name: "Gin & Tonic" },
];

async function seed() {
  await mongoose.connect(config.get("db"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await Cocktail.deleteMany({});
  await Ingredient.deleteMany({});

  for (let cocktail of cocktails) {
    await new Cocktail({ name: cocktail.name }).save();
  }
  for (let ingredient of ingredients) {
    await new Ingredient({ name: ingredient.name }).save();
  }

  mongoose.disconnect();

  console.info("Done!");
}

seed();
