const mongoose = require("mongoose");
const request = require("supertest");
const { Ingredient } = require("../../models/ingredient");

let server;

describe("/api/ingredients", () => {
  beforeEach(() => (server = require("../../index")));
  afterEach(async () => {
    await Ingredient.deleteMany({});
    await server.close();
  });

  describe("GET /", () => {
    it("should return all ingredients", async () => {
      const ingredients = [
        { name: "ingredient1", image: "image1", category: "category1" },
        { name: "ingredient2", image: "image2", category: "category2" },
      ];
      await Ingredient.collection.insertMany(ingredients);
      const res = await request(server).get("/api/ingredients");
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(res.body.some((ing) => ing.name === "ingredient1")).toBeTruthy();
      expect(res.body.some((ing) => ing.image === "image1")).toBeTruthy();
      expect(res.body.some((ing) => ing.category === "category1")).toBeTruthy();
      expect(res.body.some((ing) => ing.name === "ingredient2")).toBeTruthy();
      expect(res.body.some((ing) => ing.image === "image2")).toBeTruthy();
      expect(res.body.some((ing) => ing.category === "category2")).toBeTruthy();
    });
  });

  describe("GET /:id", () => {
    let ingredient;
    let id;

    const exec = () => {
      return request(server).get(`/api/ingredients/${id}`);
    };

    beforeEach(async () => {
      ingredient = new Ingredient({
        name: "ingredient1",
        image: "image1",
        category: "category1",
      });
      await ingredient.save();
      id = ingredient._id;
    });

    it("should return 404 if ID is invalid", async () => {
      id = 1;
      const res = await exec();
      expect(res.status).toBe(404);
    });

    it("should return 404 if ingredient with given ID was not found", async () => {
      id = mongoose.Types.ObjectId();
      const res = await exec();
      expect(res.status).toBe(404);
    });

    it("should return 200 if input is valid", async () => {
      const res = await exec();
      expect(res.status).toBe(200);
    });

    it("should return the Ingredient Object if input is valid", async () => {
      const res = await exec();
      expect(res.body).toHaveProperty("_id", ingredient._id.toHexString());
      expect(res.body).toHaveProperty("name", ingredient.name);
      expect(res.body).toHaveProperty("image", ingredient.image);
      expect(res.body).toHaveProperty("category", ingredient.category);
    });
  });
});
