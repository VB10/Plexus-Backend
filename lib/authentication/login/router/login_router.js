const express = require("express");
const { getSample } = require("../loginService");
const User          = require("../model/user");

// const express = require('../')
const loginRouter = express.Router();
loginRouter
  .route("/login")
  .get(getSample)
  .post((req, res) => {
    var user = new User(req.body);
    console.log(user);
    user.save();
    return res.json(user);
  });

module.exports = loginRouter;
