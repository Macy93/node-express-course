const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect"); //only if we are successful connecting
//to the db will be try to connect to the server
require("dotenv").config();

//middleware
app.use(express.json()); //this is for the data in req.body

//routes //get request// path or url, callback function
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

//this gets us to the tasks.js page and runs it I guess
app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
//goals:
//app.get('/api/v1/tasks')          -get all the tasks
//app.post('api/v1/tasks')          -create a new task
//api.get('api/v1/tasks/:id')       -get single task
//api.patch('/api/v1/tasks/:id')    -update task
//app.delete('/api/v1/tasks/:id')    -delete task
