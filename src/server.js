const express = require("express"); //commonjs
const path = require("path"); //commonjs
require("dotenv").config(); //setting up to use env

console.log(">>> Check env: ", process.env);

const app = express(); //app express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME || "localhost"; //host

//config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Khai báo route
app.get("/", (req, res) => {
  res.send("Hello World! with Andrew Nguyen");
});

app.get("/abc", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});