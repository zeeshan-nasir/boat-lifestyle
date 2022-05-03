const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// generating token using json-web-tokens
const generateToken = (user) => {
  return jwt.sign({ user }, `${process.env.SECRET_KEY}`);
};

//register user with email and password
const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    //checking email
    if (user) {
      return res.status(400).send({ message: "email already registered!" });
    }

    // if new user, create it or allow to register;
    user = await User.create(req.body);

    const token = generateToken(user);
    return res.status(200).send({ user, token });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

//logging in user if already exist
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    //checked if email exists
    if (!user) {
      return res.status(400).send("Invalid email or password");
    }

    //if email exists, check password;
    const match = user.checkPassword(req.body.password);

    // if it doesn't match
    if (!match) {
      return res.status(400).send({ message: "Invalid email or password" });
    }

    // if it matches generate token for user
    const token = generateToken(user);
    return res.status(200).send({ user, token });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

module.exports = { register, login };
