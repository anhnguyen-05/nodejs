const express = require("express"); //commonjs
require("dotenv").config(); //setting up to use env
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const mysql = require("mysql2");

const app = express(); //app express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME || "localhost"; //host

//config
configViewEngine(app);

//Khai báo route
app.use("/", webRoutes);

//create connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "123456",
  database: "hoidanit",
});

// simple query
connection.query("SELECT * FROM Users u", function (err, results, fields) {
  console.log(">>> results:", results); // results contains rows returned by server
  console.log(">>> fields:", fields); // fields contains extra meta data about results, if available
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
