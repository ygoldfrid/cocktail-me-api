const { Cocktail } = require("./models/cocktail");
const { Ingredient } = require("./models/ingredient");
const mongoose = require("mongoose");

async function run() {
  //Connecting
  await mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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
        url: "/images/ingredients/cachaca_full.jpg",
        thumbnailUrl: "/images/ingredients/cachaca_thumb.jpg",
      },
    ],
    category: "Spirits",
  }).save();
  const cognac = await new Ingredient({
    _id: "5eecfb641e34422b4039db9c",
    name: "Cognac",
    images: [
      {
        url: "/images/ingredients/cognac_full.jpg",
        thumbnailUrl: "/images/ingredients/cognac_thumb.jpg",
      },
    ],
    category: "Spirits",
  }).save();
  const brandy = await new Ingredient({
    _id: "5eecfb641e34422b4039db9d",
    name: "Brandy",
    images: [
      {
        url: "/images/ingredients/brandy_full.jpg",
        thumbnailUrl: "/images/ingredients/brandy_thumb.jpg",
      },
    ],
    category: "Spirits",
  }).save();
  const bourbon = await new Ingredient({
    _id: "5ef6816942f15a0fe0f49529",
    name: "Bourbon",
    images: [
      {
        url: "/images/ingredients/bourbon_full.jpg",
        thumbnailUrl: "/images/ingredients/bourbon_thumb.jpg",
      },
    ],
    category: "Spirits",
  }).save();
  const gin = await new Ingredient({
    _id: "5eecfb641e34422b4039db9e",
    name: "Gin",
    images: [
      {
        url: "/images/ingredients/gin_full.jpg",
        thumbnailUrl: "/images/ingredients/gin_thumb.jpg",
      },
    ],
    category: "Spirits",
  }).save();
  const pisco = await new Ingredient({
    _id: "5eecfb641e34422b4039db9f",
    name: "Pisco",
    images: [
      {
        url: "/images/ingredients/pisco_full.jpg",
        thumbnailUrl: "/images/ingredients/pisco_thumb.jpg",
      },
    ],
    category: "Spirits",
  }).save();
  const rum = await new Ingredient({
    _id: "5eecfb641e34422b4039dba0",
    name: "Rum",
    images: [
      {
        url: "/images/ingredients/rum_full.jpg",
        thumbnailUrl: "/images/ingredients/rum_thumb.jpg",
      },
    ],
    category: "Spirits",
  }).save();
  const tequila = await new Ingredient({
    _id: "5eecfb641e34422b4039dba1",
    name: "Tequila",
    images: [
      {
        url: "/images/ingredients/tequila_full.jpg",
        thumbnailUrl: "/images/ingredients/tequila_thumb.jpg",
      },
    ],
    category: "Spirits",
  }).save();
  const vodka = await new Ingredient({
    _id: "5eecfb641e34422b4039dba2",
    name: "Vodka",
    images: [
      {
        url: "/images/ingredients/vodka_full.jpg",
        thumbnailUrl: "/images/ingredients/vodka_thumb.jpg",
      },
    ],
    category: "Spirits",
  }).save();
  const white_rum = await new Ingredient({
    _id: "5eecfb641e34422b4039dba3",
    name: "White Rum",
    images: [
      {
        url: "/images/ingredients/white_rum_full.jpg",
        thumbnailUrl: "/images/ingredients/white_rum_thumb.jpg",
      },
    ],
    category: "Spirits",
  }).save();
  const whiskey = await new Ingredient({
    _id: "5eecfb641e34422b4039dba4",
    name: "Whiskey",
    images: [
      {
        url: "/images/ingredients/whiskey_full.jpg",
        thumbnailUrl: "/images/ingredients/whiskey_thumb.jpg",
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
        url: "/images/ingredients/cointreau_full.jpg",
        thumbnailUrl: "/images/ingredients/cointreau_thumb.jpg",
      },
    ],
    category: "Liqueurs",
  }).save();
  const aperol = await new Ingredient({
    _id: "5ef7558895ed7456400cd11d",
    name: "Aperol",
    images: [
      {
        url: "/images/ingredients/aperol_full.jpg",
        thumbnailUrl: "/images/ingredients/aperol_thumb.jpg",
      },
    ],
    category: "Liqueurs",
  }).save();
  const drambuie = await new Ingredient({
    _id: "5eecfb641e34422b4039dba6",
    name: "Drambuie",
    images: [
      {
        url: "/images/ingredients/drambuie_full.jpg",
        thumbnailUrl: "/images/ingredients/drambuie_thumb.jpg",
      },
    ],
    category: "Liqueurs",
  }).save();
  const coffee_liqueur = await new Ingredient({
    _id: "5eecfb641e34422b4039dba7",
    name: "Coffee Liqueur",
    images: [
      {
        url: "/images/ingredients/coffee_liqueur_full.jpg",
        thumbnailUrl: "/images/ingredients/coffee_liqueur_thumb.jpg",
      },
    ],
    category: "Liqueurs",
  }).save();
  const campari = await new Ingredient({
    _id: "5eecfb641e34422b4039dba8",
    name: "Campari",
    images: [
      {
        url: "/images/ingredients/campari_full.jpg",
        thumbnailUrl: "/images/ingredients/campari_thumb.jpg",
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
        url: "/images/ingredients/lillet_blanc_full.jpg",
        thumbnailUrl: "/images/ingredients/lillet_blanc_thumb.jpg",
      },
    ],
    category: "Wines",
  }).save();
  const dry_vermouth = await new Ingredient({
    _id: "5eecfb641e34422b4039dbaa",
    name: "Dry Vermouth",
    images: [
      {
        url: "/images/ingredients/dry_vermouth_full.jpg",
        thumbnailUrl: "/images/ingredients/dry_vermouth_thumb.jpg",
      },
    ],
    category: "Wines",
  }).save();
  const red_vermouth = await new Ingredient({
    _id: "5eecfb641e34422b4039dbab",
    name: "Red Vermouth",
    images: [
      {
        url: "/images/ingredients/red_vermouth_full.jpg",
        thumbnailUrl: "/images/ingredients/red_vermouth_thumb.jpg",
      },
    ],
    category: "Wines",
  }).save();
  const champagne = await new Ingredient({
    _id: "5eecfb641e34422b4039dbac",
    name: "Champagne",
    images: [
      {
        url: "/images/ingredients/champagne_full.jpg",
        thumbnailUrl: "/images/ingredients/champagne_thumb.jpg",
      },
    ],
    category: "Wines",
  }).save();
  const prosecco = await new Ingredient({
    _id: "5ef7558895ed7456400cd125",
    name: "Prosecco",
    images: [
      {
        url: "/images/ingredients/prosecco_full.jpg",
        thumbnailUrl: "/images/ingredients/prosecco_thumb.jpg",
      },
    ],
    category: "Wines",
  }).save();
  const red_wine = await new Ingredient({
    _id: "5eecfb641e34422b4039dbad",
    name: "Red Wine",
    images: [
      {
        url: "/images/ingredients/red_wine_full.jpg",
        thumbnailUrl: "/images/ingredients/red_wine_thumb.jpg",
      },
    ],
    category: "Wines",
  }).save();
  const white_wine = await new Ingredient({
    _id: "5ef6816942f15a0fe0f4953a",
    name: "White Wine",
    images: [
      {
        url: "/images/ingredients/white_wine_full.jpg",
        thumbnailUrl: "/images/ingredients/white_wine_thumb.jpg",
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
        url: "/images/ingredients/beer_full.jpg",
        thumbnailUrl: "/images/ingredients/beer_thumb.jpg",
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
        url: "/images/ingredients/cola_full.jpg",
        thumbnailUrl: "/images/ingredients/cola_thumb.jpg",
      },
    ],
    category: "Mixers",
  }).save();
  const soda_water = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb0",
    name: "Soda Water",
    images: [
      {
        url: "/images/ingredients/soda_water_full.jpg",
        thumbnailUrl: "/images/ingredients/soda_water_thumb.jpg",
      },
    ],
    category: "Mixers",
  }).save();
  const tonic_water = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb1",
    name: "Tonic Water",
    images: [
      {
        url: "/images/ingredients/tonic_water_full.jpg",
        thumbnailUrl: "/images/ingredients/tonic_water_thumb.jpg",
      },
    ],
    category: "Mixers",
  }).save();
  const grapefruit_soda = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb2",
    name: "Grapefruit Soda",
    images: [
      {
        url: "/images/ingredients/grapefruit_soda_full.jpg",
        thumbnailUrl: "/images/ingredients/grapefruit_soda_thumb.jpg",
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
        url: "/images/ingredients/orange_juice_full.jpg",
        thumbnailUrl: "/images/ingredients/orange_juice_thumb.jpg",
      },
    ],
    category: "Mixers",
  }).save();
  const lime_juice = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb4",
    name: "Lime Juice",
    images: [
      {
        url: "/images/ingredients/lime_juice_full.jpg",
        thumbnailUrl: "/images/ingredients/lime_juice_thumb.jpg",
      },
    ],
    category: "Mixers",
  }).save();
  const lemon_juice = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb5",
    name: "Lemon Juice",
    images: [
      {
        url: "/images/ingredients/lemon_juice_full.jpg",
        thumbnailUrl: "/images/ingredients/lemon_juice_thumb.jpg",
      },
    ],
    category: "Mixers",
  }).save();
  const cranberry_juice = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb6",
    name: "Cranberry Juice",
    images: [
      {
        url: "/images/ingredients/cranberry_juice_full.jpg",
        thumbnailUrl: "/images/ingredients/cranberry_juice_thumb.jpg",
      },
    ],
    category: "Mixers",
  }).save();
  const pineapple_juice = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb7",
    name: "Pineapple Juice",
    images: [
      {
        url: "/images/ingredients/pineapple_juice_full.jpg",
        thumbnailUrl: "/images/ingredients/pineapple_juice_thumb.jpg",
      },
    ],
    category: "Mixers",
  }).save();
  const tomato_juice = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb8",
    name: "Tomato Juice",
    images: [
      {
        url: "/images/ingredients/tomato_juice_full.jpg",
        thumbnailUrl: "/images/ingredients/tomato_juice_thumb.jpg",
      },
    ],
    category: "Mixers",
  }).save();
  const clamato_juice = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb9",
    name: "Clamato Juice",
    images: [
      {
        url: "/images/ingredients/clamato_juice_full.jpg",
        thumbnailUrl: "/images/ingredients/clamato_juice_thumb.jpg",
      },
    ],
    category: "Mixers",
  }).save();
  const angostura_bitter = await new Ingredient({
    _id: "5eecfb641e34422b4039dbba",
    name: "Angostura Bitter",
    images: [
      {
        url: "/images/ingredients/angostura_bitter_full.jpg",
        thumbnailUrl: "/images/ingredients/angostura_bitter_thumb.jpg",
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
        url: "/images/ingredients/grenadine_full.jpg",
        thumbnailUrl: "/images/ingredients/grenadine_thumb.jpg",
      },
    ],
    category: "Syrups",
  }).save();
  const sugar_syrup = await new Ingredient({
    _id: "5eecfb641e34422b4039dbbc",
    name: "Sugar Syrup",
    images: [
      {
        url: "/images/ingredients/sugar_syrup_full.jpg",
        thumbnailUrl: "/images/ingredients/sugar_syrup_thumb.jpg",
      },
    ],
    category: "Syrups",
  }).save();
  const orgeat_syrup = await new Ingredient({
    _id: "5eecfb641e34422b4039dbbd",
    name: "Orgeat Syrup",
    images: [
      {
        url: "/images/ingredients/orgeat_syrup_full.jpg",
        thumbnailUrl: "/images/ingredients/orgeat_syrup_thumb.jpg",
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
        url: "/images/ingredients/lemon_full.jpg",
        thumbnailUrl: "/images/ingredients/lemon_thumb.jpg",
      },
    ],
    category: "Others",
  }).save();
  const lime = await new Ingredient({
    _id: "5eecfb641e34422b4039dbbf",
    name: "Lime",
    images: [
      {
        url: "/images/ingredients/lime_full.jpg",
        thumbnailUrl: "/images/ingredients/lime_thumb.jpg",
      },
    ],
    category: "Others",
  }).save();
  const fruit_mix = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc0",
    name: "Fruit Mix",
    images: [
      {
        url: "/images/ingredients/fruit_mix_full.jpg",
        thumbnailUrl: "/images/ingredients/fruit_mix_thumb.jpg",
      },
    ],
    category: "Others",
  }).save();
  const mint = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc1",
    name: "Mint",
    images: [
      {
        url: "/images/ingredients/mint_full.jpg",
        thumbnailUrl: "/images/ingredients/mint_thumb.jpg",
      },
    ],
    category: "Others",
  }).save();
  const olives = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc2",
    name: "Olives",
    images: [
      {
        url: "/images/ingredients/olives_full.jpg",
        thumbnailUrl: "/images/ingredients/olives_thumb.jpg",
      },
    ],
    category: "Others",
  }).save();
  const celery = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc3",
    name: "Celery",
    images: [
      {
        url: "/images/ingredients/celery_full.jpg",
        thumbnailUrl: "/images/ingredients/celery_thumb.jpg",
      },
    ],
    category: "Others",
  }).save();
  const egg_white = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc4",
    name: "Egg White",
    images: [
      {
        url: "/images/ingredients/egg_white_full.jpg",
        thumbnailUrl: "/images/ingredients/egg_white_thumb.jpg",
      },
    ],
    category: "Others",
  }).save();
  const coconut_cream = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc5",
    name: "Coconut Cream",
    images: [
      {
        url: "/images/ingredients/coconut_cream_full.jpg",
        thumbnailUrl: "/images/ingredients/coconut_cream_thumb.jpg",
      },
    ],
    category: "Others",
  }).save();
  const fresh_cream = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc6",
    name: "Cream",
    images: [
      {
        url: "/images/ingredients/fresh_cream_full.jpg",
        thumbnailUrl: "/images/ingredients/fresh_cream_thumb.jpg",
      },
    ],
    category: "Others",
  }).save();
  const coffee = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc7",
    name: "Coffee",
    images: [
      {
        url: "/images/ingredients/coffee_full.jpg",
        thumbnailUrl: "/images/ingredients/coffee_thumb.jpg",
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
        url: "/images/ingredients/worcestershire_full.jpg",
        thumbnailUrl: "/images/ingredients/worcestershire_thumb.jpg",
      },
    ],
    category: "Others",
  }).save();
  const hot_sauce = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc9",
    name: "Hot Sauce",
    images: [
      {
        url: "/images/ingredients/hot_sauce_full.jpg",
        thumbnailUrl: "/images/ingredients/hot_sauce_thumb.jpg",
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
        url: "/images/ingredients/sugar_full.jpg",
        thumbnailUrl: "/images/ingredients/sugar_thumb.jpg",
      },
    ],
    category: "Others",
  }).save();
  const salt = await new Ingredient({
    _id: "5eecfb641e34422b4039dbcb",
    name: "Salt",
    images: [
      {
        url: "/images/ingredients/salt_full.jpg",
        thumbnailUrl: "/images/ingredients/salt_thumb.jpg",
      },
    ],
    category: "Others",
  }).save();
  const pepper = await new Ingredient({
    _id: "5eecfb641e34422b4039dbcc",
    name: "Pepper",
    images: [
      {
        url: "/images/ingredients/pepper_full.jpg",
        thumbnailUrl: "/images/ingredients/pepper_thumb.jpg",
      },
    ],
    category: "Others",
  }).save();
  const chilly_powder = await new Ingredient({
    _id: "5eecfb641e34422b4039dbcd",
    name: "Chilly Powder",
    images: [
      {
        url: "/images/ingredients/chilly_powder_full.jpg",
        thumbnailUrl: "/images/ingredients/chilly_powder_thumb.jpg",
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
        url: "/images/cocktails/aperol_spritz_full.jpg",
        thumbnailUrl: "/images/cocktails/aperol_spritz_thumb.jpg",
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
        url: "/images/cocktails/michelada_full.jpg",
        thumbnailUrl: "/images/cocktails/michelada_thumb.jpg",
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
      { ingredient: lime_juice, measure: "50 ml" },
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
        url: "/images/cocktails/margarita_full.jpg",
        thumbnailUrl: "/images/cocktails/margarita_thumb.jpg",
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
        url: "/images/cocktails/cuba_libre_full.jpg",
        thumbnailUrl: "/images/cocktails/cuba_libre_thumb.jpg",
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
        url: "/images/cocktails/pisco_sour_full.jpg",
        thumbnailUrl: "/images/cocktails/pisco_sour_thumb.jpg",
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
        url: "/images/cocktails/piscola_full.jpg",
        thumbnailUrl: "/images/cocktails/piscola_thumb.jpg",
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
        url: "/images/cocktails/tequila_sunrise_full.jpg",
        thumbnailUrl: "/images/cocktails/tequila_sunrise_thumb.jpg",
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
        url: "/images/cocktails/mojito_full.jpg",
        thumbnailUrl: "/images/cocktails/mojito_thumb.jpg",
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
        url: "/images/cocktails/gin_and_tonic_full.jpg",
        thumbnailUrl: "/images/cocktails/gin_and_tonic_thumb.jpg",
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
        url: "/images/cocktails/martini_full.jpg",
        thumbnailUrl: "/images/cocktails/martini_thumb.jpg",
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
        url: "/images/cocktails/vodka_martini_full.jpg",
        thumbnailUrl: "/images/cocktails/vodka_martini_thumb.jpg",
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
        url: "/images/cocktails/caipirinha_full.jpg",
        thumbnailUrl: "/images/cocktails/caipirinha_thumb.jpg",
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
        url: "/images/cocktails/caipiroska_full.jpg",
        thumbnailUrl: "/images/cocktails/caipiroska_thumb.jpg",
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
        url: "/images/cocktails/side_car_full.jpg",
        thumbnailUrl: "/images/cocktails/side_car_thumb.jpg",
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
        url: "/images/cocktails/long_island_full.jpg",
        thumbnailUrl: "/images/cocktails/long_island_thumb.jpg",
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
        url: "/images/cocktails/cosmopolitan_full.jpg",
        thumbnailUrl: "/images/cocktails/cosmopolitan_thumb.jpg",
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
        url: "/images/cocktails/daiquiri_full.jpg",
        thumbnailUrl: "/images/cocktails/daiquiri_thumb.jpg",
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
        url: "/images/cocktails/mai_tai_full.jpg",
        thumbnailUrl: "/images/cocktails/mai_tai_thumb.jpg",
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
        url: "/images/cocktails/pina_colada_full.jpg",
        thumbnailUrl: "/images/cocktails/pina_colada_thumb.jpg",
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
        url: "/images/cocktails/paloma_full.jpg",
        thumbnailUrl: "/images/cocktails/paloma_thumb.jpg",
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
        url: "/images/cocktails/black_russian_full.jpg",
        thumbnailUrl: "/images/cocktails/black_russian_thumb.jpg",
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
        url: "/images/cocktails/bloody_mary_full.jpg",
        thumbnailUrl: "/images/cocktails/bloody_mary_thumb.jpg",
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
        url: "/images/cocktails/irish_coffee_full.jpg",
        thumbnailUrl: "/images/cocktails/irish_coffee_thumb.jpg",
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
        url: "/images/cocktails/manhattan_full.jpg",
        thumbnailUrl: "/images/cocktails/manhattan_thumb.jpg",
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
        url: "/images/cocktails/old_fashioned_full.jpg",
        thumbnailUrl: "/images/cocktails/old_fashioned_thumb.jpg",
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
        url: "/images/cocktails/rusty_nail_full.jpg",
        thumbnailUrl: "/images/cocktails/rusty_nail_thumb.jpg",
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
        url: "/images/cocktails/whiskey_sour_full.jpg",
        thumbnailUrl: "/images/cocktails/whiskey_sour_thumb.jpg",
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
        url: "/images/cocktails/vesper_full.jpg",
        thumbnailUrl: "/images/cocktails/vesper_thumb.jpg",
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
        url: "/images/cocktails/negroni_full.jpg",
        thumbnailUrl: "/images/cocktails/negroni_thumb.jpg",
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
        url: "/images/cocktails/john_collins_full.jpg",
        thumbnailUrl: "/images/cocktails/john_collins_thumb.jpg",
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
        url: "/images/cocktails/mimosa_full.jpg",
        thumbnailUrl: "/images/cocktails/mimosa_thumb.jpg",
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
        url: "/images/cocktails/americano_full.jpg",
        thumbnailUrl: "/images/cocktails/americano_thumb.jpg",
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
        url: "/images/cocktails/sangria_full.jpg",
        thumbnailUrl: "/images/cocktails/sangria_thumb.jpg",
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
        url: "/images/cocktails/screwdriver_full.jpg",
        thumbnailUrl: "/images/cocktails/screwdriver_thumb.jpg",
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
