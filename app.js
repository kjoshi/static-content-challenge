const express = require("express");
const hbs = require("express-handlebars");
const helpers = require("handlebars-helpers").markdown();
const fs = require("fs/promises");
const path = require("path");

const app = express();

app.engine(
  "handlebars",
  hbs.engine({
    defaultLayout: "template",
    helpers: helpers,
  })
);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.static(path.join(__dirname, "assets")));

app.get("/", (_req, res) => {
  res.render("index");
});

app.get("*", async (req, res) => {
  const filename = `content${req.url}/index.md`;
  try {
    await fs.access(filename); // Possible race condition here
    res.status(200).render("content", { filename: filename });
  } catch (err) {
    res.status(404).render("not_found");
  }
});

module.exports = app;
