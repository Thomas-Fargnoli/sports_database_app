var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'Sports_Database',
    user: 'root',
    password: 'Vepusith-0806'
});

module.exports = connection;