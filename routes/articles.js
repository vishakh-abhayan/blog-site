const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

mongoose.connect("mongodb://localhost/blog ");

router.get("/new", (req, res) => {
  res.render("articles/new");
});
router.post("/", (req, res) => {});

module.exports = router;
