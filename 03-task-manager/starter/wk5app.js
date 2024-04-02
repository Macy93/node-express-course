const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect"); //only if we are successful connecting
//to the db will be try to connect to the server
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.static("./public")); // static files location-in public folder
app.use(express.json()); //this is for the data in req.body

//routes //get request// path or url, callback function
//app.get("/hello", (req, res) => {
//  res.send("Task Manager App");
//});

//this gets us to the tasks.js page and runs it I guess
app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

//instead of hard coding the port, this will allow the system to use
//whatever port is available
//this is good for deployment, locally 3000 is good
//to test this line of code, stop server then $ PORT=6000 node wk5app.js
//should see server is listening on port 6000
const port = process.env.PORT || 3000;

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
