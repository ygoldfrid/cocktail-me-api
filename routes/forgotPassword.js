const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const Joi = require("joi");
const nodemailer = require("nodemailer");

const validateBody = require("../middleware/validateBody");
const validateUser = require("../middleware/validateUser");
const validateResetToken = require("../middleware/validateResetToken");

router.post(
  "/request",
  [validateBody(validateEmail), validateUser],
  async (req, res) => {
    const token = crypto.randomBytes(3).toString("hex").toUpperCase();

    const salt = await bcrypt.genSalt(10);
    const hashedToken = await bcrypt.hash(token, salt);

    req.user.set({
      passwordResetToken: hashedToken,
      passwordResetExpiration: Date.now() + 3600000,
    });
    await req.user.save();

    sendEmail(req.user, token);

    res.send();
  }
);

router.post(
  "/validate",
  [validateBody(validateToken), validateUser, validateResetToken],
  (req, res) => {
    res.send();
  }
);

router.put(
  "/reset",
  [validateBody(validatePassword), validateUser, validateResetToken],
  async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedNewPassword = await bcrypt.hash(req.body.newPassword, salt);

    req.user.set({
      password: hashedNewPassword,
      passwordResetToken: null,
      passwordResetExpiration: null,
    });
    await req.user.save();

    res.send();
  }
);

function sendEmail(user, token) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.RESET_EMAIL,
      pass: process.env.RESET_PASSWORD,
    },
  });

  const mailOptions = {
    from: "Cocktail Me Team <noreply@cocktailme.com>",
    to: `${user.email}`,
    subject: "Cocktail Me Reset Password",
    text:
      `Hi ${user.name}!\n\n` +
      "You are receiving this because you have requested the reset of the password for your account.\n\n" +
      "Please use this one-time code to complete the process within one hour of receiving it:\n\n" +
      `${token}\n\n` +
      "If you did not request this, please ignore this email and your password will remain unchanged.\n\n" +
      "Cocktail Me Team",
    html:
      `<p>Hi ${user.name}!<p>` +
      "<p>You are receiving this because you have requested the reset of the password for your account.<p>" +
      "<p>Please use this one-time code to complete the process within one hour of receiving it:<p>" +
      `<h3><b>${token}\n\n</b></h3>` +
      "<p>If you did not request this, please ignore this email and your password will remain unchanged.<p>" +
      "<p>Cocktail Me Team<p>",
  };

  transporter.sendMail(mailOptions, (error, response) => {});
}

function validateEmail(email) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
  };
  return Joi.validate(email, schema);
}

function validateToken(token) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    token: Joi.string().min(6).max(6).required(),
  };
  return Joi.validate(token, schema);
}

function validatePassword(password) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    token: Joi.string().min(6).max(6).required(),
    newPassword: Joi.string().min(5).max(255).required(),
  };
  return Joi.validate(password, schema);
}

module.exports = router;
