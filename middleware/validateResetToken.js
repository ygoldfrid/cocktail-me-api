const bcrypt = require("bcrypt");

module.exports = async function (req, res, next) {
  if (!req.user.passwordResetToken)
    return res.status(400).send("The provided token is invalid or has expired");

  const validToken = await bcrypt.compare(
    req.body.token.toUpperCase(),
    req.user.passwordResetToken
  );

  const validExpiration = Date.now() < req.user.passwordResetExpiration;

  if (!validToken || !validExpiration)
    return res.status(400).send("The provided token is invalid or has expired");

  next();
};
