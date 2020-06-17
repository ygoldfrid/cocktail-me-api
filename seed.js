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
    name: "Cachaça",
    image: `${config.get("base_url")}/images/ingredients/cachaca.jpg`,
    type: "Spirits",
    measure: "ml",
  }).save();
  const cognac = await new Ingredient({
    name: "Cognac",
    image: `${config.get("base_url")}/images/ingredients/cognac.jpg`,
    type: "Spirits",
    measure: "ml",
  }).save();
  const brandy = await new Ingredient({
    name: "Brandy",
    image: `${config.get("base_url")}/images/ingredients/brandy.jpg`,
    type: "Spirits",
    measure: "ml",
  }).save();
  const gin = await new Ingredient({
    name: "Gin",
    image: `${config.get("base_url")}/images/ingredients/gin.jpg`,
    type: "Spirits",
    measure: "ml",
  }).save();
  const pisco = await new Ingredient({
    name: "Pisco",
    image: `${config.get("base_url")}/images/ingredients/pisco.jpg`,
    type: "Spirits",
    measure: "ml",
  }).save();
  const rum = await new Ingredient({
    name: "Rum",
    image: `${config.get("base_url")}/images/ingredients/rum.jpg`,
    type: "Spirits",
    measure: "ml",
  }).save();
  const tequila = await new Ingredient({
    name: "Tequila",
    image: `${config.get("base_url")}/images/ingredients/tequila.jpg`,
    type: "Spirits",
    measure: "ml",
  }).save();
  const vodka = await new Ingredient({
    name: "Vodka",
    image: `${config.get("base_url")}/images/ingredients/vodka.jpg`,
    type: "Spirits",
    measure: "ml",
  }).save();
  const white_rum = await new Ingredient({
    name: "White Rum",
    image: `${config.get("base_url")}/images/ingredients/white_rum.jpg`,
    type: "Spirits",
    measure: "ml",
  }).save();
  const whiskey = await new Ingredient({
    name: "Whiskey",
    image: `${config.get("base_url")}/images/ingredients/whiskey.jpg`,
    type: "Spirits",
    measure: "ml",
  }).save();

  //Liqueurs, Wines & Beer
  const cointreau = await new Ingredient({
    name: "Cointreau",
    image: `${config.get("base_url")}/images/ingredients/cointreau.jpg`,
    type: "Liqueurs",
    measure: "ml",
  }).save();
  const drambuie = await new Ingredient({
    name: "Drambuie",
    image: `${config.get("base_url")}/images/ingredients/drambuie.jpg`,
    type: "Liqueurs",
    measure: "ml",
  }).save();
  const coffee_liqueur = await new Ingredient({
    name: "Coffee Liqueur",
    image: `${config.get("base_url")}/images/ingredients/coffee_liqueur.jpg`,
    type: "Liqueurs",
    measure: "ml",
  }).save();
  const lillet_blanc = await new Ingredient({
    name: "Lillet Blanc",
    image: `${config.get("base_url")}/images/ingredients/lillet_blanc.jpg`,
    type: "Liqueurs",
    measure: "ml",
  }).save();
  const dry_vermouth = await new Ingredient({
    name: "Dry Vermouth",
    image: `${config.get("base_url")}/images/ingredients/dry_vermouth.jpg`,
    type: "Liqueurs",
    measure: "ml",
  }).save();
  const campari = await new Ingredient({
    name: "Campari",
    image: `${config.get("base_url")}/images/ingredients/campari.jpg`,
    type: "Liqueurs",
    measure: "ml",
  }).save();
  const red_vermouth = await new Ingredient({
    name: "Red Vermouth",
    image: `${config.get("base_url")}/images/ingredients/red_vermouth.jpg`,
    type: "Liqueurs",
    measure: "ml",
  }).save();
  const champagne = await new Ingredient({
    name: "Champagne",
    image: `${config.get("base_url")}/images/ingredients/champagne.jpg`,
    type: "Liqueurs",
    measure: "ml",
  }).save();
  const red_wine = await new Ingredient({
    name: "Red Wine",
    image: `${config.get("base_url")}/images/ingredients/red_wine.jpg`,
    type: "Liqueurs",
    measure: "ml",
  }).save();
  const beer = await new Ingredient({
    name: "Beer",
    image: `${config.get("base_url")}/images/ingredients/beer.jpg`,
    type: "Liqueurs",
    measure: "ml",
  }).save();

  //Mixers
  //Fizzy
  const cola = await new Ingredient({
    name: "Cola",
    image: `${config.get("base_url")}/images/ingredients/cola.jpg`,
    type: "Mixers",
    measure: "ml",
  }).save();
  const soda_water = await new Ingredient({
    name: "Soda Water",
    image: `${config.get("base_url")}/images/ingredients/soda_water.jpg`,
    type: "Mixers",
    measure: "ml",
  }).save();
  const tonic_water = await new Ingredient({
    name: "Tonic Water",
    image: `${config.get("base_url")}/images/ingredients/tonic_water.jpg`,
    type: "Mixers",
    measure: "ml",
  }).save();
  const grapefruit_soda = await new Ingredient({
    name: "Grapefruit Soda",
    image: `${config.get("base_url")}/images/ingredients/grapefruit_soda.jpg`,
    type: "Mixers",
    measure: "ml",
  }).save();
  //Juices
  const orange_juice = await new Ingredient({
    name: "Orange Juice",
    image: `${config.get("base_url")}/images/ingredients/orange_juice.jpg`,
    type: "Mixers",
    measure: "ml",
  }).save();
  const lime_juice = await new Ingredient({
    name: "Lime Juice",
    image: `${config.get("base_url")}/images/ingredients/lime_juice.jpg`,
    type: "Mixers",
    measure: "ml",
  }).save();
  const lemon_juice = await new Ingredient({
    name: "Lemon Juice",
    image: `${config.get("base_url")}/images/ingredients/lemon_juice.jpg`,
    type: "Mixers",
    measure: "ml",
  }).save();
  const cranberry_juice = await new Ingredient({
    name: "Cranberry Juice",
    image: `${config.get("base_url")}/images/ingredients/cranberry_juice.jpg`,
    type: "Mixers",
    measure: "ml",
  }).save();
  const pineapple_juice = await new Ingredient({
    name: "Pineapple Juice",
    image: `${config.get("base_url")}/images/ingredients/pineapple_juice.jpg`,
    type: "Mixers",
    measure: "ml",
  }).save();
  const tomato_juice = await new Ingredient({
    name: "Tomato Juice",
    image: `${config.get("base_url")}/images/ingredients/tomato_juice.jpg`,
    type: "Mixers",
    measure: "ml",
  }).save();
  const grenadine = await new Ingredient({
    name: "Grenadine",
    image: `${config.get("base_url")}/images/ingredients/grenadine.jpg`,
    type: "Mixers",
    measure: "ml",
  }).save();
  const angostura_bitter = await new Ingredient({
    name: "Angostura Bitter",
    image: `${config.get("base_url")}/images/ingredients/angostura_bitter.jpg`,
    type: "Mixers",
    measure: "dash",
  }).save();

  //Others
  //Fresh
  const lemon = await new Ingredient({
    name: "Lemon",
    image: `${config.get("base_url")}/images/ingredients/lemon.jpg`,
    type: "Others",
    measure: "units",
  }).save();
  const lime = await new Ingredient({
    name: "Lime",
    image: `${config.get("base_url")}/images/ingredients/lime.jpg`,
    type: "Others",
    measure: "units",
  }).save();
  const fruit_mix = await new Ingredient({
    name: "Fruit Mix",
    image: `${config.get("base_url")}/images/ingredients/fruit_mix.jpg`,
    type: "Others",
    measure: "units",
  }).save();
  const mint = await new Ingredient({
    name: "Mint",
    image: `${config.get("base_url")}/images/ingredients/mint.jpg`,
    type: "Others",
    measure: "sprigs",
  }).save();
  const olives = await new Ingredient({
    name: "Olives",
    image: `${config.get("base_url")}/images/ingredients/olives.jpg`,
    type: "Others",
    measure: "to taste",
  }).save();
  const celery = await new Ingredient({
    name: "Celery",
    image: `${config.get("base_url")}/images/ingredients/celery.jpg`,
    type: "Others",
    measure: "sprigs",
  }).save();
  const egg_white = await new Ingredient({
    name: "Egg White",
    image: `${config.get("base_url")}/images/ingredients/egg_white.jpg`,
    type: "Others",
    measure: "units",
  }).save();
  const coconut_cream = await new Ingredient({
    name: "Coconut Cream",
    image: `${config.get("base_url")}/images/ingredients/coconut_cream.jpg`,
    type: "Others",
    measure: "ml",
  }).save();
  const fresh_cream = await new Ingredient({
    name: "Cream",
    image: `${config.get("base_url")}/images/ingredients/fresh_cream.jpg`,
    type: "Others",
    measure: "ml",
  }).save();
  const coffee = await new Ingredient({
    name: "Coffee",
    image: `${config.get("base_url")}/images/ingredients/coffee.jpg`,
    type: "Others",
    measure: "ml",
  }).save();
  //Syrups
  const sugar_syrup = await new Ingredient({
    name: "Sugar Syrup",
    image: `${config.get("base_url")}/images/ingredients/sugar_syrup.jpg`,
    type: "Others",
    measure: "ml",
  }).save();
  const orgeat_syrup = await new Ingredient({
    name: "Orgeat Syrup",
    image: `${config.get("base_url")}/images/ingredients/orgeat_syrup.jpg`,
    type: "Others",
    measure: "ml",
  }).save();
  //Sauces
  const worcestershire = await new Ingredient({
    name: "Worcester shire",
    image: `${config.get("base_url")}/images/ingredients/worcestershire.jpg`,
    type: "Others",
    measure: "drops",
  }).save();
  const hot_sauce = await new Ingredient({
    name: "Hot Sauce",
    image: `${config.get("base_url")}/images/ingredients/hot_sauce.jpg`,
    type: "Others",
    measure: "drops",
  }).save();
  //Powders
  const sugar = await new Ingredient({
    name: "Sugar",
    image: `${config.get("base_url")}/images/ingredients/sugar.jpg`,
    type: "Others",
    measure: "ts",
  }).save();
  const salt = await new Ingredient({
    name: "Salt",
    image: `${config.get("base_url")}/images/ingredients/salt.jpg`,
    type: "Others",
    measure: "ts",
  }).save();
  const pepper = await new Ingredient({
    name: "Pepper",
    image: `${config.get("base_url")}/images/ingredients/pepper.jpg`,
    type: "Others",
    measure: "ts",
  }).save();
  const chilly_powder = await new Ingredient({
    name: "Chilly Powder",
    image: `${config.get("base_url")}/images/ingredients/chilly_powder.jpg`,
    type: "Others",
    measure: "dash",
  }).save();

  //Cocktails
  await new Cocktail({
    name: "Michelada",
    image: `${config.get("base_url")}/images/cocktails/michelada.jpg`,
    preparation: [
      "Run a lime wedge around the rim of a glass and dip in coarse sea salt and chili powder.",
      "Fill beer glass with ice cubes.",
      "Add the tomato juice, lime juice, Worcestershire sauce, hot sauce and a dash of chili powder.",
      "Top with your favorite beer. Stir and enjoy immediately.",
    ],
    components: [
      { ingredient: beer, quantity: 350 },
      { ingredient: tomato_juice, quantity: 150 },
      { ingredient: lime_juice, quantity: 50 },
      { ingredient: lime, quantity: 1 },
      { ingredient: hot_sauce, quantity: 4 },
      { ingredient: chilly_powder, quantity: 1 },
      { ingredient: worcestershire, quantity: 4 },
      { ingredient: salt, quantity: 2 },
    ],
  }).save();
  await new Cocktail({
    name: "Original Margarita",
    image: `${config.get("base_url")}/images/cocktails/margarita.jpg`,
    preparation: [
      "Pour all ingredients into shaker with ice.",
      "Shake well and strain into cocktail glass rimmed with salt.",
    ],
    components: [
      { ingredient: tequila, quantity: 50 },
      { ingredient: cointreau, quantity: 50 },
      { ingredient: lime_juice, quantity: 50 },
      { ingredient: salt, quantity: 1 },
    ],
  }).save();
  await new Cocktail({
    name: "Cuba Libre",
    image: `${config.get("base_url")}/images/cocktails/cuba_libre.jpg`,
    preparation: [
      "Build all ingredients in a highball glass filled with ice.",
      "Garnish with lime wedge.",
    ],
    components: [
      { ingredient: white_rum, quantity: 50 },
      { ingredient: cola, quantity: 120 },
      { ingredient: lime_juice, quantity: 10 },
    ],
  }).save();
  await new Cocktail({
    name: "Pisco Sour",
    image: `${config.get("base_url")}/images/cocktails/pisco_sour.jpg`,
    preparation: [
      "Vigorously shake contents in a cocktail shaker with ice cubes.",
      "Strain into a glass and garnish with bitters.",
    ],
    components: [
      { ingredient: pisco, quantity: 60 },
      { ingredient: lime_juice, quantity: 30 },
      { ingredient: egg_white, quantity: 1 },
      { ingredient: sugar_syrup, quantity: 20 },
    ],
  }).save();
  await new Cocktail({
    name: "Piscola",
    image: `${config.get("base_url")}/images/cocktails/piscola.jpg`,
    preparation: [
      "Build all ingredients in a highball glass filled with ice.",
      "Garnish with lime wedge.",
    ],
    components: [
      { ingredient: pisco, quantity: 80 },
      { ingredient: cola, quantity: 120 },
    ],
  }).save();
  await new Cocktail({
    name: "Tequila Sunrise",
    image: `${config.get("base_url")}/images/cocktails/tequila_sunrise.jpg`,
    preparation: [
      "Pour the tequila and orange juice into glass over ice.",
      "Add the grenadine, which will sink to the bottom.",
      "Stir gently to create the sunrise effect.",
      "Garnish and serve.",
    ],
    components: [
      { ingredient: tequila, quantity: 45 },
      { ingredient: orange_juice, quantity: 90 },
      { ingredient: grenadine, quantity: 15 },
    ],
  }).save();
  await new Cocktail({
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
      { ingredient: white_rum, quantity: 40 },
      { ingredient: lime_juice, quantity: 30 },
      { ingredient: soda_water, quantity: 0 },
      { ingredient: mint, quantity: 6 },
      { ingredient: sugar, quantity: 2 },
    ],
  }).save();
  await new Cocktail({
    name: "Gin & Tonic",
    image: `${config.get("base_url")}/images/cocktails/gin_and_tonic.jpg`,
    preparation: ["In a glass filled with ice cubes, add gin and tonic."],
    components: [
      { ingredient: gin, quantity: 50 },
      { ingredient: tonic_water, quantity: 120 },
    ],
  }).save();
  await new Cocktail({
    name: "Martini",
    image: `${config.get("base_url")}/images/cocktails/martini.jpg`,
    preparation: [
      "Pour all ingredients into mixing glass with ice cubes. Shake well.",
      "Strain into chilled martini cocktail glass.",
      "Squeeze oil from lemon peel onto the drink, or garnish with olive.",
    ],
    components: [
      { ingredient: gin, quantity: 60 },
      { ingredient: dry_vermouth, quantity: 10 },
      { ingredient: olives, quantity: 1 },
    ],
  }).save();
  await new Cocktail({
    name: "Vodka Martini",
    image: `${config.get("base_url")}/images/cocktails/vodka_martini.jpg`,
    preparation: [
      "Pour all ingredients into mixing glass with ice cubes. Shake well.",
      "Strain in chilled martini cocktail glass.",
      "Squeeze oil from lemon peel onto the drink, or garnish with olive.",
    ],
    components: [
      { ingredient: vodka, quantity: 60 },
      { ingredient: dry_vermouth, quantity: 10 },
      { ingredient: olives, quantity: 1 },
    ],
  }).save();
  await new Cocktail({
    name: "Caipirinha",
    image: `${config.get("base_url")}/images/cocktails/caipirinha.jpg`,
    preparation: [
      "Place lime and sugar into old fashioned glass and muddle (mash the two ingredients together using a muddler or a wooden spoon).",
      "Fill the glass with ice and add the Cachaça.",
    ],
    components: [
      { ingredient: cachaca, quantity: 50 },
      { ingredient: lime, quantity: 1 },
      { ingredient: sugar, quantity: 2 },
    ],
  }).save();
  await new Cocktail({
    name: "Caipiroska",
    image: `${config.get("base_url")}/images/cocktails/caipiroska.jpg`,
    preparation: [
      "Place lime and sugar into old fashioned glass and muddle (mash the two ingredients together using a muddler or a wooden spoon).",
      "Fill the glass with ice and add the Vodka.",
    ],
    components: [
      { ingredient: vodka, quantity: 50 },
      { ingredient: lime, quantity: 1 },
      { ingredient: sugar, quantity: 2 },
    ],
  }).save();
  await new Cocktail({
    name: "Side Car",
    image: `${config.get("base_url")}/images/cocktails/side_car.jpg`,
    preparation: [
      "Pour all ingredients into cocktail shaker filled with ice.",
      "Shake well and strain into cocktail glass.",
    ],
    components: [
      { ingredient: cognac, quantity: 50 },
      { ingredient: cointreau, quantity: 20 },
      { ingredient: lemon_juice, quantity: 20 },
    ],
  }).save();
  await new Cocktail({
    name: "Long Island Iced Tea",
    image: `${config.get("base_url")}/images/cocktails/long_island.jpg`,
    preparation: [
      "Add all ingredients into highball glass filled with ice. Stir gently.",
      "Optionally garnish with lemon slice.",
    ],
    components: [
      { ingredient: tequila, quantity: 15 },
      { ingredient: vodka, quantity: 15 },
      { ingredient: white_rum, quantity: 15 },
      { ingredient: cointreau, quantity: 15 },
      { ingredient: gin, quantity: 15 },
      { ingredient: lemon_juice, quantity: 25 },
      { ingredient: sugar_syrup, quantity: 30 },
      { ingredient: cola, quantity: 0 },
    ],
  }).save();
  await new Cocktail({
    name: "Cosmopolitan",
    image: `${config.get("base_url")}/images/cocktails/cosmopolitan.jpg`,
    preparation: [
      "Shake all ingredients in cocktail shaker filled with ice.",
      "Strain into a large cocktail glass.",
      "Garnish with lime slice.",
    ],
    components: [
      { ingredient: vodka, quantity: 40 },
      { ingredient: cointreau, quantity: 15 },
      { ingredient: lime_juice, quantity: 15 },
      { ingredient: cranberry_juice, quantity: 15 },
    ],
  }).save();
  await new Cocktail({
    name: "Daiquiri",
    image: `${config.get("base_url")}/images/cocktails/daiquiri.jpg`,
    preparation: [
      "In a cocktail shaker add all ingredients.",
      "Stir well to dissolve the sugar.",
      "Add ice and shake.",
      "Strain into chilled cocktail glass.",
    ],
    components: [
      { ingredient: white_rum, quantity: 60 },
      { ingredient: lime_juice, quantity: 20 },
      { ingredient: sugar, quantity: 2 },
    ],
  }).save();
  await new Cocktail({
    name: "Mai Tai",
    image: `${config.get("base_url")}/images/cocktails/mai_tai.jpg`,
    preparation: [
      "Shake all ingredients with ice.",
      "Strain into glass.",
      "Garnish and serve with straw.",
    ],
    components: [
      { ingredient: rum, quantity: 60 },
      { ingredient: cointreau, quantity: 15 },
      { ingredient: orgeat_syrup, quantity: 15 },
      { ingredient: sugar_syrup, quantity: 10 },
      { ingredient: lime_juice, quantity: 15 },
    ],
  }).save();
  await new Cocktail({
    name: "Pina Colada",
    image: `${config.get("base_url")}/images/cocktails/pina_colada.jpg`,
    preparation: [
      "Blend all the ingredients with ice in an electric blender.",
      "Pour into a large goblet or Hurricane glass and serve.",
    ],
    components: [
      { ingredient: white_rum, quantity: 50 },
      { ingredient: coconut_cream, quantity: 30 },
      { ingredient: pineapple_juice, quantity: 50 },
    ],
  }).save();
  await new Cocktail({
    name: "Paloma",
    image: `${config.get("base_url")}/images/cocktails/paloma.jpg`,
    preparation: ["Stir together and serve over ice."],
    components: [
      { ingredient: tequila, quantity: 50 },
      { ingredient: grapefruit_soda, quantity: 150 },
    ],
  }).save();
  await new Cocktail({
    name: "Black Russian",
    image: `${config.get("base_url")}/images/cocktails/black_russian.jpg`,
    preparation: [
      "Pour the ingredients into an old fashioned glass filled with ice cubes.",
      "Stir gently.",
    ],
    components: [
      { ingredient: vodka, quantity: 40 },
      { ingredient: coffee_liqueur, quantity: 20 },
    ],
  }).save();
  await new Cocktail({
    name: "Bloody Mary",
    image: `${config.get("base_url")}/images/cocktails/bloody_mary.jpg`,
    preparation: [
      "Stirring gently, pour all ingredients into highball glass.",
      "Garnish.",
    ],
    components: [
      { ingredient: vodka, quantity: 45 },
      { ingredient: tomato_juice, quantity: 90 },
      { ingredient: lemon_juice, quantity: 15 },
      { ingredient: worcestershire, quantity: 3 },
      { ingredient: celery, quantity: 1 },
      { ingredient: hot_sauce, quantity: 0 },
      { ingredient: pepper, quantity: 0 },
    ],
  }).save();
  await new Cocktail({
    name: "Irish Coffee",
    image: `${config.get("base_url")}/images/cocktails/irish_coffee.jpg`,
    preparation: [
      "Heat the coffee, whiskey and sugar. Do not boil.",
      "Pour into glass and top with cream.",
      "Serve hot.",
    ],
    components: [
      { ingredient: whiskey, quantity: 40 },
      { ingredient: coffee, quantity: 80 },
      { ingredient: fresh_cream, quantity: 30 },
      { ingredient: sugar, quantity: 1 },
    ],
  }).save();
  await new Cocktail({
    name: "Manhattan",
    image: `${config.get("base_url")}/images/cocktails/manhattan.jpg`,
    preparation: [
      "Stirred over ice, strained into a chilled glass, garnished, and served up.",
    ],
    components: [
      { ingredient: whiskey, quantity: 50 },
      { ingredient: red_vermouth, quantity: 20 },
      { ingredient: angostura_bitter, quantity: 1 },
    ],
  }).save();
  await new Cocktail({
    name: "Old Fashioned",
    image: `${config.get("base_url")}/images/cocktails/old_fashioned.jpg`,
    preparation: [
      "Place sugar cube in old fashioned glass and saturate with bitters.",
      "Add a dash of plain water. Muddle until dissolved.",
      "Fill the glass with ice cubes and add whiskey.",
      "Garnish with orange twist, and a cocktail cherry.",
    ],
    components: [
      { ingredient: whiskey, quantity: 45 },
      { ingredient: angostura_bitter, quantity: 2 },
      { ingredient: sugar, quantity: 1 },
    ],
  }).save();
  await new Cocktail({
    name: "Rusty Nail",
    image: `${config.get("base_url")}/images/cocktails/rusty_nail.jpg`,
    preparation: [
      "Pour all ingredients directly into old-fashioned glass filled with ice.",
      "Stir gently.",
      "Garnish with a lemon twist",
    ],
    components: [
      { ingredient: whiskey, quantity: 45 },
      { ingredient: drambuie, quantity: 30 },
    ],
  }).save();
  await new Cocktail({
    name: "Whiskey Sour",
    image: `${config.get("base_url")}/images/cocktails/whiskey_sour.jpg`,
    preparation: [
      "Shake with ice.",
      "Strain into chilled glass, garnish and serve.",
    ],
    components: [
      { ingredient: whiskey, quantity: 45 },
      { ingredient: lemon_juice, quantity: 30 },
      { ingredient: sugar_syrup, quantity: 15 },
    ],
  }).save();
  await new Cocktail({
    name: "Vesper",
    image: `${config.get("base_url")}/images/cocktails/vesper.jpg`,
    preparation: [
      "Shake and strain into a chilled cocktail glass.",
      "Garnish and serve.",
    ],
    components: [
      { ingredient: gin, quantity: 45 },
      { ingredient: vodka, quantity: 15 },
      { ingredient: lillet_blanc, quantity: 10 },
    ],
  }).save();
  await new Cocktail({
    name: "Negroni",
    image: `${config.get("base_url")}/images/cocktails/negroni.jpg`,
    preparation: ["Stir into glass over ice, garnish and serve."],
    components: [
      { ingredient: gin, quantity: 30 },
      { ingredient: red_vermouth, quantity: 30 },
      { ingredient: campari, quantity: 30 },
    ],
  }).save();
  await new Cocktail({
    name: "John Collins",
    image: `${config.get("base_url")}/images/cocktails/john_collins.jpg`,
    preparation: [
      "Pour all ingredients directly into highball glass filled with ice.",
      "Stir gently.",
      "Garnish.",
      "Add a dash of Angostura bitters.",
    ],
    components: [
      { ingredient: gin, quantity: 45 },
      { ingredient: lemon_juice, quantity: 30 },
      { ingredient: sugar_syrup, quantity: 15 },
      { ingredient: soda_water, quantity: 60 },
    ],
  }).save();
  await new Cocktail({
    name: "Mimosa",
    image: `${config.get("base_url")}/images/cocktails/mimosa.jpg`,
    preparation: [
      "Ensure both ingredients are well chilled, then mix into the glass. Serve cold.",
    ],
    components: [
      { ingredient: champagne, quantity: 75 },
      { ingredient: orange_juice, quantity: 75 },
    ],
  }).save();
  await new Cocktail({
    name: "Americano",
    image: `${config.get("base_url")}/images/cocktails/americano.jpg`,
    preparation: [
      "Pour the Campari and vermouth over ice into a highball glass.",
      "Add a splash of soda water and garnish with half orange slice and a lemon twist.",
    ],
    components: [
      { ingredient: campari, quantity: 30 },
      { ingredient: red_vermouth, quantity: 30 },
      { ingredient: soda_water, quantity: 0 },
    ],
  }).save();
  await new Cocktail({
    name: "Sangria",
    image: `${config.get("base_url")}/images/cocktails/sangria.jpg`,
    preparation: [
      "Cut the fruit in small pieces.",
      "Stir with the rest of the ingredients.",
      "Refrigerate for 2 to 8 hours for maximum fruity flavor.",
    ],
    components: [
      { ingredient: red_wine, quantity: 750 },
      { ingredient: cognac, quantity: 50 },
      { ingredient: orange_juice, quantity: 200 },
      { ingredient: fruit_mix, quantity: 0 },
      { ingredient: sugar, quantity: 0 },
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
  lime.alternatives = [lime_juice, lemon_juice, lemon];
  await lime.save();
  lemon.alternatives = [lemon_juice, lime_juice, lime];
  await lemon.save();
  lime_juice.alternatives = [lemon_juice];
  await lime_juice.save();
  lemon_juice.alternatives = [lime_juice];
  await lemon_juice.save();

  //Clean up
  mongoose.disconnect();
  console.info("Done!");
}

run();
