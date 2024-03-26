const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    //to get remove deprecation warnings you need the next 4 lines
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
