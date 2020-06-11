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
      const cocktails = [{ name: "cocktail1" }, { name: "cocktail2" }];
      await Cocktail.collection.insertMany(cocktails);
      const res = await request(server).get("/api/cocktails");
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(res.body.some((g) => g.name === "cocktail1")).toBeTruthy();
      expect(res.body.some((g) => g.name === "cocktail2")).toBeTruthy();
    });
  });

  describe("GET /:id", () => {
    let cocktail;
    let id;

    const exec = () => {
      return request(server).get(`/api/cocktails/${id}`);
    };

    beforeEach(async () => {
      cocktail = new Cocktail({ name: "cocktail1" });
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
    });
  });

  describe("POST /", () => {
    // let token;
    let name;
    let components;

    const exec = () => {
      return (
        request(server)
          .post("/api/cocktails")
          // .set("x-auth-token", token)
          .send({ name, components })
      );
    };

    beforeEach(async () => {
      //   token = new User().generateAuthToken();
      name = "cocktail1";
      const ingredient1 = await new Ingredient({
        name: "ingredient1",
        measure: "ml",
      }).save();
      const ingredient2 = await new Ingredient({
        name: "ingredient2",
        measure: "units",
      }).save();
      components = [
        { ingredientId: ingredient1._id, quantity: 1 },
        { ingredientId: ingredient2._id, quantity: 1 },
      ];
    });

    // it("should return 401 if user is not logged in", async () => {
    //   token = "";
    //   const res = await exec();
    //   expect(res.status).toBe(401);
    // });

    it("should return 400 if cocktail name is shorter than 3 characters", async () => {
      name = "co";
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it("should return 400 if cocktail name is longer than 50 characters", async () => {
      name = new Array(52).join("c");
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it("should return 404 if an ingredient was not found", async () => {
      components[0].ingredientId = mongoose.Types.ObjectId();
      const res = await exec();
      expect(res.status).toBe(404);
    });

    it("should save the cocktail if it is valid", async () => {
      await exec();
      const cocktail = await Cocktail.find({ name: "cocktail1" });
      expect(cocktail).not.toBeNull();
    });

    it("should return 200 if it is valid", async () => {
      const res = await exec();
      expect(res.status).toBe(200);
    });

    it("should return the new cocktail if it is valid", async () => {
      const res = await exec();
      expect(res.body).toHaveProperty("_id");
      expect(res.body).toHaveProperty("name", "cocktail1");
    });
  });

  describe("PUT /:id", () => {
    // let token;
    let newName;
    let cocktail;
    let components;
    let id;

    const exec = () => {
      return (
        request(server)
          .put(`/api/cocktails/${id}`)
          // .set("x-auth-token", token)
          .send({ name: newName, components })
      );
    };

    beforeEach(async () => {
      cocktail = new Cocktail({ name: "cocktail1" });
      const ingredient1 = await new Ingredient({
        name: "ingredient1",
        measure: "ml",
      }).save();
      const ingredient2 = await new Ingredient({
        name: "ingredient2",
        measure: "units",
      }).save();
      components = [
        { ingredientId: ingredient1._id, quantity: 1 },
        { ingredientId: ingredient2._id, quantity: 1 },
      ];
      await cocktail.save();
      id = cocktail._id;
      // token = new User().generateAuthToken();
      newName = "updatedName";
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

    it("should return 404 if cocktail with given ID was not found", async () => {
      id = mongoose.Types.ObjectId();
      const res = await exec();
      expect(res.status).toBe(404);
    });

    it("should return 400 if cocktail name is shorter than 3 characters", async () => {
      newName = "co";
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it("should return 400 if cocktail name is longer than 50 characters", async () => {
      newName = new Array(52).join("c");
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it("should return 200 if input is valid", async () => {
      const res = await exec();
      expect(res.status).toBe(200);
    });

    it("should update the cocktail if it is valid", async () => {
      await exec();
      const updatedCocktail = await Cocktail.findById(id);
      expect(updatedCocktail.name).toBe(newName);
    });

    it("should return the updated cocktail", async () => {
      const res = await exec();
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("_id", cocktail._id.toHexString());
      expect(res.body).toHaveProperty("name", newName);
    });
  });

  describe("DELETE /:id", () => {
    // let token;
    let cocktail;
    let id;

    const exec = () => {
      return (
        request(server)
          .delete(`/api/cocktails/${id}`)
          // .set("x-auth-token", token)
          .send()
      );
    };

    beforeEach(async () => {
      cocktail = new Cocktail({ name: "cocktail1" });
      await cocktail.save();
      id = cocktail._id;
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

    it("should return 404 if cocktail with given ID was not found", async () => {
      id = mongoose.Types.ObjectId();
      const res = await exec();
      expect(res.status).toBe(404);
    });

    it("should return 200 if input is valid", async () => {
      const res = await exec();
      expect(res.status).toBe(200);
    });

    it("should delete the cocktail if it is valid", async () => {
      await exec();
      const cocktailInDb = await Cocktail.findById(id);
      expect(cocktailInDb).toBeNull();
    });

    it("should return the deleted cocktail", async () => {
      const res = await exec();
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("_id", cocktail._id.toHexString());
      expect(res.body).toHaveProperty("name", cocktail.name);
    });
  });
});
