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

module.exports = app;
