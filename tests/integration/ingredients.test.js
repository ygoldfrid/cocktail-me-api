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
      const ingredients = [{ name: "ingredient1" }, { name: "ingredient2" }];
      await Ingredient.collection.insertMany(ingredients);
      const res = await request(server).get("/api/ingredients");
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(res.body.some((g) => g.name === "ingredient1")).toBeTruthy();
      expect(res.body.some((g) => g.name === "ingredient2")).toBeTruthy();
    });
  });

  describe("GET /:id", () => {
    let ingredient;
    let id;

    const exec = () => {
      return request(server).get(`/api/ingredients/${id}`);
    };

    beforeEach(async () => {
      ingredient = new Ingredient({ name: "ingredient1", measure: "m" });
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
    });
  });

  describe("POST /", () => {
    // let token;
    let name;
    let measure;

    const exec = () => {
      return (
        request(server)
          .post("/api/ingredients")
          // .set("x-auth-token", token)
          .send({ name, measure })
      );
    };

    beforeEach(() => {
      //   token = new User().generateAuthToken();
      name = "ingredient1";
      measure = "m";
    });

    // it("should return 401 if user is not logged in", async () => {
    //   token = "";
    //   const res = await exec();
    //   expect(res.status).toBe(401);
    // });

    it("should return 400 if ingredient name is shorter than 3 characters", async () => {
      name = "co";
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it("should return 400 if ingredient name is longer than 50 characters", async () => {
      name = new Array(52).join("c");
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it("should save the ingredient if it is valid", async () => {
      await exec();
      const ingredient = await Ingredient.find({ name: "ingredient1" });
      expect(ingredient).not.toBeNull();
    });

    it("should return 200 if it is valid", async () => {
      const res = await exec();
      expect(res.status).toBe(200);
    });

    it("should return the new ingredient if it is valid", async () => {
      const res = await exec();
      expect(res.body).toHaveProperty("_id");
      expect(res.body).toHaveProperty("name", "ingredient1");
    });
  });

  describe("PUT /:id", () => {
    // let token;
    let newName;
    let newMeasure;
    let ingredient;
    let id;

    const exec = () => {
      return (
        request(server)
          .put(`/api/ingredients/${id}`)
          // .set("x-auth-token", token)
          .send({ name: newName, measure: newMeasure })
      );
    };

    beforeEach(async () => {
      ingredient = await new Ingredient({
        name: "ingredient1",
        measure: "m",
      }).save();
      id = ingredient._id;
      // token = new User().generateAuthToken();
      newName = "updatedName";
      newMeasure = "updatedMeasure";
    });

    // it("should return 401 if user is not logged in", async () => {
    //   token = "";
    //   const res = await exec();
    //   expect(res.status).toBe(401);
    // });

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

    it("should return 400 if ingredient name is shorter than 3 characters", async () => {
      newName = "co";
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it("should return 400 if ingredient name is longer than 50 characters", async () => {
      newName = new Array(52).join("c");
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it("should return 200 if input is valid", async () => {
      const res = await exec();
      expect(res.status).toBe(200);
    });

    it("should update the ingredient if it is valid", async () => {
      await exec();
      const updatedIngredient = await Ingredient.findById(id);
      expect(updatedIngredient.name).toBe(newName);
    });

    it("should return the updated ingredient", async () => {
      const res = await exec();
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("_id", ingredient._id.toHexString());
      expect(res.body).toHaveProperty("name", newName);
    });
  });

  describe("DELETE /:id", () => {
    // let token;
    let ingredient;
    let id;

    const exec = () => {
      return (
        request(server)
          .delete(`/api/ingredients/${id}`)
          // .set("x-auth-token", token)
          .send()
      );
    };

    beforeEach(async () => {
      ingredient = await new Ingredient({
        name: "ingredient1",
        measure: "m",
      }).save();
      id = ingredient._id;
      // token = new User({ isAdmin: true }).generateAuthToken();
    });

    // it("should return 401 if user is not logged in", async () => {
    //   token = "";
    //   const res = await exec();
    //   expect(res.status).toBe(401);
    // });

    // it("should return 403 if user is not admin", async () => {
    //   token = new User({ isAdmin: false }).generateAuthToken();
    //   const res = await exec();
    //   expect(res.status).toBe(403);
    // });

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

    it("should delete the ingredient if it is valid", async () => {
      await exec();
      const ingredientInDb = await Ingredient.findById(id);
      expect(ingredientInDb).toBeNull();
    });

    it("should return the deleted ingredient", async () => {
      const res = await exec();
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("_id", ingredient._id.toHexString());
      expect(res.body).toHaveProperty("name", ingredient.name);
    });
  });
});
