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
  const cachaca = await new Ingredient({
    _id: "5eecfb00f3aa0f0b0896e06e",
    name: "Cachaça",
    image: `${config.get("base_url")}/images/ingredients/cachaca.jpg`,
    category: "Spirits",
  }).save();
  const cognac = await new Ingredient({
    _id: "5eecfb641e34422b4039db9c",
    name: "Cognac",
    image: `${config.get("base_url")}/images/ingredients/cognac.jpg`,
    category: "Spirits",
  }).save();
  const brandy = await new Ingredient({
    _id: "5eecfb641e34422b4039db9d",
    name: "Brandy",
    image: `${config.get("base_url")}/images/ingredients/brandy.jpg`,
    category: "Spirits",
  }).save();
  const bourbon = await new Ingredient({
    _id: "5ef6816942f15a0fe0f49529",
    name: "Bourbon",
    image: `${config.get("base_url")}/images/ingredients/bourbon.jpg`,
    category: "Spirits",
  }).save();
  const gin = await new Ingredient({
    _id: "5eecfb641e34422b4039db9e",
    name: "Gin",
    image: `${config.get("base_url")}/images/ingredients/gin.jpg`,
    category: "Spirits",
  }).save();
  const pisco = await new Ingredient({
    _id: "5eecfb641e34422b4039db9f",
    name: "Pisco",
    image: `${config.get("base_url")}/images/ingredients/pisco.jpg`,
    category: "Spirits",
  }).save();
  const rum = await new Ingredient({
    _id: "5eecfb641e34422b4039dba0",
    name: "Rum",
    image: `${config.get("base_url")}/images/ingredients/rum.jpg`,
    category: "Spirits",
  }).save();
  const tequila = await new Ingredient({
    _id: "5eecfb641e34422b4039dba1",
    name: "Tequila",
    image: `${config.get("base_url")}/images/ingredients/tequila.jpg`,
    category: "Spirits",
  }).save();
  const vodka = await new Ingredient({
    _id: "5eecfb641e34422b4039dba2",
    name: "Vodka",
    image: `${config.get("base_url")}/images/ingredients/vodka.jpg`,
    category: "Spirits",
  }).save();
  const white_rum = await new Ingredient({
    _id: "5eecfb641e34422b4039dba3",
    name: "White Rum",
    image: `${config.get("base_url")}/images/ingredients/white_rum.jpg`,
    category: "Spirits",
  }).save();
  const whiskey = await new Ingredient({
    _id: "5eecfb641e34422b4039dba4",
    name: "Whiskey",
    image: `${config.get("base_url")}/images/ingredients/whiskey.jpg`,
    category: "Spirits",
  }).save();

  //Liqueurs, Wines & Beer
  //Liqueurs
  const cointreau = await new Ingredient({
    _id: "5eecfb641e34422b4039dba5",
    name: "Cointreau",
    image: `${config.get("base_url")}/images/ingredients/cointreau.jpg`,
    category: "Liqueurs",
  }).save();
  const drambuie = await new Ingredient({
    _id: "5eecfb641e34422b4039dba6",
    name: "Drambuie",
    image: `${config.get("base_url")}/images/ingredients/drambuie.jpg`,
    category: "Liqueurs",
  }).save();
  const coffee_liqueur = await new Ingredient({
    _id: "5eecfb641e34422b4039dba7",
    name: "Coffee Liqueur",
    image: `${config.get("base_url")}/images/ingredients/coffee_liqueur.jpg`,
    category: "Liqueurs",
  }).save();
  const campari = await new Ingredient({
    _id: "5eecfb641e34422b4039dba8",
    name: "Campari",
    image: `${config.get("base_url")}/images/ingredients/campari.jpg`,
    category: "Liqueurs",
  }).save();
  //Wines
  const lillet_blanc = await new Ingredient({
    _id: "5eecfb641e34422b4039dba9",
    name: "Lillet Blanc",
    image: `${config.get("base_url")}/images/ingredients/lillet_blanc.jpg`,
    category: "Wines",
  }).save();
  const dry_vermouth = await new Ingredient({
    _id: "5eecfb641e34422b4039dbaa",
    name: "Dry Vermouth",
    image: `${config.get("base_url")}/images/ingredients/dry_vermouth.jpg`,
    category: "Wines",
  }).save();
  const red_vermouth = await new Ingredient({
    _id: "5eecfb641e34422b4039dbab",
    name: "Red Vermouth",
    image: `${config.get("base_url")}/images/ingredients/red_vermouth.jpg`,
    category: "Wines",
  }).save();
  const champagne = await new Ingredient({
    _id: "5eecfb641e34422b4039dbac",
    name: "Champagne",
    image: `${config.get("base_url")}/images/ingredients/champagne.jpg`,
    category: "Wines",
  }).save();
  const red_wine = await new Ingredient({
    _id: "5eecfb641e34422b4039dbad",
    name: "Red Wine",
    image: `${config.get("base_url")}/images/ingredients/red_wine.jpg`,
    category: "Wines",
  }).save();
  const white_wine = await new Ingredient({
    _id: "5ef6816942f15a0fe0f4953a",
    name: "White Wine",
    image: `${config.get("base_url")}/images/ingredients/white_wine.jpg`,
    category: "Wines",
  }).save();
  //Beers
  const beer = await new Ingredient({
    _id: "5eecfb641e34422b4039dbae",
    name: "Beer",
    image: `${config.get("base_url")}/images/ingredients/beer.jpg`,
    category: "Beers",
  }).save();

  //Mixers
  //Fizzy
  const cola = await new Ingredient({
    _id: "5eecfb641e34422b4039dbaf",
    name: "Cola",
    image: `${config.get("base_url")}/images/ingredients/cola.jpg`,
    category: "Mixers",
  }).save();
  const soda_water = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb0",
    name: "Soda Water",
    image: `${config.get("base_url")}/images/ingredients/soda_water.jpg`,
    category: "Mixers",
  }).save();
  const tonic_water = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb1",
    name: "Tonic Water",
    image: `${config.get("base_url")}/images/ingredients/tonic_water.jpg`,
    category: "Mixers",
  }).save();
  const grapefruit_soda = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb2",
    name: "Grapefruit Soda",
    image: `${config.get("base_url")}/images/ingredients/grapefruit_soda.jpg`,
    category: "Mixers",
  }).save();
  //Juices
  const orange_juice = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb3",
    name: "Orange Juice",
    image: `${config.get("base_url")}/images/ingredients/orange_juice.jpg`,
    category: "Mixers",
  }).save();
  const lime_juice = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb4",
    name: "Lime Juice",
    image: `${config.get("base_url")}/images/ingredients/lime_juice.jpg`,
    category: "Mixers",
  }).save();
  const lemon_juice = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb5",
    name: "Lemon Juice",
    image: `${config.get("base_url")}/images/ingredients/lemon_juice.jpg`,
    category: "Mixers",
  }).save();
  const cranberry_juice = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb6",
    name: "Cranberry Juice",
    image: `${config.get("base_url")}/images/ingredients/cranberry_juice.jpg`,
    category: "Mixers",
  }).save();
  const pineapple_juice = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb7",
    name: "Pineapple Juice",
    image: `${config.get("base_url")}/images/ingredients/pineapple_juice.jpg`,
    category: "Mixers",
  }).save();
  const tomato_juice = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb8",
    name: "Tomato Juice",
    image: `${config.get("base_url")}/images/ingredients/tomato_juice.jpg`,
    category: "Mixers",
  }).save();
  const clamato_juice = await new Ingredient({
    _id: "5eecfb641e34422b4039dbb9",
    name: "Clamato Juice",
    image: `${config.get("base_url")}/images/ingredients/clamato_juice.jpg`,
    category: "Mixers",
  }).save();
  const angostura_bitter = await new Ingredient({
    _id: "5eecfb641e34422b4039dbba",
    name: "Angostura Bitter",
    image: `${config.get("base_url")}/images/ingredients/angostura_bitter.jpg`,
    category: "Mixers",
  }).save();
  //Syrups
  const grenadine = await new Ingredient({
    _id: "5eecfb641e34422b4039dbbb",
    name: "Grenadine",
    image: `${config.get("base_url")}/images/ingredients/grenadine.jpg`,
    category: "Syrups",
  }).save();
  const sugar_syrup = await new Ingredient({
    _id: "5eecfb641e34422b4039dbbc",
    name: "Sugar Syrup",
    image: `${config.get("base_url")}/images/ingredients/sugar_syrup.jpg`,
    category: "Syrups",
  }).save();
  const orgeat_syrup = await new Ingredient({
    _id: "5eecfb641e34422b4039dbbd",
    name: "Orgeat Syrup",
    image: `${config.get("base_url")}/images/ingredients/orgeat_syrup.jpg`,
    category: "Syrups",
  }).save();

  //Others
  //Fresh
  const lemon = await new Ingredient({
    _id: "5eecfb641e34422b4039dbbe",
    name: "Lemon",
    image: `${config.get("base_url")}/images/ingredients/lemon.jpg`,
    category: "Others",
  }).save();
  const lime = await new Ingredient({
    _id: "5eecfb641e34422b4039dbbf",
    name: "Lime",
    image: `${config.get("base_url")}/images/ingredients/lime.jpg`,
    category: "Others",
  }).save();
  const fruit_mix = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc0",
    name: "Fruit Mix",
    image: `${config.get("base_url")}/images/ingredients/fruit_mix.jpg`,
    category: "Others",
  }).save();
  const mint = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc1",
    name: "Mint",
    image: `${config.get("base_url")}/images/ingredients/mint.jpg`,
    category: "Others",
  }).save();
  const olives = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc2",
    name: "Olives",
    image: `${config.get("base_url")}/images/ingredients/olives.jpg`,
    category: "Others",
  }).save();
  const celery = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc3",
    name: "Celery",
    image: `${config.get("base_url")}/images/ingredients/celery.jpg`,
    category: "Others",
  }).save();
  const egg_white = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc4",
    name: "Egg White",
    image: `${config.get("base_url")}/images/ingredients/egg_white.jpg`,
    category: "Others",
  }).save();
  const coconut_cream = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc5",
    name: "Coconut Cream",
    image: `${config.get("base_url")}/images/ingredients/coconut_cream.jpg`,
    category: "Others",
  }).save();
  const fresh_cream = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc6",
    name: "Cream",
    image: `${config.get("base_url")}/images/ingredients/fresh_cream.jpg`,
    category: "Others",
  }).save();
  const coffee = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc7",
    name: "Coffee",
    image: `${config.get("base_url")}/images/ingredients/coffee.jpg`,
    category: "Others",
  }).save();
  //Sauces
  const worcestershire = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc8",
    name: "Worcestershire Sauce",
    image: `${config.get("base_url")}/images/ingredients/worcestershire.jpg`,
    category: "Others",
  }).save();
  const hot_sauce = await new Ingredient({
    _id: "5eecfb641e34422b4039dbc9",
    name: "Hot Sauce",
    image: `${config.get("base_url")}/images/ingredients/hot_sauce.jpg`,
    category: "Others",
  }).save();
  //Powders
  const sugar = await new Ingredient({
    _id: "5eecfb641e34422b4039dbca",
    name: "Sugar",
    image: `${config.get("base_url")}/images/ingredients/sugar.jpg`,
    category: "Others",
  }).save();
  const salt = await new Ingredient({
    _id: "5eecfb641e34422b4039dbcb",
    name: "Salt",
    image: `${config.get("base_url")}/images/ingredients/salt.jpg`,
    category: "Others",
  }).save();
  const pepper = await new Ingredient({
    _id: "5eecfb641e34422b4039dbcc",
    name: "Pepper",
    image: `${config.get("base_url")}/images/ingredients/pepper.jpg`,
    category: "Others",
  }).save();
  const chilly_powder = await new Ingredient({
    _id: "5eecfb641e34422b4039dbcd",
    name: "Chilly Powder",
    image: `${config.get("base_url")}/images/ingredients/chilly_powder.jpg`,
    category: "Others",
  }).save();

  //Cocktails
  await new Cocktail({
    _id: "5eecfb641e34422b4039dbce",
    name: "Michelada",
    image: `${config.get("base_url")}/images/cocktails/michelada.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/margarita.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/cuba_libre.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/pisco_sour.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/piscola.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/tequila_sunrise.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/mojito.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/gin_and_tonic.jpg`,
    preparation: ["In a glass filled with ice cubes, add gin and tonic."],
    components: [
      { ingredient: gin, measure: "50 ml" },
      { ingredient: tonic_water, measure: "120 ml" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dbf5",
    name: "Martini",
    image: `${config.get("base_url")}/images/cocktails/martini.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/vodka_martini.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/caipirinha.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/caipiroska.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/side_car.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/long_island.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/cosmopolitan.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/daiquiri.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/mai_tai.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/pina_colada.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/paloma.jpg`,
    preparation: ["Stir together and serve over ice."],
    components: [
      { ingredient: tequila, measure: "50 ml" },
      { ingredient: grapefruit_soda, measure: "150 ml" },
    ],
  }).save();
  await new Cocktail({
    _id: "5eecfb641e34422b4039dc28",
    name: "Black Russian",
    image: `${config.get("base_url")}/images/cocktails/black_russian.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/bloody_mary.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/irish_coffee.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/manhattan.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/old_fashioned.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/rusty_nail.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/whiskey_sour.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/vesper.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/negroni.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/john_collins.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/mimosa.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/americano.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/sangria.jpg`,
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
    image: `${config.get("base_url")}/images/cocktails/screwdriver.jpg`,
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

  //Clean up
  mongoose.disconnect();
  console.info("Done!");
}

run();
