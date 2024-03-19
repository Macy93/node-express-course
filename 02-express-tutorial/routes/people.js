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

//Using the router.method code below is fine or you can use less lines doing the
//  exact same thing with the router.route code

//router.get("/", getPeople);
//router.post("/", createPeople);
//router.post("/postman", createPersonPostman);
//router.put("/:id", updatePerson);
//router.delete("/:id", deletePerson);

//the callback functions are (createPerson),(deletePerson),etc.
router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);
router.route("/:id").get(getPerson);

module.exports = router;
