// Google auth configuration.

const passport = require("passport");
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");

const User = require("../models/user.model");

var GoogleStrategy = require("passport-google-oauth20").Strategy;
var FacebookStrategy = require("passport-facebook").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_KEY,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },

    async function (accessToken, refreshToken, profile, cb) {
      let user = await User.findOne({ email: profile?._json?.email })
        .lean()
        .exec();
      console.log(user);

      if (!user) {
        user = await User.create({
          email: profile._json.email,
          password: uuidv4(),
        });
      }

      console.log(user);
      return cb(null, user);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET_KEY,
      callbackURL: "http://localhost:5000/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ facebookId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

module.exports = passport;
