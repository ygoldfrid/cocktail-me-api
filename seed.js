const { Cocktail } = require("./models/cocktail");
const { Ingredient } = require("./models/ingredient");
const mongoose = require("mongoose");
const config = require("config");

async function run() {
  //Connecting
  await mongoose.connect(config.get("db"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await Cocktail.deleteMany({});
  await Ingredient.deleteMany({});

  //Ingredients
  const tequila = await new Ingredient({
    name: "Tequila",
    measure: "ml",
  }).save();
  const lemon = await new Ingredient({
    name: "Lemon",
    measure: "units",
  }).save();
  const rum = await new Ingredient({ name: "Rum", measure: "ml" }).save();
  const coke = await new Ingredient({ name: "Coke", measure: "ml" }).save();
  const pisco = await new Ingredient({ name: "Pisco", measure: "ml" }).save();

  //Cocktails
  await new Cocktail({
    name: "Margarita",
    components: [
      { ingredient: tequila, quantity: 100 },
      { ingredient: lemon, quantity: 4 },
    ],
  }).save();
  await new Cocktail({
    name: "Cuba Libre",
    components: [
      { ingredient: rum, quantity: 80 },
      { ingredient: coke, quantity: 120 },
    ],
  }).save();
  await new Cocktail({
    name: "Pisco Sour",
    components: [
      { ingredient: pisco, quantity: 100 },
      { ingredient: lemon, quantity: 6 },
    ],
  }).save();
  await new Cocktail({
    name: "Piscola",
    components: [
      { ingredient: pisco, quantity: 100 },
      { ingredient: coke, quantity: 100 },
    ],
  }).save();

  //Clean up
  mongoose.disconnect();
  console.info("Done!");
}

run();
