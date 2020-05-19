const express = require("express");
const bodyParser = require("body-parser");
const mongoose   = require("mongoose");

// eslint-disable-next-line no-unused-vars
const _              = mongoose.connect("mongodb://localhost/vbapi");
const app            = express();
const port           = process.env.PORT || 3000;
const loginRouter    = require("../lib/authentication/login/router/login_router");
const registerRouter = require("../lib/authentication/register/router/register_router");

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", loginRouter);
app.use("/api", registerRouter);
app.listen(port, () => console.log(`Example app listening on port port!`));
