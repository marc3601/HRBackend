const express = require("express");
const { readAllUsers } = require("../db/models/Users");
const router = express.Router();

// GET all users in database
router.get("/", async (req, res, next) => {
  const data = await readAllUsers();
  res.json(data);
});

module.exports = router;
