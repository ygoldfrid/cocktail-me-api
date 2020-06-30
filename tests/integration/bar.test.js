const request = require("supertest");
const { User } = require("../../models/user");
const { Ingredient } = require("../../models/ingredient");
const mongoose = require("mongoose");

let server;
let user;
let token;
let name = "name";
let email = "email@email.com";
let password = "password";
let ingredient1;

describe("/api/bar", () => {
  beforeEach(async () => {
    server = require("../../index");

    await request(server).post("/api/users").send({
      name,
      email,
      password,
    });

    user = await User.findOne({ email });

    ingredient1 = new Ingredient({
      name: "ingredient1",
      image: "image1",
      category: "category1",
    });
    ingredient1.save();

    user.bar = [ingredient1._id];
    await user.save();

    token = user.generateAuthToken();
  });

  afterEach(async () => {
    await User.deleteMany({});
    await Ingredient.deleteMany({});
    await server.close();
  });

  describe("GET /", () => {
    const exec = () => {
      return request(server).get("/api/bar").set("x-auth-token", token);
    };

    it("should return 401 if token not provided", async () => {
      token = "";
      const res = await exec();
      expect(res.status).toBe(401);
    });

    it("should return 400 if invalid token", async () => {
      token = "invalid_token";
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it("should return 200 if input is valid", async () => {
      const res = await exec();
      expect(res.status).toBe(200);
    });

    it("should return the bar", async () => {
      const res = await exec();
      expect(res.body.length).toBe(1);
      expect(res.body[0]).toHaveProperty("name", ingredient1.name);
      expect(res.body[0]).toHaveProperty("image", ingredient1.image);
    });
  });

  describe("POST /", () => {
    let ingredient2;
    let id;

    beforeEach(async () => {
      ingredient2 = new Ingredient({
        name: "ingredient2",
        image: "image2",
        category: "category2",
      });
      ingredient2.save();

      id = ingredient2._id;
    });

    const exec = () => {
      return request(server)
        .post("/api/bar")
        .set("x-auth-token", token)
        .send({ _id: id });
    };

    it("should return 400 if ingredient already in bar", async () => {
      id = ingredient1._id;
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it("should return 404 if ingredient not found", async () => {
      id = mongoose.Types.ObjectId();
      const res = await exec();
      expect(res.status).toBe(404);
    });

    it("should return 200 if input is valid", async () => {
      const res = await exec();
      expect(res.status).toBe(200);
    });

    it("should return the bar", async () => {
      const res = await exec();
      expect(res.body.length).toBe(2);
      expect(res.body[0]).toHaveProperty("name", ingredient1.name);
      expect(res.body[0]).toHaveProperty("image", ingredient1.image);
      expect(res.body[1]).toHaveProperty("name", ingredient2.name);
      expect(res.body[1]).toHaveProperty("image", ingredient2.image);
    });
  });

  describe("DELETE /", () => {
    let id;

    beforeEach(() => {
      id = ingredient1._id;
    });

    const exec = () => {
      return request(server)
        .delete(`/api/bar/${id}`)
        .set("x-auth-token", token);
    };

    it("should return 404 if ingredient not found", async () => {
      id = mongoose.Types.ObjectId();
      const res = await exec();
      expect(res.status).toBe(404);
    });

    it("should return 200 if input is valid", async () => {
      const res = await exec();
      expect(res.status).toBe(200);
    });

    it("should return the bar", async () => {
      const res = await exec();
      expect(res.body.length).toBe(0);
    });
  });
});
