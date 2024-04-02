const Task = require("../models/Task");

//we want to wrap all of our async functions using asyncWrapper in this file
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

//we completely removed the try/catch block and put it in the async.js file
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({}); //find is a static function
  //status options below
  //res.status(200).json({ tasks });
  //res.status(200).json({ tasks,amount:tasks.length });
  //res.status(200).json({ success:true,data:{tasks, nbHits: tasks.length} });
  // res.status(200)
  // .json({ status: "success", data: {tasks, nbHits: tasks.length } });
  res.status(200).json({ tasks });
});
//Use this code to check in postman then rewrite to the code below
//const createTask = (req, res) => {
//  res.send("create task");
//};

//removed the try/catch block
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

/*original
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No Task With Id: ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
*/
//new getTask with asyncWrapper
const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No Task With Id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

//new:true gets us new task items
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError(`No Task With Id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No Task With Id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

//these are called controllers
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
