const { users } = require("../../data/data");
const bcrypt = require("bcrypt");
exports.getUserById = (id) => {
  const user = users.find((user) => user.id === id);
  return user;
};

exports.getUserByEmail = (email) => {
  const user = users.find((user) => user.email === email);
  return user;
};

exports.getUserByUsername = (username) => {
  const user = users.find((user) => user.username === username);
  return user;
};

exports.getAllUsers = () => {
  return users;
};

exports.createUser = (newUser) => {
  // generate a new ID for the user
  const newUserId = users.length + 1;

  // generate a salt (a random string used in the hashing process)
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);

  // hash a password using the generated salt
  const hashedPassword = bcrypt.hashSync(newUser.password, salt);
  newUser.password = hashedPassword

  // add the new user to the array
  users.push({ ...newUser, id: newUserId });

  // return the new user object
  return { ...newUser, id: newUserId };
};

exports.updateUser = (id, updatedUserData) => {
  // find the user by id
  const userToUpdate = users.find((user) => user.id === id);

  if (!userToUpdate) {
    return null; // user not found
  }

  // update the user data
  Object.assign(userToUpdate, updatedUserData);

  return userToUpdate;
};
