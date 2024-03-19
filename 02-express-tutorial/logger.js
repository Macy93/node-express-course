//logger function is the middleware.It allows for reuse of the function when called
//Either you send back your own response or you pass it on to the next middleware
//in the future, better to keep logger ina separate file for easier readibility
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time); //in console method=GET, url=homepage, time=year
  next();
};

module.exports = logger;
