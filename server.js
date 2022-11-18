const express = require("express");
const articlerouter = require("./routes/articles");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

app.use("/articles", articlerouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
