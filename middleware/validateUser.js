const { User } = require("../models/user");

module.exports = async function (req, res, next) {
  const user = await User.findOne({ email: req.body.email });

  if (!user)
    return res.status(400).send("There is no user with the email provided");

  req.user = user;
  next();
};
