// const express = require("express");
var   HttpStatus = require("http-status-codes");
const User       = require("./model/user");

function getSample(req, res) {
  const response = { message: "THIS IS OK3" };
  return res.status(HttpStatus.OK).json(response);
}

function saveUser(body) {
  var user = new User(body);
  console.log(user);
  user.save();
}

function loginUser(body, callback) {
  const query      = {};
        query.name = "";
  User.find(query, (err, user) => {
    if (err || user.length == 0) {
      callback(null);
    } else {
      callback(user);
    }
  });
}

function forgotUser(body, callback) {
  const query      = {};
        query.name = body.name;

  User.findOne(query, (err, user) => {
    if (err || user.length == 0) {
      callback(null);
    } else {
      callback(user);
    }
  });
}

module.exports = { getSample, saveUser, loginUser ,forgotUser};
