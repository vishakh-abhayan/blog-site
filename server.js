const express = require("express");
const articlerouter = require("./routes/articles");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

app.use("/articles", articlerouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Articles title",
      createdAt: new Date(),
      discription: "test discription",
    },
    {
      title: "Articles title",
      createdAt: new Date(),
      discription: "test discription",
    },
    {
      title: "Articles title",
      createdAt: new Date(),
      discription: "test discription",
    },
    {
      title: "Articles title",
      createdAt: new Date(),
      discription: "test discription",
    },
  ];
  res.render("index", { articles: articles });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
