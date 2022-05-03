//connecting with Boat backend mongo Database
const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  return mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@boat-db.rfrb0.mongodb.net/boatDB?retryWrites=true&w=majority`
  );
};

module.exports = connect;
