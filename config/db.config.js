// const mysql = require('mysql');
const mysql = require("mysql2");


// MySQL connection

const connection = mysql.createConnection({
    host: "localhost",
    user: "dbuser",
    password: "Deeksha@29",
    database: "Service_categories",
  });

  connection.connect((error) => {
    if (error) {
     console.error("Error in connected to the database.",error)
    }else{
    console.log("Successfully connected to the database.");
    }
  });
  
  const mysqlPool = connection.promise();
  
  module.exports = mysqlPool;
  
  
