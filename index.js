const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

//static folder
app.use(express.static(path.join(__dirname, "public")));

// set the view engine to ejs
app.set("view engine", "ejs");

app.get("/home", (req, res) => {
  res.render("pages/index", { title: "Grid Schemer" });
});

app.listen(PORT, () => console.log(`Starting port ${PORT}...`));
