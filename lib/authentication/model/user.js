const mongoose = require("mongoose");

const { Schema } = mongoose;
const UserDetail = require("./user_detail");

const userSchema = new Schema({
  name    : { type: String,required:true },
  password: { type: String,required:true },
});

const userRegisterSchema = new Schema({
  login      : {type:  userSchema,required:true},
  information: { type: UserDetail.schema.obj, required: true }
});

module.exports = mongoose.model("User", userSchema);
module.exports = mongoose.model("UserRegister", userRegisterSchema);