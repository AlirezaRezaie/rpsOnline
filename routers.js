//dependencies
const express = require("express");
const router = express.Router();
const path = require("path");

//getting the url
router.get("/game", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

module.exports = router;
