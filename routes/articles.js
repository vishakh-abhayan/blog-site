const express = require("express");
const { models } = require("mongoose");
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("articles/new");
});
router.post("/", (req, res) => {});

module.exports = router;
