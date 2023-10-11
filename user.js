const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  Name: String,
  Lastname: String,
  Email: String,
  password: String
});
module.exports= mongoose.model("users",productSchema);