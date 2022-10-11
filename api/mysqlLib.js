const mysql = require("mysql");

// ------------ CONNECTION ------------ //
const dbName = 'order'
const pool = mysql.createPool({
    connectionLimit: 100,
    user: 'root',
    host: 'localhost',
    database: dbName,
});
// ------------ ---------- ------------ //


module.exports = pool;