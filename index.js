const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;


// set the view engine to ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index", { title: "Grid Schemer" });
});
//static folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log(`Starting port ${PORT}...`));
