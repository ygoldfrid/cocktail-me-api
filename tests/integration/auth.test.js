const request = require("supertest");
const jwt = require("jsonwebtoken");
const config = require("config");
const { User } = require("../../models/user");

let server;

describe("auth", () => {
  let token;
  let user;
  let name;
  let email;
  let password;

  beforeEach(async () => {
    server = require("../../index");

    name = "name";
    email = "email@email.com";
    password = "password";

    const res = await request(server)
      .post("/api/users")
      .send({ name, email, password });

    user = res.body;

    token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      config.get("jwtPrivateKey")
    );
  });

  afterEach(async () => {
    await User.deleteMany({});
    await server.close();
  });

  describe("auth middleware", () => {
    const exec = () => {
      return request(server)
        .get("/api/users/me")
        .set("x-auth-token", token)
        .send();
    };

    it("should return 401 if no token is provided", async () => {
      token = "";
      const res = await exec();
      expect(res.status).toBe(401);
    });

    it("should return 400 if token is invalid", async () => {
      token = "invalid_token";
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it("should return 200 if token is valid", async () => {
      const res = await exec();
      expect(res.status).toBe(200);
    });
  });

  describe("/api/auth", () => {
    describe("POST /", () => {
      const exec = () => {
        return request(server).post("/api/auth").send({ email, password });
      };

      it("should return 400 if email is in bad format", async () => {
        email = "bad_email_format";
        const res = await exec();
        expect(res.status).toBe(400);
      });

      it("should return 400 if email is wrong", async () => {
        email = "wrong_email@email.com";
        const res = await exec();
        expect(res.status).toBe(400);
      });

      it("should return 400 if password is wrong", async () => {
        password = "wrong_password";
        const res = await exec();
        expect(res.status).toBe(400);
      });

      it("should return 200 if input is valid", async () => {
        const res = await exec();
        expect(res.status).toBe(200);
      });

      it("should return valid JWT if input is valid", async () => {
        const res = await exec();
        const decoded = jwt.verify(res.text, config.get("jwtPrivateKey"));
        expect(decoded).toHaveProperty("_id", user._id);
        expect(decoded).toHaveProperty("name", user.name);
        expect(decoded).toHaveProperty("email", user.email);
      });
    });
  });
});
