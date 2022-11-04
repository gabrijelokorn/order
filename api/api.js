const express = require("express");

const users = require("./users");
const auth = require("./auth");
const people = require("./people");

const api = express.Router();


api.use("/auth", auth);
api.use("/users", users);
api.use("/people", people);


module.exports = api;