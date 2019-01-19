// 1st, create a schema to contain all the properties to be stored in the db.
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

mongoose.model("users", userSchema); // create user model and load.

// require this file in index.js.
