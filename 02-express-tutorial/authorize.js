const authorize = (req, res, next) => {
  const { user } = req.query;
  //in browser localhost:5000/?user=john will result in Home on the page
  if (user === "john") {
    req.user = { name: "john", id: 3 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};
module.exports = authorize;
