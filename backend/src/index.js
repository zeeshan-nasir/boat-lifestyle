//Express app config and routes

const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

//Custom input validation using express validator
const { body, validationResult } = require("express-validator");
const validationBodyRules = [
  body("email", "enter a valid email").isEmail(),
  body("password", "password should be atleast 6 characters").isLength({
    min: 6,
  }),
];

const checkRules = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

//user routes
const userController = require("./controllers/user.controller");
app.use("/users", userController);

//user register and login controller for manual registration
const { register, login } = require("./controllers/auth.controller");
app.post("/register", validationBodyRules, checkRules, register);
app.post("/login", validationBodyRules, checkRules, login);

//Google OAuth
const passport = require("./configs/oauth");
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

//Facebook OAuth
app.get("/auth/facebook", passport.authenticate("facebook"));

app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/login",
    session: false,
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

//Product routes
const productController = require("./controllers/product.controller");
app.use("/products", productController);

module.exports = app;
