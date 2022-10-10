// ------------ REQUIREMENTS ------------ //
const express = require("express");
const cors = require("cors");

const api = require("./api/api");
// ------------ ------------ ------------ //

const PORT = 5000;

const app = express();
app.use(cors());
app.use("/api", api);




app.listen(PORT, console.log("App running on http://localhost:5000"));

