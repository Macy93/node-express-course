const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name must be provided"],
  },

  price: {
    type: Number,
    required: [true, "product price must be provided"],
  },

  featured: {
    type: Boolean,
    default: false, //set as false so don't have to worry about if the
    //product is featured or not
  },

  rating: {
    type: Number,
    default: 4.5, //if there is not a rating, we will go with default value
  },

  createdAt: {
    //date when the product was created
    type: Date, //if we don't have the date, the default is the current time
    default: Date.now(),
  },

  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not supported",
      //{VALUE} will access the value the user is providing, comes
      //in with the request
    },
    //enum: ["ikea", "liddy", "caressa", "marcos"], //use enum to limit company options
  },
});

module.exports = mongoose.model("Product", productSchema);
