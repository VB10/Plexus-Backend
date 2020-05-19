const mongoose = require("mongoose");

const { Schema } = mongoose;

const userForgot = new Schema({
  question: { type: String },
  answer  : { type: String }
});

const userDetail = new Schema({
  mail  : { type: String },
  image : { type: String },
  forgot: userForgot
});

module.exports = mongoose.model("UserDetail", userDetail);
