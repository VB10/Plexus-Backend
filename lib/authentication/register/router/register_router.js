const express = require("express");
const HttpStatus             = require("http-status-codes");
const { saveUser, getUsers } = require("../register_service");

// const express = require('../')
const registerRouter = express.Router();

registerRouter
  .route("/user")
  .get((req, res) => {
    getUsers(val => res.status(HttpStatus.OK).json(val));
  })
  .post((req, res) => {
    saveUser(req.body, err => {
      if (err) {
        return res.status(HttpStatus.BAD_REQUEST).json(err);
      } else {
        return res.status(HttpStatus.OK).json();
      }
    });
  });

module.exports = registerRouter;
