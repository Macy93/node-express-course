const mongoose = require("mongoose");

//setting up the structure for the documents in our collections
//so string values for list of items in task manager
//only the properties in the TaskSchema wiil appear in postman and the database,
// cannot add items directly in Postman otherwise they will be ignored
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must Provide Name"],
    trim: true, //this will delete extra spaces around the name
    maxlength: [20, "Name Can Not Be More Than 20 Characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
