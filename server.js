// ------------ REQUIREMENTS ------------ //
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const path = require("path");

const api = require("./api/api");
const bodyParser = require("body-parser");
// ------------ ------------ ------------ //


// ------------ DECLARATAIONS ------------ // 
const PORT = 5000;
// ------------ ------------- ------------ //


const app = express();

// ------------ SESSION AND COOKIES ------------ //
app.use(session({
    secret: "rolling-communication",
    rolling: true,
    cookie: {
        maxAge: 1000 * 60 * 60,
    },
    // resave: false, // <- Forces the session to be saved back to the session store, even if the session was never modified during the request.
    // saveUninitialized: true, // <- Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified.
}));
// ------------ ------------------- ------------ //

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ------------ MIDDLEWARE ------------ //
app.use(express.static('public/dist/order'));
app.use("/api", api);
app.use((req, res) => {
    res.sendFile(path.join(`${__dirname}/public/dist/order/index.html`))
});
// ------------ ---------- ------------ //


app.listen(PORT, console.log("App running on http://192.168.13.128:5000"));

