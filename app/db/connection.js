require("dotenv").config();
const mysql = require("mysql");
const { threadId } = require("worker_threads");

const connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "golf"
});

// Settingup connection.query to use promises intead of callbacks
// This allows for use of the async/await syntax
connection.connect(function(err) {
    if(err){
        console.log("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + threadId)
});

module.exports = connection;