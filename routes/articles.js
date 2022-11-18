const express = require("express");
const { models } = require("mongoose");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("In articles");
});

module.exports = router;
