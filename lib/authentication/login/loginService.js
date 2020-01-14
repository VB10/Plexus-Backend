// const express = require("express");
var HttpStatus = require("http-status-codes");

function getSample(req, res) {
  const response = { message: "THIS IS OK3" };
  return res.status(HttpStatus.OK).json(response);
}

module.exports = { getSample };
