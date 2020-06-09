const { Cocktail } = require("./models/cocktail");
const mongoose = require("mongoose");
const config = require("config");

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
  await mongoose.connect(config.get("db"));

  await Cocktail.deleteMany({});

  for (let cocktail of cocktails) {
    await new Cocktail({ name: cocktail.name }).save();
  }

  mongoose.disconnect();

  console.info("Done!");
}

seed();
