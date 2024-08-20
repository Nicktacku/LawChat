const express = require("express");
const router = express.Router();
const path = require("path");

module.exports = router;

router.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});
