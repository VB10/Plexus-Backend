const express = require("express");
const HttpStatus                         = require("http-status-codes");
const { getSample, saveUser, loginUser } = require("../loginService");

// const express = require('../')
const loginRouter = express.Router();

loginRouter.route("/user").post((req, res) => {
  saveUser(req.body);
  return res.status(HttpStatus.OK).json();
});

loginRouter
  .route("/login")
  .get((req, res) => getSample(req, res))
  .post((req, res) => {
    loginUser(req.body, response => {
      if (response) {
        return res.status(HttpStatus.OK).json(response);
      } else {
        return res.status(HttpStatus.NOT_FOUND).json(response);
      }
    });
  });

module.exports = loginRouter;
