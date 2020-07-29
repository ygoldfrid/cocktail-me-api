const mongoose = require("mongoose");
const request = require("supertest");
const { User } = require("../../models/user");

let server;

describe("/api/users", () => {
  beforeEach(() => (server = require("../../index")));
  afterEach(async () => {
    await User.deleteMany({});
    await server.close();
  });

  describe("GET /me", () => {
    let token;
    let user;

    const exec = () => {
      return request(server).get(`/api/users/me`).set("x-auth-token", token);
    };

    beforeEach(async () => {
      user = new User({
        name: "name",
        email: "email",
        password: "password",
      });
      await user.save();
      token = user.generateAuthToken();
    });

    it("should return 401 if user is not logged in", async () => {
      token = "";
      const res = await exec();
      expect(res.status).toBe(401);
    });

    it("should return 400 if token is invalid", async () => {
      token = "invalid_token";
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it("should return 200 if input is valid", async () => {
      const res = await exec();
      expect(res.status).toBe(200);
    });

    it("should return the User Object if input is valid", async () => {
      const res = await exec();
      expect(res.body).toHaveProperty("_id", user._id.toHexString());
      expect(res.body).toHaveProperty("name", user.name);
      expect(res.body).toHaveProperty("email", user.email);
    });
  });

  describe("POST /", () => {
    let name;
    let email;
    let password;

    const exec = () => {
      return request(server).post("/api/users").send({ name, email, password });
    };

    beforeEach(() => {
      name = "name";
      email = "email@email.com";
      password = "password";
    });

    it("should return 400 if email empty", async () => {
      email = "";
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it("should return 400 if name empty", async () => {
      name = "";
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it("should return 400 if password is less than 5 characters", async () => {
      password = "1234";
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it("should return 400 if email is in invalid format", async () => {
      email = "bad_format";
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it("should return 400 if email already registered", async () => {
      const user = new User({ email, name, password });
      await user.save();
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it("should return 200 if input is valid", async () => {
      const res = await exec();
      expect(res.status).toBe(200);
    });

    it("should save the user if it is valid", async () => {
      await exec();
      const user = await User.findOne({ email });
      expect(user).not.toBeNull();
    });

    it("should return the new user", async () => {
      const res = await exec();
      expect(res.body).toHaveProperty("_id");
      expect(res.body).toHaveProperty("name", name);
      expect(res.body).toHaveProperty("email", email);
    });
  });
});
