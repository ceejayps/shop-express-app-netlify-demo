const { token } = require("morgan");
const { isValidEmail, generateJWT } = require("./functions/services");
const { createUser, userExists, getUserByEmailOrUsername } = require("./functions/users");
// const bcrypt = require("bcrypt");

exports.login = (req, res) => {
  // const { identifier, password } = req.body;
  // const user = getUserByEmailOrUsername(identifier);
  // if (!user) return res.status(401).json({ message: "Invalid email or username or password" });

  // const passwordMatch = bcrypt.compareSync(password, user.password);

  // if (!passwordMatch) return res.status(401).json({ message: "Invalid email or username or password" });
  
  // const token = generateJWT(user)
  
  // return res.status(200).json({ token, user });
};

exports.register = (req, res) => {
  // const { email, password, username } = req.body;
  // if(!isValidEmail(email))return res
  // .status(400)
  // .json({ message: "please check email" });
  // if (userExists(email, ""))
  //   return res
  //     .status(400)
  //     .json({ message: "User with this email already exists" });
  // if (userExists("", username))
  //   return res
  //     .status(400)
  //     .json({ message: "User with this username already exists" });

  // const newUser = createUser({ email, password, username });
  res.send(newUser);
};
