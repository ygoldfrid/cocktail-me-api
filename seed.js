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

  //Spirits
  const tequila = await new Ingredient({
    name: "Tequila",
    image: `${config.get("base_url")}/images/ingredients/tequila.jpg`,
    type: "Spirits",
    measure: "ml",
  }).save();
  const rum = await new Ingredient({
    name: "Rum",
    image: `${config.get("base_url")}/images/ingredients/rum.jpg`,
    type: "Spirits",
    measure: "ml",
  }).save();
  const pisco = await new Ingredient({
    name: "Pisco",
    image: `${config.get("base_url")}/images/ingredients/pisco.jpg`,
    type: "Spirits",
    measure: "ml",
  }).save();
  const vodka = await new Ingredient({
    name: "Vodka",
    image: `${config.get("base_url")}/images/ingredients/vodka.jpg`,
    type: "Spirits",
    measure: "ml",
  }).save();
  const gin = await new Ingredient({
    name: "Gin",
    image: `${config.get("base_url")}/images/ingredients/gin.jpg`,
    type: "Spirits",
    measure: "ml",
  }).save();
  const cognac = await new Ingredient({
    name: "Cognac",
    image: `${config.get("base_url")}/images/ingredients/cognac.jpg`,
    type: "Spirits",
    measure: "ml",
  }).save();
  const vermut = await new Ingredient({
    name: "Vermut",
    image: `${config.get("base_url")}/images/ingredients/vermut.jpg`,
    type: "Spirits",
    measure: "ml",
  }).save();
  const beer = await new Ingredient({
    name: "Beer",
    image: `${config.get("base_url")}/images/ingredients/beer.jpg`,
    type: "Spirits",
    measure: "ml",
  }).save();
  const cachaca = await new Ingredient({
    name: "Cachaça",
    image: `${config.get("base_url")}/images/ingredients/cachaca.jpg`,
    type: "Spirits",
    measure: "ml",
  }).save();

  //Mixers
  const coke = await new Ingredient({
    name: "Coke",
    image: `${config.get("base_url")}/images/ingredients/coke.jpg`,
    type: "Mixers",
    measure: "ml",
  }).save();
  const orangeJuice = await new Ingredient({
    name: "Orange Juice",
    image: `${config.get("base_url")}/images/ingredients/orange_juice.jpg`,
    type: "Mixers",
    measure: "ml",
  }).save();
  const grenadine = await new Ingredient({
    name: "Grenadine",
    image: `${config.get("base_url")}/images/ingredients/grenadine.jpg`,
    type: "Mixers",
    measure: "ml",
  }).save();
  const sprite = await new Ingredient({
    name: "Sprite",
    image: `${config.get("base_url")}/images/ingredients/sprite.jpg`,
    type: "Mixers",
    measure: "ml",
  }).save();
  const lemonJuice = await new Ingredient({
    name: "Lemon Juice",
    image: `${config.get("base_url")}/images/ingredients/lemon_juice.jpg`,
    type: "Mixers",
    measure: "ml",
  }).save();
  const tonicWater = await new Ingredient({
    name: "Tonic Water",
    image: `${config.get("base_url")}/images/ingredients/tonic_water.jpg`,
    type: "Mixers",
    measure: "ml",
  }).save();

  //Others
  const lemon = await new Ingredient({
    name: "Lemon",
    image: `${config.get("base_url")}/images/ingredients/lemon.jpg`,
    type: "Others",
    measure: "units",
  }).save();
  const sugar = await new Ingredient({
    name: "Sugar",
    image: `${config.get("base_url")}/images/ingredients/sugar.jpg`,
    type: "Others",
    measure: "teaspoons",
  }).save();
  const mintLeaves = await new Ingredient({
    name: "Mint Leaves",
    image: `${config.get("base_url")}/images/ingredients/mint_leaves.jpg`,
    type: "Others",
    measure: "units",
  }).save();
  const salt = await new Ingredient({
    name: "Salt",
    image: `${config.get("base_url")}/images/ingredients/salt.jpg`,
    type: "Others",
    measure: "teaspoons",
  }).save();
  const tabasco = await new Ingredient({
    name: "Tabasco",
    image: `${config.get("base_url")}/images/ingredients/tabasco.jpg`,
    type: "Others",
    measure: "ml",
  }).save();

  //Cocktails
  await new Cocktail({
    name: "Michelada",
    image: `${config.get("base_url")}/images/cocktails/michelada.jpg`,
    recipe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales pulvinar justo quis feugiat. Quisque leo lacus, ornare quis lobortis et, venenatis ullamcorper erat. Proin id est euismod, convallis risus ut, commodo velit. Suspendisse aliquet lorem id sem mollis molestie. In in justo at dolor dictum bibendum vel ut urna. Phasellus aliquam vulputate libero, eu varius tortor suscipit eu. Suspendisse eu libero ut quam efficitur consequat. Maecenas ac mauris sit amet tellus fringilla sodales. Cras ac fermentum felis, quis accumsan velit. Vivamus id quam tristique, finibus elit feugiat, suscipit sapien. Vestibulum ut accumsan mauris. Aliquam iaculis elit id vestibulum fringilla. Nulla vitae dictum erat.",
    components: [
      { ingredient: beer, quantity: 100 },
      { ingredient: salt, quantity: 4 },
      { ingredient: tabasco, quantity: 4 },
    ],
  }).save();
  await new Cocktail({
    name: "Margarita",
    image: `${config.get("base_url")}/images/cocktails/margarita.jpg`,
    recipe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales pulvinar justo quis feugiat. Quisque leo lacus, ornare quis lobortis et, venenatis ullamcorper erat. Proin id est euismod, convallis risus ut, commodo velit. Suspendisse aliquet lorem id sem mollis molestie. In in justo at dolor dictum bibendum vel ut urna. Phasellus aliquam vulputate libero, eu varius tortor suscipit eu. Suspendisse eu libero ut quam efficitur consequat. Maecenas ac mauris sit amet tellus fringilla sodales. Cras ac fermentum felis, quis accumsan velit. Vivamus id quam tristique, finibus elit feugiat, suscipit sapien. Vestibulum ut accumsan mauris. Aliquam iaculis elit id vestibulum fringilla. Nulla vitae dictum erat.",
    components: [
      { ingredient: tequila, quantity: 100 },
      { ingredient: lemon, quantity: 4 },
    ],
  }).save();
  await new Cocktail({
    name: "Cuba Libre",
    image: `${config.get("base_url")}/images/cocktails/cuba_libre.jpg`,
    recipe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales pulvinar justo quis feugiat. Quisque leo lacus, ornare quis lobortis et, venenatis ullamcorper erat. Proin id est euismod, convallis risus ut, commodo velit. Suspendisse aliquet lorem id sem mollis molestie. In in justo at dolor dictum bibendum vel ut urna. Phasellus aliquam vulputate libero, eu varius tortor suscipit eu. Suspendisse eu libero ut quam efficitur consequat. Maecenas ac mauris sit amet tellus fringilla sodales. Cras ac fermentum felis, quis accumsan velit. Vivamus id quam tristique, finibus elit feugiat, suscipit sapien. Vestibulum ut accumsan mauris. Aliquam iaculis elit id vestibulum fringilla. Nulla vitae dictum erat.",
    components: [
      { ingredient: rum, quantity: 80 },
      { ingredient: coke, quantity: 120 },
    ],
  }).save();
  await new Cocktail({
    name: "Pisco Sour",
    image: `${config.get("base_url")}/images/cocktails/pisco_sour.jpg`,
    recipe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales pulvinar justo quis feugiat. Quisque leo lacus, ornare quis lobortis et, venenatis ullamcorper erat. Proin id est euismod, convallis risus ut, commodo velit. Suspendisse aliquet lorem id sem mollis molestie. In in justo at dolor dictum bibendum vel ut urna. Phasellus aliquam vulputate libero, eu varius tortor suscipit eu. Suspendisse eu libero ut quam efficitur consequat. Maecenas ac mauris sit amet tellus fringilla sodales. Cras ac fermentum felis, quis accumsan velit. Vivamus id quam tristique, finibus elit feugiat, suscipit sapien. Vestibulum ut accumsan mauris. Aliquam iaculis elit id vestibulum fringilla. Nulla vitae dictum erat.",
    components: [
      { ingredient: pisco, quantity: 100 },
      { ingredient: lemon, quantity: 6 },
    ],
  }).save();
  await new Cocktail({
    name: "Piscola",
    image: `${config.get("base_url")}/images/cocktails/piscola.jpg`,
    recipe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales pulvinar justo quis feugiat. Quisque leo lacus, ornare quis lobortis et, venenatis ullamcorper erat. Proin id est euismod, convallis risus ut, commodo velit. Suspendisse aliquet lorem id sem mollis molestie. In in justo at dolor dictum bibendum vel ut urna. Phasellus aliquam vulputate libero, eu varius tortor suscipit eu. Suspendisse eu libero ut quam efficitur consequat. Maecenas ac mauris sit amet tellus fringilla sodales. Cras ac fermentum felis, quis accumsan velit. Vivamus id quam tristique, finibus elit feugiat, suscipit sapien. Vestibulum ut accumsan mauris. Aliquam iaculis elit id vestibulum fringilla. Nulla vitae dictum erat.",
    components: [
      { ingredient: pisco, quantity: 100 },
      { ingredient: coke, quantity: 100 },
    ],
  }).save();
  await new Cocktail({
    name: "Tequila Sunrise",
    image: `${config.get("base_url")}/images/cocktails/tequila_sunrise.jpg`,
    recipe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales pulvinar justo quis feugiat. Quisque leo lacus, ornare quis lobortis et, venenatis ullamcorper erat. Proin id est euismod, convallis risus ut, commodo velit. Suspendisse aliquet lorem id sem mollis molestie. In in justo at dolor dictum bibendum vel ut urna. Phasellus aliquam vulputate libero, eu varius tortor suscipit eu. Suspendisse eu libero ut quam efficitur consequat. Maecenas ac mauris sit amet tellus fringilla sodales. Cras ac fermentum felis, quis accumsan velit. Vivamus id quam tristique, finibus elit feugiat, suscipit sapien. Vestibulum ut accumsan mauris. Aliquam iaculis elit id vestibulum fringilla. Nulla vitae dictum erat.",
    components: [
      { ingredient: tequila, quantity: 100 },
      { ingredient: orangeJuice, quantity: 100 },
      { ingredient: grenadine, quantity: 100 },
    ],
  }).save();
  await new Cocktail({
    name: "Mojito",
    image: `${config.get("base_url")}/images/cocktails/mojito.jpg`,
    recipe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales pulvinar justo quis feugiat. Quisque leo lacus, ornare quis lobortis et, venenatis ullamcorper erat. Proin id est euismod, convallis risus ut, commodo velit. Suspendisse aliquet lorem id sem mollis molestie. In in justo at dolor dictum bibendum vel ut urna. Phasellus aliquam vulputate libero, eu varius tortor suscipit eu. Suspendisse eu libero ut quam efficitur consequat. Maecenas ac mauris sit amet tellus fringilla sodales. Cras ac fermentum felis, quis accumsan velit. Vivamus id quam tristique, finibus elit feugiat, suscipit sapien. Vestibulum ut accumsan mauris. Aliquam iaculis elit id vestibulum fringilla. Nulla vitae dictum erat.",
    components: [
      { ingredient: rum, quantity: 100 },
      { ingredient: mintLeaves, quantity: 100 },
      { ingredient: lemon, quantity: 100 },
    ],
  }).save();
  await new Cocktail({
    name: "Gin & Tonic",
    image: `${config.get("base_url")}/images/cocktails/gin_and_tonic.jpg`,
    recipe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales pulvinar justo quis feugiat. Quisque leo lacus, ornare quis lobortis et, venenatis ullamcorper erat. Proin id est euismod, convallis risus ut, commodo velit. Suspendisse aliquet lorem id sem mollis molestie. In in justo at dolor dictum bibendum vel ut urna. Phasellus aliquam vulputate libero, eu varius tortor suscipit eu. Suspendisse eu libero ut quam efficitur consequat. Maecenas ac mauris sit amet tellus fringilla sodales. Cras ac fermentum felis, quis accumsan velit. Vivamus id quam tristique, finibus elit feugiat, suscipit sapien. Vestibulum ut accumsan mauris. Aliquam iaculis elit id vestibulum fringilla. Nulla vitae dictum erat.",
    components: [
      { ingredient: gin, quantity: 100 },
      { ingredient: tonicWater, quantity: 100 },
    ],
  }).save();
  await new Cocktail({
    name: "Martini",
    image: `${config.get("base_url")}/images/cocktails/martini.jpg`,
    recipe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales pulvinar justo quis feugiat. Quisque leo lacus, ornare quis lobortis et, venenatis ullamcorper erat. Proin id est euismod, convallis risus ut, commodo velit. Suspendisse aliquet lorem id sem mollis molestie. In in justo at dolor dictum bibendum vel ut urna. Phasellus aliquam vulputate libero, eu varius tortor suscipit eu. Suspendisse eu libero ut quam efficitur consequat. Maecenas ac mauris sit amet tellus fringilla sodales. Cras ac fermentum felis, quis accumsan velit. Vivamus id quam tristique, finibus elit feugiat, suscipit sapien. Vestibulum ut accumsan mauris. Aliquam iaculis elit id vestibulum fringilla. Nulla vitae dictum erat.",
    components: [
      { ingredient: gin, quantity: 100 },
      { ingredient: vermut, quantity: 100 },
    ],
  }).save();
  await new Cocktail({
    name: "Vodka Martini",
    image: `${config.get("base_url")}/images/cocktails/vodka_martini.jpg`,
    recipe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales pulvinar justo quis feugiat. Quisque leo lacus, ornare quis lobortis et, venenatis ullamcorper erat. Proin id est euismod, convallis risus ut, commodo velit. Suspendisse aliquet lorem id sem mollis molestie. In in justo at dolor dictum bibendum vel ut urna. Phasellus aliquam vulputate libero, eu varius tortor suscipit eu. Suspendisse eu libero ut quam efficitur consequat. Maecenas ac mauris sit amet tellus fringilla sodales. Cras ac fermentum felis, quis accumsan velit. Vivamus id quam tristique, finibus elit feugiat, suscipit sapien. Vestibulum ut accumsan mauris. Aliquam iaculis elit id vestibulum fringilla. Nulla vitae dictum erat.",
    components: [
      { ingredient: vodka, quantity: 100 },
      { ingredient: vermut, quantity: 100 },
    ],
  }).save();
  await new Cocktail({
    name: "Caipirinha",
    image: `${config.get("base_url")}/images/cocktails/caipirinha.jpg`,
    recipe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales pulvinar justo quis feugiat. Quisque leo lacus, ornare quis lobortis et, venenatis ullamcorper erat. Proin id est euismod, convallis risus ut, commodo velit. Suspendisse aliquet lorem id sem mollis molestie. In in justo at dolor dictum bibendum vel ut urna. Phasellus aliquam vulputate libero, eu varius tortor suscipit eu. Suspendisse eu libero ut quam efficitur consequat. Maecenas ac mauris sit amet tellus fringilla sodales. Cras ac fermentum felis, quis accumsan velit. Vivamus id quam tristique, finibus elit feugiat, suscipit sapien. Vestibulum ut accumsan mauris. Aliquam iaculis elit id vestibulum fringilla. Nulla vitae dictum erat.",
    components: [
      { ingredient: cachaca, quantity: 100 },
      { ingredient: lemon, quantity: 100 },
      { ingredient: sugar, quantity: 100 },
    ],
  }).save();
  await new Cocktail({
    name: "Side Car",
    image: `${config.get("base_url")}/images/cocktails/side_car.jpg`,
    recipe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales pulvinar justo quis feugiat. Quisque leo lacus, ornare quis lobortis et, venenatis ullamcorper erat. Proin id est euismod, convallis risus ut, commodo velit. Suspendisse aliquet lorem id sem mollis molestie. In in justo at dolor dictum bibendum vel ut urna. Phasellus aliquam vulputate libero, eu varius tortor suscipit eu. Suspendisse eu libero ut quam efficitur consequat. Maecenas ac mauris sit amet tellus fringilla sodales. Cras ac fermentum felis, quis accumsan velit. Vivamus id quam tristique, finibus elit feugiat, suscipit sapien. Vestibulum ut accumsan mauris. Aliquam iaculis elit id vestibulum fringilla. Nulla vitae dictum erat.",
    components: [
      { ingredient: cognac, quantity: 100 },
      { ingredient: lemon, quantity: 100 },
      { ingredient: sugar, quantity: 100 },
    ],
  }).save();

  //Clean up
  mongoose.disconnect();
  console.info("Done!");
}

run();
