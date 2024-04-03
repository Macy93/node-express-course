const express = require("express");
const app = express();

const people = require("./routes/people");
const auth = require("./routes/auth");

const logger = require("./middleware/logger");
const authorize = require("./authorize");

//static assets
app.use(express.static("./methods-public")); //NOT ABLE TO FETCH DATA
//FROM JAVASCRIPT.HTML

//parse form data

//wanting to capture the name:data and do something with it, this is the body-parser
app.use(express.urlencoded({ extended: false }));

//parse json
app.use(express.json());

//this will be used in people.js
//"/" replaces"api/v1/people
//this is our base route
app.use("/api/v1/people", people);
app.use("/login", auth);

app.get("/api/items", [logger, authorize], (req, res) => {
  console.log(req.user); //req.user from authorize.js
  res.send("Items");
});

/*---this code was moved to auth.js
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please Provide Credentials");
  res.send("POST"); //prints "POST" to the browser once a name is submitted
});
*/

/*----all of this code was moved to people.js and the app was changed to router---

let { people } = require("./dDELata"); //from data.js file

app.get("/api/v1/people", (req, res) => {
  res.status(200).json({ success: true, date: people });
});

//don't forget post add data
app.post("/api/v1/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please Provide Name Value" });
  }
  res.status(201).send({ success: true, person: name }); //201 is a successful post
});

app.post("/api/people/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please Provide Name Value" });
  }
  res.status(201).send({ success: true, data: [...people, name] });
});

//so with put, you need to acces the parameters so that you can locate the data
//then update/edit it
app.put("/api/v1/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  //console.log(id, name);
  //res.send("Hello World!");

  //finding a person, if the person's id matches the number id param
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${id}` });
  }
  //iterating over the array to find the people and id
  //iterating over people
  const newPeople = people.map((person) => {
    //person id matches the params
    if (person.id === Number(id)) {
      person.name = name; //if person name from the body matches my name
    }
    return person; //if not, return a person
  });
  //so in postman, we looked for id:1 which was John and changed the name to Peter
  //localhost:5000/api/v1/people/1
  //"name":"peter"
  //remember the put method modifies the data
  res.status(200).json({ success: true, data: newPeople });
});
//quite often put and delete will be similar
//iterate over the array and remove that person from the list
//trying to find a person whose id matches that in the params
app.delete("/api/v1/people/:id", (req, res) => {
  //changing number string to Number
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${req.params.id}` });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: newPeople });
});
*/
app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
