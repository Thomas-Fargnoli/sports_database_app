var mysql = require("mysql2");

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'sports_database',
    user: 'root',
    password: 'Vepusith-0806'
});

module.exports = connection;