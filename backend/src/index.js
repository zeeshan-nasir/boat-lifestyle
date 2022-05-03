//Express app config and routes

const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

module.exports = app;
