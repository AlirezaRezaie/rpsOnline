const express = require("express");
const router = express.Router;

router.get("/game", (req, res) => {
  res.send("404");
});

module.exports = router;
