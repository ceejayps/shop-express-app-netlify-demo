const { createUser, userExists } = require("./functions/users");

exports.login = (req, res) => {
  const { email, password, username } = req.body;
  console.log(req.body);
  res.status(200).send({ email, password, username });
};

exports.register = (req, res) => {
  const { email, password, username } = req.body;
  if (userExists(email, ""))
    return res
      .status(400)
      .json({ message: "User with this email already exists" });
  if (userExists("", username))
    return res
      .status(400)
      .json({ message: "User with this username already exists" });

  const newUser = createUser({ email, password, username });
  res.send(newUser);
};
