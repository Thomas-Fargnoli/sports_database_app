var mysql = require("mysql2");

var connection = mysql.createConnection({
    host: 'uri-sports-database.c7ccbxtdxaaj.us-east-2.rds.amazonaws.com',
    port: 3306,
    database: 'Sports_Database',
    user: 'root',
    password: 'Vepusith-0806'
});

module.exports = connection;