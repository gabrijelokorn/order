const express = require("express");

const users = require("./users");
const auth = require("./auth");

const api = express();


api.use("/users", users);
api.use("/auth", auth);


module.exports = api;