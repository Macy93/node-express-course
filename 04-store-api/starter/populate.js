require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");

const jsonProducts = require("./products.json");

//we want to connect to the database then use the model to automatically
//add the json products to the database
//we do this with start

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany(); //can use to delete all products
    await Product.create(jsonProducts); //creating products to start from scratch
    console.log("Success!!!!!");
    process.exit(0); //0 means everything went well so we exit the process
    //in Mongo you will see all product data is still in database
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
