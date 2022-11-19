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
      description: "test description",
    },
    {
      title: "Articles title",
      createdAt: new Date(),
      description: "test description",
    },
    {
      title: "Articles title",
      createdAt: new Date(),
      description: "test description",
    },
    {
      title: "Articles title",
      createdAt: new Date(),
      description: "test description",
    },
  ];
  res.render("articles/index", { articles: articles });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
