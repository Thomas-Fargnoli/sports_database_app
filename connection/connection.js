var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    database: 'heroku_053a159c78151c3',
    user: 'b4bb56f5c400da',
    password: '0d07880c'
});

module.exports = connection;
