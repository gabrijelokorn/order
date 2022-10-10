// ------------ REQUIREMENTS ------------ //
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const path = require("path");

const api = require("./api/api");
// ------------ ------------ ------------ //


// ------------ DECLARATAIONS ------------ // 
const PORT = 5000;
// ------------ ------------- ------------ //


const app = express();
app.use(cors());


// ------------ MIDDLEWARE ------------ //
app.use(express.static('public/dist/order'));
app.use("/api", api);
app.use((req, res) => {
    res.sendFile(path.join(`${__dirname}/public/dist/order/index.html`))
});
// ------------ ---------- ------------ //


app.listen(PORT, console.log("App running on http://localhost:5000"));

