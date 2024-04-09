const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  //const search = "ab"; value coming from the query;letters ab
  const products = await Product.find({ price: { $gt: 30 } }) //price is greater than $30
    .sort("price")
    .select("name price");
  // .limit(10)
  //.skip(5);
  //const products = await Product.find({name: { $regex: search, $options: "i" }}),
  // regex search for name;i=case insensitive
  //find featured object
  //using throw new Error, no need for try/catch or setting up our own middleware
  //express-async-errors package does it all for us
  //throw new Error("testing async errors");
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields, numericFilters } = req.query; //looking for featured object
  const queryObject = {}; //equals a new object

  if (featured) {
    //if featured is true...then
    queryObject.featured = featured === "true" ? true : false; //if featured is true
    //set to true otherwise set to false
  }

  if (company) {
    queryObject.company = company; //if the company queryObject exists set = to company
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ["price", "rating"];
    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }
  //if the user passes in the sort, we need to chain it//we find, then sort
  console.log(queryObject);
  let result = Product.find(queryObject); //if fields exists
  //sort
  if (sort) {
    const sortList = sort.split(",").join(""); //split up and join back together
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }

  if (fields) {
    const fieldsList = fields.split(",").join("");
    result = result.select(fieldsList);
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10; //if no limit is passed, use 10
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);
  // we have 23 products
  //we want only 7 items/ page, how many pages do we have?
  //23/7 = 4 pages (7,7,7,2 items on a page)

  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
