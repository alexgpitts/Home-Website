// index.js

/**
* Required External Modules
*/
const express = require("express");
const path = require("path");


/**
* App Variables
*/
const app = express();
const port = process.env.PORT || "8000";


/**
*  App Configuration
*/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));


/**
* Routes Definitions
*/
app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

app.get("/assignments", (req, res) => {
  res.render("assignments", { title: "Assignments" });
});

app.get("/LBCC", (req, res) => {
  res.render("LBCC", { title: "LBCC Assignments" });
});

app.get("/OSU", (req, res) => {
  res.render("OSU", { title: "OSU Assignments" });
});

app.get("/LBCC/Jupiter", (req, res) => {
  res.render("Jupiter", { title: "LBCC Mass Of Jupiter" });
});

app.get("/OSU/Smallsh", (req, res) => {
  res.render("smallsh", { title: "Small Shell" });
});







/**
* Server Activation
*/
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});