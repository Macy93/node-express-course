const express = require("express");
const router = express.Router();

//rewriting route from "/login" to"/"
router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please Provide Credentials");
  //res.send("POST"); //prints "POST" to the browser once a name is submitted
});

module.exports = router;
