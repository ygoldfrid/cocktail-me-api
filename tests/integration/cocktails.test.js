const mongoose = require("mongoose");
const request = require("supertest");
const { Cocktail } = require("../../models/cocktail");
const { Ingredient } = require("../../models/ingredient");

let server;

describe("/api/cocktails", () => {
  beforeEach(() => (server = require("../../index")));
  afterEach(async () => {
    await Cocktail.deleteMany({});
    await Ingredient.deleteMany({});
    await server.close();
  });

  describe("GET /", () => {
    it("should return all cocktails", async () => {
      const cocktails = [
        { name: "cocktail1", image: "image1", preparation: ["step1", "step2"] },
        { name: "cocktail2", image: "image2", preparation: ["step1", "step2"] },
      ];
      await Cocktail.collection.insertMany(cocktails);
      const res = await request(server).get("/api/cocktails");
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(res.body.some((c) => c.name === "cocktail1")).toBeTruthy();
      expect(res.body.some((c) => c.image === "image1")).toBeTruthy();
      expect(res.body.some((c) => c.name === "cocktail2")).toBeTruthy();
      expect(res.body.some((c) => c.image === "image2")).toBeTruthy();
    });
  });

  describe("GET /:id", () => {
    let cocktail;
    let id;

    const exec = () => {
      return request(server).get(`/api/cocktails/${id}`);
    };

    beforeEach(async () => {
      cocktail = new Cocktail({
        name: "cocktail1",
        image: "image1",
        preparation: ["step1", "step2"],
      });
      await cocktail.save();
      id = cocktail._id;
    });

    it("should return 404 if ID is invalid", async () => {
      id = 1;
      const res = await exec();
      expect(res.status).toBe(404);
    });

    it("should return 404 if cocktail with given ID was not found", async () => {
      id = mongoose.Types.ObjectId();
      const res = await exec();
      expect(res.status).toBe(404);
    });

    it("should return 200 if input is valid", async () => {
      const res = await exec();
      expect(res.status).toBe(200);
    });

    it("should return the Cocktail Object if input is valid", async () => {
      const res = await exec();
      expect(res.body).toHaveProperty("_id", cocktail._id.toHexString());
      expect(res.body).toHaveProperty("name", cocktail.name);
      expect(res.body).toHaveProperty("image", cocktail.image);
    });
  });
});
