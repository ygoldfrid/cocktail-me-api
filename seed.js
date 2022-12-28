const { Cocktail } = require("./models/cocktail");
const { Ingredient } = require("./models/ingredient");
const mongoose = require("mongoose");
require("dotenv").config();

async function run() {
  //Connecting
  await mongoose.connect(process.env.DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });

  await Cocktail.deleteMany({});
  await Ingredient.deleteMany({});

  //Ingredients

  //Spirits
  const cachaca = await new Ingredient({
    _id: "5eecfb00f3aa0f0b0896e06e",
    name: "Cachaça",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/cachaca.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/cachaca.jpg",
      },
    ],
    category: "Spirits",
  }).save();
  const cognac = await new Ingredient({
    _id: "5eecfb641e34422b4039db9c",
    name: "Cognac",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/cognac.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/cognac.jpg",
      },
    ],
    category: "Spirits",
  }).save();
  const brandy = await new Ingredient({
    _id: "5eecfb641e34422b4039db9d",
    name: "Brandy",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/brandy.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/brandy.jpg",
      },
    ],
    category: "Spirits",
  }).save();
  const bourbon = await new Ingredient({
    _id: "5ef6816942f15a0fe0f49529",
    name: "Bourbon",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/bourbon.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/bourbon.jpg",
      },
    ],
    category: "Spirits",
  }).save();
  const gin = await new Ingredient({
    _id: "5eecfb641e34422b4039db9e",
    name: "Gin",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/gin.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/gin.jpg",
      },
    ],
    category: "Spirits",
  }).save();
  const pisco = await new Ingredient({
    _id: "5eecfb641e34422b4039db9f",
    name: "Pisco",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/pisco.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/pisco.jpg",
      },
    ],
    category: "Spirits",
  }).save();
  const rum = await new Ingredient({
    _id: "5eecfb641e34422b4039dba0",
    name: "Rum",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/rum.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/rum.jpg",
      },
    ],
    category: "Spirits",
  }).save();
  const tequila = await new Ingredient({
    _id: "5eecfb641e34422b4039dba1",
    name: "Tequila",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/tequila.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/tequila.jpg",
      },
    ],
    category: "Spirits",
  }).save();
  const vodka = await new Ingredient({
    _id: "5eecfb641e34422b4039dba2",
    name: "Vodka",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/vodka.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/vodka.jpg",
      },
    ],
    category: "Spirits",
  }).save();
  const white_rum = await new Ingredient({
    _id: "5eecfb641e34422b4039dba3",
    name: "White Rum",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/white_rum.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/white_rum.jpg",
      },
    ],
    category: "Spirits",
  }).save();
  const whiskey = await new Ingredient({
    _id: "5eecfb641e34422b4039dba4",
    name: "Whiskey",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/whiskey.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/whiskey.jpg",
      },
    ],
    category: "Spirits",
  }).save();

  //Liqueurs, Wines & Beer
  //Liqueurs
  const cointreau = await new Ingredient({
    _id: "5eecfb641e34422b4039dba5",
    name: "Cointreau",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/cointreau.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/cointreau.jpg",
      },
    ],
    category: "Liqueurs",
  }).save();
  const aperol = await new Ingredient({
    _id: "5ef7558895ed7456400cd11d",
    name: "Aperol",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/aperol.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/aperol.jpg",
      },
    ],
    category: "Liqueurs",
  }).save();
  const drambuie = await new Ingredient({
    _id: "5eecfb641e34422b4039dba6",
    name: "Drambuie",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/drambuie.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/drambuie.jpg",
      },
    ],
    category: "Liqueurs",
  }).save();
  const coffee_liqueur = await new Ingredient({
    _id: "5eecfb641e34422b4039dba7",
    name: "Coffee Liqueur",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/coffee_liqueur.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/coffee_liqueur.jpg",
      },
    ],
    category: "Liqueurs",
  }).save();
  const campari = await new Ingredient({
    _id: "5eecfb641e34422b4039dba8",
    name: "Campari",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/campari.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/campari.jpg",
      },
    ],
    category: "Liqueurs",
  }).save();
  //Wines
  const lillet_blanc = await new Ingredient({
    _id: "5eecfb641e34422b4039dba9",
    name: "Lillet Blanc",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/lillet_blanc.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/lillet_blanc.jpg",
      },
    ],
    category: "Wines",
  }).save();
  const dry_vermouth = await new Ingredient({
    _id: "5eecfb641e34422b4039dbaa",
    name: "Dry Vermouth",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/dry_vermouth.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/dry_vermouth.jpg",
      },
    ],
    category: "Wines",
  }).save();
  const red_vermouth = await new Ingredient({
    _id: "5eecfb641e34422b4039dbab",
    name: "Red Vermouth",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/red_vermouth.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/red_vermouth.jpg",
      },
    ],
    category: "Wines",
  }).save();
  const champagne = await new Ingredient({
    _id: "5eecfb641e34422b4039dbac",
    name: "Champagne",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/champagne.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/champagne.jpg",
      },
    ],
    category: "Wines",
  }).save();
  const prosecco = await new Ingredient({
    _id: "5ef7558895ed7456400cd125",
    name: "Prosecco",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/prosecco.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/prosecco.jpg",
      },
    ],
    category: "Wines",
  }).save();
  const red_wine = await new Ingredient({
    _id: "5eecfb641e34422b4039dbad",
    name: "Red Wine",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/red_wine.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/red_wine.jpg",
      },
    ],
    category: "Wines",
  }).save();
  const white_wine = await new Ingredient({
    _id: "5ef6816942f15a0fe0f4953a",
    name: "White Wine",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/white_wine.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/white_wine.jpg",
      },
    ],
    category: "Wines",
  }).save();
  //Beers
  const beer = await new Ingredient({
    _id: "5eecfb641e34422b4039dbae",
    name: "Beer",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/beer.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/beer.jpg",
      },
    ],
    category: "Beers",
  }).save();

  //Mixers
  //Fizzy
  const cola = await new Ingredient({
    _id: "5eecfb641e34422b4039dbaf",
    name: "Cola",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/cola.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/cola.jpg",
      },
    ],
    category: "Mixers",
  }).save();
  const soda_water = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb0",
    name: "Soda Water",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/soda_water.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/soda_water.jpg",
      },
    ],
    category: "Mixers",
  }).save();
  const tonic_water = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb1",
    name: "Tonic Water",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/tonic_water.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/tonic_water.jpg",
      },
    ],
    category: "Mixers",
  }).save();
  const grapefruit_soda = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb2",
    name: "Grapefruit Soda",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/grapefruit_soda.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/grapefruit_soda.jpg",
      },
    ],
    category: "Mixers",
  }).save();
  //Juices
  const orange_juice = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb3",
    name: "Orange Juice",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/orange_juice.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/orange_juice.jpg",
      },
    ],
    category: "Mixers",
  }).save();
  const lime_juice = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb4",
    name: "Lime Juice",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/lime_juice.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/lime_juice.jpg",
      },
    ],
    category: "Mixers",
  }).save();
  const lemon_juice = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb5",
    name: "Lemon Juice",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/lemon_juice.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/lemon_juice.jpg",
      },
    ],
    category: "Mixers",
  }).save();
  const cranberry_juice = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb6",
    name: "Cranberry Juice",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/cranberry_juice.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/cranberry_juice.jpg",
      },
    ],
    category: "Mixers",
  }).save();
  const pineapple_juice = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb7",
    name: "Pineapple Juice",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/pineapple_juice.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/pineapple_juice.jpg",
      },
    ],
    category: "Mixers",
  }).save();
  const tomato_juice = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb8",
    name: "Tomato Juice",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/tomato_juice.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/tomato_juice.jpg",
      },
    ],
    category: "Mixers",
  }).save();
  const clamato_juice = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb9",
    name: "Clamato Juice",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/clamato_juice.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/clamato_juice.jpg",
      },
    ],
    category: "Mixers",
  }).save();
  const angostura_bitter = await new Ingredient({
    _id: "5eecfb641e34422b4039dbba",
    name: "Angostura Bitter",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/angostura_bitter.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/angostura_bitter.jpg",
      },
    ],
    category: "Mixers",
  }).save();
  //Syrups
  const grenadine = await new Ingredient({
    _id: "5eecfb641e34422b4039dbbb",
    name: "Grenadine",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/grenadine.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/grenadine.jpg",
      },
    ],
    category: "Syrups",
  }).save();
  const sugar_syrup = await new Ingredient({
    _id: "5eecfb641e34422b4039dbbc",
    name: "Sugar Syrup",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/sugar_syrup.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/sugar_syrup.jpg",
      },
    ],
    category: "Syrups",
  }).save();
  const orgeat_syrup = await new Ingredient({
    _id: "5eecfb641e34422b4039dbbd",
    name: "Orgeat Syrup",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/orgeat_syrup.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/orgeat_syrup.jpg",
      },
    ],
    category: "Syrups",
  }).save();

  //Others
  //Fresh
  const lemon = await new Ingredient({
    _id: "5eecfb641e34422b4039dbbe",
    name: "Lemon",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/lemon.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/lemon.jpg",
      },
    ],
    category: "Others",
  }).save();
  const lime = await new Ingredient({
    _id: "5eecfb641e34422b4039dbbf",
    name: "Lime",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/lime.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/lime.jpg",
      },
    ],
    category: "Others",
  }).save();
  const fruit_mix = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc0",
    name: "Fruit Mix",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/fruit_mix.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/fruit_mix.jpg",
      },
    ],
    category: "Others",
  }).save();
  const mint = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc1",
    name: "Mint",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/mint.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/mint.jpg",
      },
    ],
    category: "Others",
  }).save();
  const olives = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc2",
    name: "Olives",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/olives.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/olives.jpg",
      },
    ],
    category: "Others",
  }).save();
  const celery = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc3",
    name: "Celery",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/celery.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/celery.jpg",
      },
    ],
    category: "Others",
  }).save();
  const egg_white = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc4",
    name: "Egg White",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/egg_white.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/egg_white.jpg",
      },
    ],
    category: "Others",
  }).save();
  const coconut_cream = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc5",
    name: "Coconut Cream",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/coconut_cream.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/coconut_cream.jpg",
      },
    ],
    category: "Others",
  }).save();
  const fresh_cream = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc6",
    name: "Cream",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/fresh_cream.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/fresh_cream.jpg",
      },
    ],
    category: "Others",
  }).save();
  const coffee = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc7",
    name: "Coffee",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/coffee.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/coffee.jpg",
      },
    ],
    category: "Others",
  }).save();
  //Sauces
  const worcestershire = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc8",
    name: "Worcestershire Sauce",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/worcestershire.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/worcestershire.jpg",
      },
    ],
    category: "Others",
  }).save();
  const hot_sauce = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc9",
    name: "Hot Sauce",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/hot_sauce.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/hot_sauce.jpg",
      },
    ],
    category: "Others",
  }).save();
  //Powders
  const sugar = await new Ingredient({
    _id: "5eecfb641e34422b4039dbca",
    name: "Sugar",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/sugar.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/sugar.jpg",
      },
    ],
    category: "Others",
  }).save();
  const salt = await new Ingredient({
    _id: "5eecfb641e34422b4039dbcb",
    name: "Salt",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/salt.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/salt.jpg",
      },
    ],
    category: "Others",
  }).save();
  const pepper = await new Ingredient({
    _id: "5eecfb641e34422b4039dbcc",
    name: "Pepper",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/pepper.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/pepper.jpg",
      },
    ],
    category: "Others",
  }).save();
  const chilly_powder = await new Ingredient({
    _id: "5eecfb641e34422b4039dbcd",
    name: "Chilly Powder",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/ingredients/chilly_powder.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/ingredients/chilly_powder.jpg",
      },
    ],
    category: "Others",
  }).save();

  //Cocktails
  await new Cocktail({
    _id: "5ef7558895ed7456400cd148",
    name: "Aperol Spritz",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/aperol_spritz.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/aperol_spritz.jpg",
      },
    ],
    preparation: [
      "Build all ingredients into a wine glass filled with ice.",
      "Stir gently.",
    ],
    components: [
      { ingredient: prosecco, measure: "90 ml" },
      { ingredient: aperol, measure: "60 ml" },
      { ingredient: soda_water, measure: "a splash" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dbce",
    name: "Michelada",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/michelada.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/michelada.jpg",
      },
    ],
    preparation: [
      "Run a lime wedge around the rim of a glass and dip in coarse sea salt and chili powder.",
      "Fill beer glass with ice cubes.",
      "Add the tomato juice, lime juice, Worcestershire sauce, hot sauce and a dash of chili powder.",
      "Top with your favorite beer. Stir and enjoy immediately.",
    ],
    components: [
      { ingredient: beer, measure: "350 ml" },
      { ingredient: clamato_juice, measure: "150 ml" },
      { ingredient: lime, measure: "cut in 4" },
      { ingredient: hot_sauce, measure: "4 drops" },
      { ingredient: chilly_powder, measure: "1 ts" },
      { ingredient: worcestershire, measure: "4 drops" },
      { ingredient: salt, measure: "2 ts" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dbd7",
    name: "Margarita",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/margarita.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/margarita.jpg",
      },
    ],
    preparation: [
      "Pour all ingredients into shaker with ice.",
      "Shake well and strain into cocktail glass rimmed with salt.",
    ],
    components: [
      { ingredient: tequila, measure: "50 ml" },
      { ingredient: cointreau, measure: "50 ml" },
      { ingredient: lime_juice, measure: "50 ml" },
      { ingredient: salt, measure: "1 ts" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dbdc",
    name: "Cuba Libre",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/cuba_libre.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/cuba_libre.jpg",
      },
    ],
    preparation: [
      "Build all ingredients in a highball glass filled with ice.",
      "Garnish with lime wedge.",
    ],
    components: [
      { ingredient: white_rum, measure: "50 ml" },
      { ingredient: cola, measure: "120 ml" },
      { ingredient: lime_juice, measure: "10 ml" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dbe0",
    name: "Pisco Sour",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/pisco_sour.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/pisco_sour.jpg",
      },
    ],
    preparation: [
      "Vigorously shake contents in a cocktail shaker with ice cubes.",
      "Strain into a glass and garnish with bitters.",
    ],
    components: [
      { ingredient: pisco, measure: "60 ml" },
      { ingredient: lime_juice, measure: "30 ml" },
      { ingredient: sugar_syrup, measure: "20 ml" },
      { ingredient: egg_white, measure: "1" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dbe5",
    name: "Piscola",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/piscola.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/piscola.jpg",
      },
    ],
    preparation: [
      "Build all ingredients in a highball glass filled with ice.",
      "Garnish with lime wedge.",
    ],
    components: [
      { ingredient: pisco, measure: "80 ml" },
      { ingredient: cola, measure: "120 ml" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dbe8",
    name: "Tequila Sunrise",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/tequila_sunrise.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/tequila_sunrise.jpg",
      },
    ],
    preparation: [
      "Pour the tequila and orange juice into glass over ice.",
      "Add the grenadine, which will sink to the bottom.",
      "Stir gently to create the sunrise effect.",
      "Garnish and serve.",
    ],
    components: [
      { ingredient: tequila, measure: "45 ml" },
      { ingredient: orange_juice, measure: "90 ml" },
      { ingredient: grenadine, measure: "15 ml" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dbec",
    name: "Mojito",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/mojito.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/mojito.jpg",
      },
    ],
    preparation: [
      "Muddle mint leaves with sugar and lime juice.",
      "Add a splash of soda water and fill the glass with cracked ice.",
      "Pour the rum and top with soda water.",
      "Garnish with sprig of mint leaves and lemon slice.",
      "Serve with straw.",
    ],
    components: [
      { ingredient: white_rum, measure: "40 ml" },
      { ingredient: lime_juice, measure: "30 ml" },
      { ingredient: mint, measure: "6 leaves" },
      { ingredient: sugar, measure: "2 ts" },
      { ingredient: soda_water, measure: "Top up" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dbf2",
    name: "Gin & Tonic",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/gin_and_tonic.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/gin_and_tonic.jpg",
      },
    ],
    preparation: ["In a glass filled with ice cubes, add gin and tonic."],
    components: [
      { ingredient: gin, measure: "50 ml" },
      { ingredient: tonic_water, measure: "120 ml" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dbf5",
    name: "Martini",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/martini.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/martini.jpg",
      },
    ],
    preparation: [
      "Pour all ingredients into mixing glass with ice cubes. Shake well.",
      "Strain into chilled martini cocktail glass.",
      "Squeeze oil from lemon peel onto the drink, or garnish with olive.",
    ],
    components: [
      { ingredient: gin, measure: "60 ml" },
      { ingredient: dry_vermouth, measure: "10 ml" },
      { ingredient: olives, measure: "1" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dbf9",
    name: "Vodka Martini",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/vodka_martini.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/vodka_martini.jpg",
      },
    ],
    preparation: [
      "Pour all ingredients into mixing glass with ice cubes. Shake well.",
      "Strain in chilled martini cocktail glass.",
      "Squeeze oil from lemon peel onto the drink, or garnish with olive.",
    ],
    components: [
      { ingredient: vodka, measure: "60 ml" },
      { ingredient: dry_vermouth, measure: "10 ml" },
      { ingredient: olives, measure: "1" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dbfd",
    name: "Caipirinha",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/caipirinha.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/caipirinha.jpg",
      },
    ],
    preparation: [
      "Place lime and sugar into old fashioned glass and muddle (mash the two ingredients together using a muddler or a wooden spoon).",
      "Fill the glass with ice and add the Cachaça.",
    ],
    components: [
      { ingredient: cachaca, measure: "50 ml" },
      { ingredient: lime, measure: "cut in 4" },
      { ingredient: sugar, measure: "2 ts" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dc01",
    name: "Caipiroska",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/caipiroska.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/caipiroska.jpg",
      },
    ],
    preparation: [
      "Place lime and sugar into old fashioned glass and muddle (mash the two ingredients together using a muddler or a wooden spoon).",
      "Fill the glass with ice and add the Vodka.",
    ],
    components: [
      { ingredient: vodka, measure: "50 ml" },
      { ingredient: lime, measure: "cut in 4" },
      { ingredient: sugar, measure: "2 ts" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dc05",
    name: "Side Car",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/side_car.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/side_car.jpg",
      },
    ],
    preparation: [
      "Pour all ingredients into cocktail shaker filled with ice.",
      "Shake well and strain into cocktail glass.",
    ],
    components: [
      { ingredient: cognac, measure: "50 ml" },
      { ingredient: cointreau, measure: "20 ml" },
      { ingredient: lemon_juice, measure: "20 ml" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dc09",
    name: "Long Island Iced Tea",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/long_island.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/long_island.jpg",
      },
    ],
    preparation: [
      "Add all ingredients into highball glass filled with ice. Stir gently.",
      "Optionally garnish with lemon slice.",
    ],
    components: [
      { ingredient: tequila, measure: "15 ml" },
      { ingredient: vodka, measure: "15 ml" },
      { ingredient: white_rum, measure: "15 ml" },
      { ingredient: cointreau, measure: "15 ml" },
      { ingredient: gin, measure: "15 ml" },
      { ingredient: lemon_juice, measure: "25 ml" },
      { ingredient: sugar_syrup, measure: "30 ml" },
      { ingredient: cola, measure: "Top up" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dc12",
    name: "Cosmopolitan",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/cosmopolitan.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/cosmopolitan.jpg",
      },
    ],
    preparation: [
      "Shake all ingredients in cocktail shaker filled with ice.",
      "Strain into a large cocktail glass.",
      "Garnish with lime slice.",
    ],
    components: [
      { ingredient: vodka, measure: "40 ml" },
      { ingredient: cointreau, measure: "15 ml" },
      { ingredient: lime_juice, measure: "15 ml" },
      { ingredient: cranberry_juice, measure: "15 ml" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dc17",
    name: "Daiquiri",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/daiquiri.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/daiquiri.jpg",
      },
    ],
    preparation: [
      "In a cocktail shaker add all ingredients.",
      "Stir well to dissolve the sugar.",
      "Add ice and shake.",
      "Strain into chilled cocktail glass.",
    ],
    components: [
      { ingredient: white_rum, measure: "60 ml" },
      { ingredient: lime_juice, measure: "20 ml" },
      { ingredient: sugar, measure: "2 ts" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dc1b",
    name: "Mai Tai",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/mai_tai.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/mai_tai.jpg",
      },
    ],
    preparation: [
      "Shake all ingredients with ice.",
      "Strain into glass.",
      "Garnish and serve with straw.",
    ],
    components: [
      { ingredient: rum, measure: "60 ml" },
      { ingredient: cointreau, measure: "15 ml" },
      { ingredient: orgeat_syrup, measure: "15 ml" },
      { ingredient: sugar_syrup, measure: "10 ml" },
      { ingredient: lime_juice, measure: "15 ml" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dc21",
    name: "Piña Colada",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/pina_colada.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/pina_colada.jpg",
      },
    ],
    preparation: [
      "Blend all the ingredients with ice in an electric blender.",
      "Pour into a large goblet or Hurricane glass and serve.",
    ],
    components: [
      { ingredient: white_rum, measure: "50 ml" },
      { ingredient: coconut_cream, measure: "30 ml" },
      { ingredient: pineapple_juice, measure: "50 ml" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dc25",
    name: "Paloma",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/paloma.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/paloma.jpg",
      },
    ],
    preparation: ["Stir together and serve over ice."],
    components: [
      { ingredient: tequila, measure: "50 ml" },
      { ingredient: grapefruit_soda, measure: "150 ml" },
      { ingredient: lime, measure: "to taste" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dc28",
    name: "Black Russian",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/black_russian.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/black_russian.jpg",
      },
    ],
    preparation: [
      "Pour the ingredients into an old fashioned glass filled with ice cubes.",
      "Stir gently.",
    ],
    components: [
      { ingredient: vodka, measure: "40 ml" },
      { ingredient: coffee_liqueur, measure: "20 ml" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dc2b",
    name: "Bloody Mary",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/bloody_mary.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/bloody_mary.jpg",
      },
    ],
    preparation: [
      "Stirring gently, pour all ingredients into highball glass.",
      "Garnish.",
    ],
    components: [
      { ingredient: vodka, measure: "45 ml" },
      { ingredient: tomato_juice, measure: "90 ml" },
      { ingredient: lemon_juice, measure: "15 ml" },
      { ingredient: worcestershire, measure: "3 drops" },
      { ingredient: celery, measure: "1 sprig" },
      { ingredient: hot_sauce, measure: "to taste" },
      { ingredient: pepper, measure: "to taste" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dc33",
    name: "Irish Coffee",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/irish_coffee.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/irish_coffee.jpg",
      },
    ],
    preparation: [
      "Heat the coffee, whiskey and sugar. Do not boil.",
      "Pour into glass and top with cream.",
      "Serve hot.",
    ],
    components: [
      { ingredient: whiskey, measure: "40 ml" },
      { ingredient: coffee, measure: "80 ml" },
      { ingredient: fresh_cream, measure: "30 ml" },
      { ingredient: sugar, measure: "1 ts" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dc38",
    name: "Manhattan",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/manhattan.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/manhattan.jpg",
      },
    ],
    preparation: [
      "Stirred over ice, strained into a chilled glass, garnished, and served up.",
    ],
    components: [
      { ingredient: whiskey, measure: "50 ml" },
      { ingredient: red_vermouth, measure: "20 ml" },
      { ingredient: angostura_bitter, measure: "a dash" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dc3c",
    name: "Old Fashioned",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/old_fashioned.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/old_fashioned.jpg",
      },
    ],
    preparation: [
      "Place sugar cube in old fashioned glass and saturate with bitters.",
      "Add a dash of plain water. Muddle until dissolved.",
      "Fill the glass with ice cubes and add whiskey.",
      "Garnish with orange twist, and a cocktail cherry.",
    ],
    components: [
      { ingredient: bourbon, measure: "45 ml" },
      { ingredient: angostura_bitter, measure: "2 dashes" },
      { ingredient: sugar, measure: "1 ts" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dc40",
    name: "Rusty Nail",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/rusty_nail.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/rusty_nail.jpg",
      },
    ],
    preparation: [
      "Pour all ingredients directly into old-fashioned glass filled with ice.",
      "Stir gently.",
      "Garnish with a lemon twist",
    ],
    components: [
      { ingredient: whiskey, measure: "45 ml" },
      { ingredient: drambuie, measure: "30 ml" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dc43",
    name: "Whiskey Sour",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/whiskey_sour.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/whiskey_sour.jpg",
      },
    ],
    preparation: [
      "Shake with ice.",
      "Strain into chilled glass, garnish and serve.",
    ],
    components: [
      { ingredient: bourbon, measure: "45 ml" },
      { ingredient: lemon_juice, measure: "30 ml" },
      { ingredient: sugar_syrup, measure: "15 ml" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dc47",
    name: "Vesper",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/vesper.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/vesper.jpg",
      },
    ],
    preparation: [
      "Shake and strain into a chilled cocktail glass.",
      "Garnish and serve.",
    ],
    components: [
      { ingredient: gin, measure: "45 ml" },
      { ingredient: vodka, measure: "15 ml" },
      { ingredient: lillet_blanc, measure: "10 ml" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dc4b",
    name: "Negroni",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/negroni.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/negroni.jpg",
      },
    ],
    preparation: ["Stir into glass over ice, garnish and serve."],
    components: [
      { ingredient: gin, measure: "30 ml" },
      { ingredient: red_vermouth, measure: "30 ml" },
      { ingredient: campari, measure: "30 ml" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dc4f",
    name: "John Collins",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/john_collins.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/john_collins.jpg",
      },
    ],
    preparation: [
      "Pour all ingredients directly into highball glass filled with ice.",
      "Stir gently.",
      "Garnish.",
      "Add a dash of Angostura bitters.",
    ],
    components: [
      { ingredient: gin, measure: "45 ml" },
      { ingredient: lemon_juice, measure: "30 ml" },
      { ingredient: sugar_syrup, measure: "15 ml" },
      { ingredient: soda_water, measure: "60 ml" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dc54",
    name: "Mimosa",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/mimosa.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/mimosa.jpg",
      },
    ],
    preparation: [
      "Ensure both ingredients are well chilled, then mix into the glass. Serve cold.",
    ],
    components: [
      { ingredient: champagne, measure: "75 ml" },
      { ingredient: orange_juice, measure: "75 ml" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dc57",
    name: "Americano",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/americano.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/americano.jpg",
      },
    ],
    preparation: [
      "Pour the Campari and Vermouth over ice into a highball glass.",
      "Add a splash of soda water and garnish with half orange slice and a lemon twist.",
    ],
    components: [
      { ingredient: campari, measure: "30 ml" },
      { ingredient: red_vermouth, measure: "30 ml" },
      { ingredient: soda_water, measure: "Top up" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dc5b",
    name: "Sangria",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/sangria.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/sangria.jpg",
      },
    ],
    preparation: [
      "Cut the fruit in small pieces.",
      "Stir with the rest of the ingredients.",
      "Refrigerate for 2 to 8 hours for maximum fruity flavor.",
    ],
    components: [
      { ingredient: red_wine, measure: "1 bottle" },
      { ingredient: cognac, measure: "50 ml" },
      { ingredient: orange_juice, measure: "200 ml" },
      { ingredient: fruit_mix, measure: "to taste" },
      { ingredient: sugar, measure: "to taste" },
    ],
  }).save();
  await new Cocktail({
    _id: "5ef68228cb806827f42ed14a",
    name: "Screwdriver",
    images: [
      {
        url: "https://res.cloudinary.com/ygoldfrid/image/upload/v1595180738/cocktails/screwdriver.jpg",
        thumbnailUrl: "https://res.cloudinary.com/ygoldfrid/image/upload/t_thumb/v1595180738/cocktails/screwdriver.jpg",
      },
    ],
    preparation: ["Mix in a highball glass with ice.", "Garnish and serve."],
    components: [
      { ingredient: vodka, measure: "50 ml" },
      { ingredient: orange_juice, measure: "100 ml" },
    ],
  }).save();

  //Alternatives
  cognac.alternatives = [brandy];
  await cognac.save();
  brandy.alternatives = [cognac];
  await brandy.save();
  rum.alternatives = [white_rum];
  await rum.save();
  white_rum.alternatives = [rum];
  await white_rum.save();
  sugar.alternatives = [sugar_syrup];
  await sugar.save();
  sugar_syrup.alternatives = [sugar];
  await sugar_syrup.save();
  lime.alternatives = [lemon];
  await lime.save();
  lemon.alternatives = [lime];
  await lemon.save();
  lime_juice.alternatives = [lemon_juice, lime, lemon];
  await lime_juice.save();
  lemon_juice.alternatives = [lime_juice, lemon, lime];
  await lemon_juice.save();
  clamato_juice.alternatives = [tomato_juice];
  await clamato_juice.save();
  tomato_juice.alternatives = [clamato_juice];
  await tomato_juice.save();
  lillet_blanc.alternatives = [white_wine];
  await lillet_blanc.save();
  bourbon.alternatives = [whiskey];
  await bourbon.save();
  whiskey.alternatives = [bourbon];
  await whiskey.save();
  prosecco.alternatives = [champagne];
  await prosecco.save();

  //Clean up
  mongoose.disconnect();
  console.info("Done!");
}

run();
