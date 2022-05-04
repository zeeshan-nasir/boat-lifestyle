//Express app config and routes

const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

//user routes
const userController = require("./controllers/user.controller");
app.use("/users", userController);

//user register and login controller for manual registration
const { register, login } = require("./controllers/auth.controller");
app.post("/register", register);
app.post("/login", login);

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
    res.redirect("/users");
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
    res.redirect("/users");
  }
);

//Product routes
const productController = require("./controllers/product.controller");
app.use("/products", productController);

module.exports = app;
