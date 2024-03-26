const mongoose = require("mongoose");

//setting up the structure for the documents in our collections
//so string values for list of items in task manager
const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

module.exports = mongoose.model("Task", TaskSchema);
