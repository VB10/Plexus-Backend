// const express = require("express");
var   HttpStatus = require("http-status-codes");
const User       = require("../../model/user");

function getSample(req, res) {
  const response = { message: "THIS IS OK3" };
  return res.status(HttpStatus.OK).json(response);
}

function loginUser(body, callback) {
  const query          = {};
        query.name     = body.name;
        query.password = body.password;
        
  User.find(query, (err, user) => {
    if (err || user.length == 0) {
      callback(null);
    } else {
      callback(user);
    }
  });
}

module.exports = { getSample, loginUser };
