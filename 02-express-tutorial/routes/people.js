const express = require("express");
const router = express.Router();

let { people } = require("../data"); //from data.js file

const {
  getPerson,
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

//the callback functions are (createPerson),(deletePerson),etc.
router.route("/").get(getPeople).post(createPerson);
router.route("/:id").put(updatePerson).delete(deletePerson);
router.route("/:id").get(getPerson);

module.exports = router;
