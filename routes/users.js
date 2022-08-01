var express = require("express");
var { createUser } = require("../db/models/Users");
var router = express.Router();

/* GET users listing. */
router.get("/", async (req, res, next) => {
  console.log(req.query.name);
  createUser(req.query.name);
  res.send("User " + req.query.name + " created!");
});

module.exports = router;
